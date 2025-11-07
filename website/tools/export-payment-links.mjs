import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2024-06-20" });

// Recovery slugs (underscore form) mapped to titles
const RECOVERY = [
  ["recovery_introductory","Introduction to Recovery"],
  ["recovery_grief","Grief & Loss"],
  ["recovery_fear","Fear & Anxiety"],
  ["recovery_anxiety","Overcoming Anxiety"],
  ["recovery_depression","Healing from Depression"],
  ["recovery_identity","Identity & Self-Worth"],
  ["recovery_forgiveness","Power of Forgiveness"],
  ["recovery_shame","Shame & Guilt"],
  ["recovery_financial","Financial Recovery"],
  ["recovery_boundaries","Healthy Boundaries"],
  ["recovery_purpose","Rediscovering Purpose"],
  ["recovery_trauma","Healing from Trauma"],
  ["recovery_resilience","Building Resilience"],
  ["recovery_faith","Faith in Hard Times"],
  ["recovery_restoration","Restoration & Renewal"],
];

const SUCCESS_URL = "https://risetothrive-hub.com/thank-you?session_id={CHECKOUT_SESSION_ID}&amount={AMOUNT}&currency={CURRENCY}";

function toEnvKey(slug){ return `NEXT_PUBLIC_STRIPE_URL_${slug}`; }

async function listLinks() {
  const links = await stripe.paymentLinks.list({
    limit: 100,
    expand: ["data.line_items.data.price.product"],
  });
  return links.data;
}

function normalizeSlug(candidate) {
  if (!candidate) return undefined;
  return candidate.replace(/-/g, "_");
}

async function findLinkForSlug(allLinks, slug) {
  for (const pl of allLinks) {
    const li = pl.line_items?.data?.[0];
    const price = li?.price;
    const prod = price?.product;
    const candidate = normalizeSlug(
      pl.metadata?.course_slug
      || price?.lookup_key
      || (prod && prod.metadata && prod.metadata.course_slug)
    );
    if (candidate && candidate === slug) return pl;
  }
  return null;
}

async function main() {
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("ERROR: STRIPE_SECRET_KEY env var is required to run this tool.");
    process.exit(1);
  }
  const mode = (process.argv.find(a => a.startsWith("--mode=")) || "--mode=csv").split("=")[1];
  const allLinks = await listLinks();

  const rows = [["slug","course_title","stripe_url"]];
  const envLines = [];

  for (const [slug,title] of RECOVERY) {
    const link = await findLinkForSlug(allLinks, slug);
    const url = link?.url || "";
    rows.push([slug, title, url]);
    envLines.push(`${toEnvKey(slug)}=${url}`);
  }

  if (mode === "csv") {
    console.log(rows.map(r => r.map(v => String(v).replaceAll('"','\"')).join(",")).join("\n"));
  } else if (mode === "env") {
    console.log(envLines.join("\n"));
  } else {
    console.error("Unknown mode. Use --mode=csv or --mode=env");
    process.exit(1);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
