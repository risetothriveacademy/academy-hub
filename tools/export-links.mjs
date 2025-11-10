import Stripe from "stripe";
import fs from "node:fs/promises";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

async function main() {
  const rows = [["slug","title","url","price_id","active"]];
  let starting_after;

  do {
    const res = await stripe.paymentLinks.list({ limit: 100, starting_after });
    for (const l of res.data) {
      const slug = l.metadata?.course_slug || "";
      const title = l.metadata?.course_title || "";
      const url = l.url || "";
      const priceId = l.line_items?.data?.[0]?.price?.id || "";
      if (!slug) continue; // skip untagged links
      rows.push([slug, title, url, priceId, String(l.active)]);
    }
    starting_after = res.has_more ? res.data[res.data.length - 1].id : undefined;
  } while (starting_after);

  await fs.mkdir("website/docs", { recursive: true });
  await fs.writeFile("website/docs/recovery-stripe-links.csv", rows.map(r => r.join(",")).join("\n"));
  console.log("✅ Wrote website/docs/recovery-stripe-links.csv with", rows.length - 1, "links.");
}

main().catch(e => { console.error(e); process.exit(1); });
