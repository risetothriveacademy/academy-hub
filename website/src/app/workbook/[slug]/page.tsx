import { notFound } from "next/navigation";
import WorkbookClient from "./WorkbookClient";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
  slate: "#0f172a",
};

// Workbook data for all 18 courses
const WORKBOOKS = {
  "shame-guilt": {
    number: 1,
    title: "Stuck in Shame & Guilt",
    subtitle: "Breaking Free from Condemnation",
    scripture: {
      text: "There is therefore now no condemnation for those who are in Christ Jesus.",
      reference: "Romans 8:1 (NLT)"
    },
    sections: [
      {
        title: "Understanding Your Shame",
        prompts: [
          "When did you first experience shame? Describe the moment and how it made you feel about yourself.",
          "What lies has shame told you about your worth and identity?",
          "How has shame affected your relationships, decisions, and daily life?"
        ]
      },
      {
        title: "Truth Replacement",
        prompts: [
          "Read Romans 8:1 slowly three times. What does 'no condemnation' mean to you personally?",
          "What would your life look like if you truly believed there was no condemnation?",
          "Write a letter to yourself from God's perspective, declaring the truth about who you are."
        ]
      },
      {
        title: "Action Steps",
        prompts: [
          "What is one lie of shame you will actively replace with truth this week?",
          "Who is one safe person you can share your story with?",
          "What daily practice will help you remember you are free from condemnation?"
        ]
      }
    ],
    prayer: "Father, thank You that there is no condemnation in Christ. I choose to believe Your truth over the lies of shame. Help me walk in the freedom You purchased for me. In Jesus' name, Amen."
  },

  "fear": {
    number: 2,
    title: "Breaking the Cycle of Fear",
    subtitle: "Walking in Power, Love, and a Sound Mind",
    scripture: {
      text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
      reference: "2 Timothy 1:7 (NKJV)"
    },
    sections: [
      {
        title: "Identifying Your Fears",
        prompts: [
          "What are the top 3 fears that control your thoughts and decisions?",
          "When did these fears begin? What events or experiences triggered them?",
          "How have these fears limited your life, relationships, or calling?"
        ]
      },
      {
        title: "Replacing Fear with Truth",
        prompts: [
          "According to 2 Timothy 1:7, what has God given you instead of fear?",
          "How would your life change if you operated in power, love, and a sound mind?",
          "What specific truth from Scripture can you speak over each fear you identified?"
        ]
      },
      {
        title: "Faith in Action",
        prompts: [
          "What is one courageous step you will take this week to confront your fear?",
          "How will you remind yourself daily that fear is not from God?",
          "Who will hold you accountable as you walk out of fear and into faith?"
        ]
      }
    ],
    prayer: "Lord, I reject the spirit of fear. I receive Your spirit of power, love, and a sound mind. Help me to walk boldly in the authority You've given me. Amen."
  },

  // Add placeholders for remaining courses
  "hidden-pattern": {
    number: 3,
    title: "The Hidden Pattern Holding You Back",
    subtitle: "Truth That Sets You Free",
    scripture: {
      text: "You will know the truth, and the truth will set you free.",
      reference: "John 8:32 (NLT)"
    },
    sections: [
      {
        title: "Uncovering the Pattern",
        prompts: [
          "What recurring pattern do you notice in your life (relationships, finances, emotions)?",
          "When did this pattern begin? What was happening in your life at that time?",
          "How has this hidden pattern sabotaged your progress and peace?"
        ]
      },
      {
        title: "Truth and Freedom",
        prompts: [
          "What truth about God, yourself, or your situation have you been avoiding?",
          "How will knowing and accepting this truth set you free?",
          "What new pattern will you establish to replace the old one?"
        ]
      },
      {
        title: "Breaking the Cycle",
        prompts: [
          "What is one specific action you will take to break this pattern?",
          "How will you respond differently the next time this pattern tries to surface?",
          "Who will support you in maintaining your new pattern of freedom?"
        ]
      }
    ],
    prayer: "Jesus, reveal the truth I need to see. Break every hidden pattern that has held me captive. I receive Your freedom today. Amen."
  },

  // Remaining courses will follow similar structure
  "move-on": { number: 4, title: "Why You Can't Move On", subtitle: "Embracing New Things", scripture: { text: "Forget the former things; do not dwell on the past. See, I am doing a new thing!", reference: "Isaiah 43:18-19 (NIV)" }, sections: [], prayer: "" },
  "hopelessness": { number: 5, title: "Fighting Hopelessness", subtitle: "Filled with Joy and Peace", scripture: { text: "May the God of hope fill you with all joy and peace in believing.", reference: "Romans 15:13 (ESV)" }, sections: [], prayer: "" },
  "purpose": { number: 6, title: "Feeling Lost in Your Purpose", subtitle: "Hope and a Future", scripture: { text: "For I know the plans I have for you, declares the Lord, plans to give you hope and a future.", reference: "Jeremiah 29:11 (NIV)" }, sections: [], prayer: "" },
  "exhausted": { number: 7, title: "Exhausted but Still Broken", subtitle: "Finding Rest", scripture: { text: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28 (NIV)" }, sections: [], prayer: "" },
  "resentment": { number: 8, title: "Resentment Ruining Your Peace", subtitle: "Choosing Forgiveness", scripture: { text: "Get rid of all bitterness, rage and anger... Be kind and compassionate to one another, forgiving each other.", reference: "Ephesians 4:31-32 (NIV)" }, sections: [], prayer: "" },
  "anger": { number: 9, title: "When Anger Turns Inward", subtitle: "Healthy Expression", scripture: { text: "In your anger do not sin. Do not let the sun go down while you are still angry.", reference: "Ephesians 4:26 (NIV)" }, sections: [], prayer: "" },
  "trauma": { number: 10, title: "Overwhelmed by Trauma", subtitle: "God's Nearness", scripture: { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18 (NIV)" }, sections: [], prayer: "" },
  "past": { number: 11, title: "Stuck in Your Past", subtitle: "Becoming New", scripture: { text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", reference: "2 Corinthians 5:17 (NIV)" }, sections: [], prayer: "" },
  "boundaries": { number: 12, title: "Struggling to Set Boundaries", subtitle: "Guarding Your Heart", scripture: { text: "Guard your heart above all else, for it determines the course of your life.", reference: "Proverbs 4:23 (NLT)" }, sections: [], prayer: "" },
  "financial-despair": { number: 13, title: "Financial Despair", subtitle: "God's Provision", scripture: { text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.", reference: "Philippians 4:19 (NIV)" }, sections: [], prayer: "" },
  "forgiveness": { number: 14, title: "When Forgiveness Feels Impossible", subtitle: "Bearing with One Another", scripture: { text: "Bear with each other and forgive one another if any of you has a grievance against someone.", reference: "Colossians 3:13 (NIV)" }, sections: [], prayer: "" },
  "identity": { number: 15, title: "Losing Your Identity & Self-Worth", subtitle: "Chosen and Special", scripture: { text: "You are a chosen people, a royal priesthood, a holy nation, God's special possession.", reference: "1 Peter 2:9 (NIV)" }, sections: [], prayer: "" },
  "grief": { number: 16, title: "Carrying the Weight of Grief", subtitle: "Comfort for Mourning", scripture: { text: "Blessed are those who mourn, for they will be comforted.", reference: "Matthew 5:4 (NIV)" }, sections: [], prayer: "" },
  "depression": { number: 17, title: "Trapped in Depression", subtitle: "Putting Hope in God", scripture: { text: "Why, my soul, are you downcast? Put your hope in God, for I will yet praise him, my Savior and my God.", reference: "Psalm 42:11 (NIV)" }, sections: [], prayer: "" },
  "anxiety": { number: 18, title: "Why Anxiety Won't Let Go", subtitle: "Prayer Instead of Worry", scripture: { text: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.", reference: "Philippians 4:6 (NIV)" }, sections: [], prayer: "" },
};

export default async function WorkbookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const workbook = WORKBOOKS[slug as keyof typeof WORKBOOKS];

  if (!workbook) {
    notFound();
  }

  return <WorkbookClient workbook={workbook} slug={slug} />;
}
