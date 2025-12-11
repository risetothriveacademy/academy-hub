"use client";

import { useState } from "react";
import Link from "next/link";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
  slate: "#0f172a",
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  hearAboutUs: string;
  supportArea: string[];
  consentAgreed: boolean;
}

export default function FoundationLeadForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    hearAboutUs: "",
    supportArea: [],
    consentAgreed: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.consentAgreed) {
      setError("Please agree to the legal disclosures to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      // HubSpot Form Submission
      // Replace PORTAL_ID and FORM_GUID with your actual HubSpot values
      const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "YOUR_PORTAL_ID";
      const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FOUNDATION_FORM_ID || "YOUR_FORM_GUID";

      const hubspotData = {
        fields: [
          { name: "firstname", value: formData.firstName },
          { name: "lastname", value: formData.lastName },
          { name: "email", value: formData.email },
          { name: "phone", value: formData.phone },
          { name: "country", value: formData.country },
          { name: "how_did_you_hear_about_us", value: formData.hearAboutUs },
          { name: "primary_support_area", value: formData.supportArea.join(", ") },
          { name: "compliance_acknowledged", value: "true" },
          { name: "program_interest", value: "foundation" },
          { name: "source", value: "website_form" },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotData),
        }
      );

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = "/foundation/thank-you";
      } else {
        const errorData = await response.json();
        console.error("HubSpot submission error:", errorData);
        setError("There was an error submitting the form. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      supportArea: prev.supportArea.includes(value)
        ? prev.supportArea.filter((item) => item !== value)
        : [...prev.supportArea, value],
    }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border-2 border-slate-700 bg-slate-900/90 backdrop-blur-sm p-8 shadow-xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300 mb-4">
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full"
            style={{ background: BRAND.teal }}
          />
          Foundation Course · Lead Form
        </div>
        <h2 className="text-3xl font-bold text-white">
          Start Your Healing Journey Today
        </h2>
        <p className="mt-3 text-slate-300">
          Fill out the form below and we'll be in touch with next steps for the
          Foundation Course.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-slate-200"
            >
              First Name <span className="text-red-400">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:ring-offset-2 focus:ring-offset-slate-950"
              placeholder="John"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="text-sm font-semibold text-slate-200"
            >
              Last Name <span className="text-red-400">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:ring-offset-2 focus:ring-offset-slate-950"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-200">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:ring-offset-2 focus:ring-offset-slate-950"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-slate-200">
            Phone Number <span className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:ring-offset-2 focus:ring-offset-slate-950"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-semibold text-slate-200">
            Country <span className="text-red-400">*</span>
          </label>
          <select
            id="country"
            required
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="NZ">New Zealand</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* How did you hear about us? (Optional) */}
        <div className="space-y-2">
          <label
            htmlFor="hearAboutUs"
            className="text-sm font-semibold text-slate-200"
          >
            How did you hear about us? <span className="text-slate-400">(Optional)</span>
          </label>
          <select
            id="hearAboutUs"
            value={formData.hearAboutUs}
            onChange={(e) =>
              setFormData({ ...formData, hearAboutUs: e.target.value })
            }
            className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <option value="">Select an option</option>
            <option value="Facebook Ad">Facebook Ad</option>
            <option value="Instagram Ad">Instagram Ad</option>
            <option value="Google Search">Google Search</option>
            <option value="Friend/Family Referral">Friend/Family Referral</option>
            <option value="YouTube">YouTube</option>
            <option value="Podcast">Podcast</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Primary Support Area (Optional) */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-200">
            Primary area you are seeking support in{" "}
            <span className="text-slate-400">(Optional - select all that apply)</span>
          </label>
          <div className="space-y-2">
            {[
              "Trauma & PTSD",
              "Anxiety & Fear",
              "Depression & Hopelessness",
              "Grief & Loss",
              "Shame & Guilt",
              "Financial Crisis",
              "Identity & Worth",
              "Boundaries & Relationships",
              "Other",
            ].map((area) => (
              <label
                key={area}
                className="flex items-center gap-3 text-slate-300 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={formData.supportArea.includes(area)}
                  onChange={() => handleCheckboxChange(area)}
                  className="h-4 w-4 rounded border-slate-700 bg-slate-950/60 text-[#0097B2] focus:ring-2 focus:ring-[#0097B2] focus:ring-offset-2 focus:ring-offset-slate-950"
                />
                <span className="text-sm">{area}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="space-y-2">
          <label className="flex items-start gap-3 text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.consentAgreed}
              onChange={(e) =>
                setFormData({ ...formData, consentAgreed: e.target.checked })
              }
              className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950/60 text-[#0097B2] focus:ring-2 focus:ring-[#0097B2] focus:ring-offset-2 focus:ring-offset-slate-950"
            />
            <span className="text-sm">
              <span className="text-red-400">*</span> I understand this is a
              faith-based educational and coaching program and not medical, mental
              health, legal, or financial advice. I agree to the{" "}
              <Link
                href="/disclosures/universal-legal-disclosures"
                target="_blank"
                className="text-[#0097B2] hover:text-[#00c5e5] underline font-semibold"
              >
                Universal Legal Disclosures
              </Link>
              .
            </span>
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-bold text-slate-950 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundImage: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.gold})`,
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit & Start Your Journey"}
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-slate-400 text-center">
          Your information is secure and will only be used to provide you with
          program information. We respect your privacy.
        </p>
      </form>
    </div>
  );
}
