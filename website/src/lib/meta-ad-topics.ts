export interface MetaAdTopic {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  painPoints: string[];
  icon: string;
  gradient: string;
  badge: string;
  hubspotTag: string;
  priority: "wave1" | "wave2";
}

export const META_AD_TOPICS: MetaAdTopic[] = [
  // WAVE 1: Primary 6 Topics (Launch First)
  {
    slug: "emotional-overwhelm",
    title: "Feeling Emotionally Overwhelmed?",
    subtitle: "You don't have to carry this weight alone",
    description: "Discover practical, faith-based tools to manage overwhelming emotions and regain peace.",
    painPoints: [
      "Constant stress and emotional exhaustion",
      "Feeling like you can't handle one more thing",
      "Struggling to process your emotions",
      "Overwhelmed by daily responsibilities",
    ],
    icon: "🌊",
    gradient: "from-[#0097B2] to-[#10B981]",
    badge: "SAFE ENTRY POINT",
    hubspotTag: "emotional_overwhelm",
    priority: "wave1",
  },
  {
    slug: "anxiety-fear",
    title: "Breaking Free from Anxiety & Fear",
    subtitle: "Find lasting peace in the midst of uncertainty",
    description: "Learn how to break the cycle of anxiety and fear with proven, faith-based strategies.",
    painPoints: [
      "Constant worry and racing thoughts",
      "Fear that keeps you stuck",
      "Anxiety that affects your daily life",
      "Feeling controlled by 'what if' thinking",
    ],
    icon: "🛡️",
    gradient: "from-[#DB910F] to-[#0097B2]",
    badge: "HIGH RESONANCE",
    hubspotTag: "anxiety_fear",
    priority: "wave1",
  },
  {
    slug: "feeling-stuck",
    title: "Why You Feel Stuck (And How to Break Free)",
    subtitle: "Move from paralysis to purposeful action",
    description: "Understand the hidden patterns keeping you stuck and discover the path forward.",
    painPoints: [
      "Feeling paralyzed and unable to move forward",
      "Knowing what to do but unable to do it",
      "Stuck in the same patterns and cycles",
      "Decision fatigue and mental exhaustion",
    ],
    icon: "🔓",
    gradient: "from-[#0097B2] to-[#10B981]",
    badge: "VERY CLICKABLE",
    hubspotTag: "feeling_stuck",
    priority: "wave1",
  },
  {
    slug: "burnout-exhaustion",
    title: "Recovering from Burnout & Emotional Exhaustion",
    subtitle: "Restore your energy and reclaim your life",
    description: "Practical tools to recover from burnout and rebuild sustainable emotional resilience.",
    painPoints: [
      "Exhausted no matter how much you rest",
      "Running on empty emotionally",
      "Feeling numb and disconnected",
      "Burnout affecting your work and relationships",
    ],
    icon: "🔋",
    gradient: "from-[#DB910F] to-[#0097B2]",
    badge: "HIGH FOR PROFESSIONALS",
    hubspotTag: "burnout_exhaustion",
    priority: "wave1",
  },
  {
    slug: "not-broken",
    title: "You're Not Broken — You're Healing",
    subtitle: "Discover your true identity beyond the pain",
    description: "A transformative reframe: you're not broken, you're healing. Learn to see yourself through God's eyes.",
    painPoints: [
      "Feeling broken beyond repair",
      "Believing something is fundamentally wrong with you",
      "Struggling with shame and self-worth",
      "Lost sense of identity and purpose",
    ],
    icon: "💎",
    gradient: "from-[#0097B2] to-[#10B981]",
    badge: "TRUST-BUILDING",
    hubspotTag: "not_broken",
    priority: "wave1",
  },
  {
    slug: "clarity-control",
    title: "Regain Clarity & Control Over Your Life",
    subtitle: "From chaos to confidence",
    description: "Clear the mental fog and regain the clarity and control you need to move forward with confidence.",
    painPoints: [
      "Feeling out of control",
      "Mental fog and confusion",
      "Unable to think clearly or make decisions",
      "Life feels chaotic and overwhelming",
    ],
    icon: "🎯",
    gradient: "from-[#DB910F] to-[#0097B2]",
    badge: "OUTCOME-FOCUSED",
    hubspotTag: "clarity_control",
    priority: "wave1",
  },

  // WAVE 2: Optional Add-Ons (Launch if budget allows)
  {
    slug: "decision-fatigue",
    title: "Overcoming Decision Fatigue",
    subtitle: "Make confident choices without the mental exhaustion",
    description: "Break free from decision fatigue and regain mental clarity to make choices with confidence.",
    painPoints: [
      "Every decision feels exhausting",
      "Paralyzed by too many choices",
      "Constantly second-guessing yourself",
      "Mental exhaustion from overthinking",
    ],
    icon: "🧭",
    gradient: "from-[#0097B2] to-[#10B981]",
    badge: "OPTIONAL WAVE 2",
    hubspotTag: "decision_fatigue",
    priority: "wave2",
  },
  {
    slug: "mental-fog",
    title: "Clearing the Mental Fog & Numbness",
    subtitle: "Reconnect with yourself and feel alive again",
    description: "Practical tools to clear the mental fog, reconnect with your emotions, and feel alive again.",
    painPoints: [
      "Feeling numb and disconnected",
      "Can't think clearly or focus",
      "Going through the motions on autopilot",
      "Lost connection with yourself and others",
    ],
    icon: "☁️",
    gradient: "from-[#DB910F] to-[#0097B2]",
    badge: "OPTIONAL WAVE 2",
    hubspotTag: "mental_fog",
    priority: "wave2",
  },
];

// Helper function to get topic by slug
export function getTopicBySlug(slug: string): MetaAdTopic | undefined {
  return META_AD_TOPICS.find((topic) => topic.slug === slug);
}

// Helper function to get Wave 1 topics
export function getWave1Topics(): MetaAdTopic[] {
  return META_AD_TOPICS.filter((topic) => topic.priority === "wave1");
}

// Helper function to get Wave 2 topics
export function getWave2Topics(): MetaAdTopic[] {
  return META_AD_TOPICS.filter((topic) => topic.priority === "wave2");
}
