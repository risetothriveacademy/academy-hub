/**
 * Rise to Thrive Academy Brand System
 * Integrated Master Blueprint - All Courses
 */

export const BRAND = {
  // Primary Colors
  primary: "#0097B2",     // Teal
  accent: "#DB910F",      // Gold
  dark: "#3B3B3B",        // Charcoal
  softDark: "#6C604B",    // Soft Charcoal
  lightBg: "#F5F5F5",     // Light Background

  // Semantic names (for clarity)
  teal: "#0097B2",
  gold: "#DB910F",
  charcoal: "#3B3B3B",
  brown: "#775237",

  // Extended palette
  darkGray: "#3B3B3B",
  white: "#FFFFFF",
};

export const brandGradients = {
  tealGoldDiagonal: "linear-gradient(135deg, #0097B2 0%, #DB910F 45%, #775237 100%)",
  charcoalGlow: "radial-gradient(circle at top, rgba(219,145,15,0.35), #3B3B3B 55%, #000000 100%)",
  tealGradient: "linear-gradient(135deg, #0097B2, #00A8C6)",
  goldGradient: "linear-gradient(135deg, #DB910F, #F0A820)",
  darkGradient: "linear-gradient(180deg, #111827, #1F2937, #0F172A)",
};

export const brandShadows = {
  softCard: "0 18px 45px rgba(0, 0, 0, 0.35)",
  glow: "0 0 24px rgba(0, 151, 178, 0.6)",
  cardHover: "0 24px 60px rgba(0, 0, 0, 0.5)",
  button: "0 8px 24px rgba(219, 145, 15, 0.4)",
};

export const brandLayout = {
  maxWidth: "1200px",
  pagePadding: "py-12 px-4 sm:px-8 lg:px-12",
};

export const brandStyles = {
  // Button styles
  primaryButton: "bg-[#0097B2] hover:bg-[#00819A] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200",
  accentButton: "bg-[#DB910F] hover:bg-[#C18209] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200",

  // Card styles
  card: "bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200",
  cardDark: "bg-[#1F2937] border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200",

  // Heading styles
  h1: "text-3xl md:text-4xl lg:text-5xl font-semibold",
  h2: "text-2xl md:text-3xl font-semibold",
  h3: "text-xl md:text-2xl font-semibold",
};
