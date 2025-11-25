export interface Video {
  id: string;
  title: string;
  type: 'main' | 'bonus' | 'qa' | 'reflection';
  duration: string;
  url: string;
  description?: string;
}

export interface DayContent {
  day: number;
  title: string;
  description: string;
  videos: Video[];
  questions: string[];
}

export const foundationCourse: DayContent[] = [

  {
    day: 1,
    title: "Understanding The 'Unseen Battle' that 'Controls Your Mind'",
    description: "Theme: Awareness & Acknowledgement. Focus: Understanding the deep impact of trauma on your mind, emotions, body, finances. What is trauma and why it lingers.",
    videos: [
      {
        id: "day1-video1",
        title: "Understanding The 'Unseen Battle' Introduction",
        type: "main",
        duration: "28:15",
        url: "https://video.pictory.ai/1750366040052/20250714232928220sg3rn4pcIufybK2.mp4",
        description: "Introduction to the unseen spiritual battles affecting your mind and life"
      },
      {
        id: "day1-video2",
        title: "What is Trauma and Why It Lingers",
        type: "main",
        duration: "24:30",
        url: "https://video.pictory.ai/1750799131740/20250624212700079wBi4KTunYLu4Pq3.mp4",
        description: "Understanding the foundations of trauma and its lasting effects"
      },
      {
        id: "day1-video3",
        title: "Trauma-Informed Care (TIC) Approach",
        type: "main",
        duration: "22:45",
        url: "https://video.pictory.ai/1750801673682/20250714052854143lSf9Emgt1S9BQNY.mp4",
        description: "Professional trauma-informed care principles and applications"
      },
      {
        id: "day1-video4",
        title: "When Trauma Leaves Unresolved Scars",
        type: "main",
        duration: "26:20",
        url: "https://video.pictory.ai/1750800625088/20250624214439396928F0TiiEutmDhw.mp4",
        description: "How unresolved trauma creates ongoing emotional and physical impacts"
      },
      {
        id: "day1-video5",
        title: "Trauma, Unseen Battles & Spiritual Strongholds",
        type: "main",
        duration: "32:10",
        url: "https://video.pictory.ai/1750800761968/20250624214927213RG7K0uphVgKkrz8.mp4",
        description: "Understanding the spiritual dimension of trauma and strongholds"
      },
      {
        id: "day1-video6",
        title: "The Influence of Spiritual Strongholds",
        type: "main",
        duration: "18:30",
        url: "https://video.pictory.ai/1750803407941/20250624230732154fa8ZDCghBBYiQVw.mp4",
        description: "How spiritual strongholds affect daily decisions and life patterns"
      },
      {
        id: "day1-video7",
        title: "Breaking Mental Strongholds",
        type: "main",
        duration: "25:45",
        url: "https://video.pictory.ai/1750805854745/202506242312558038tbP2mRUDKMy1Fm.mp4",
        description: "Practical strategies for breaking free from mental strongholds"
      },
      {
        id: "day1-video8",
        title: "Spiritual Warfare Strategies",
        type: "bonus",
        duration: "20:15",
        url: "https://video.pictory.ai/1750802568991/20250624221825480KWM7NdVRfjPKTO0.mp4",
        description: "Advanced spiritual warfare techniques and strategies"
      },
      {
        id: "day1-video9",
        title: "Understanding Your Mind's Battlefield",
        type: "bonus",
        duration: "23:30",
        url: "https://video.pictory.ai/1752519897717/20250722095744006qelLDaU4vWwSRqO.mp4",
        description: "Deep dive into the battlefield of the mind and conscious awareness"
      },
      {
        id: "day1-video10",
        title: "Day 1 Key Takeaways & Assignment Overview",
        type: "reflection",
        duration: "15:45",
        url: "https://video.pictory.ai/1750806130695/20250624231447041CY3vJRvb5luIppe.mp4",
        description: "Summary of key insights and workbook assignment guidance"
      }
    ],
    questions: [
      "Describe a specific 'unseen battle' you've experienced where trauma seemed to control your thoughts or emotions. What patterns do you recognize?",
      "After learning about trauma-informed care, how do you now understand your past experiences differently?",
      "What spiritual strongholds do you recognize in your life, and how have they influenced your mind, emotions, body, or finances?",
      "Complete the Day 1 workbook assignment 'Unseen Battle that Controls Your Mind'. What were your key discoveries about yourself and your healing journey?"
    ]
  },
  {
    day: 2,
    title: "Rewiring Your Mind To Build Purpose Driven Thoughts",
    description: "Theme: Identifying Deception. Focus: Uncovering false identities, generational patterns, and subconscious lies. Exploring the 7 Negative Forces that create the 'Unseen Battle'.",
    videos: [
      {
        id: "day2-video1",
        title: "Neuroplasticity & Mind Transformation",
        type: "main",
        duration: "30:20",
        url: "https://video.pictory.ai/1750697803805/20250722104237743eE5pp47nmkockQ1.mp4",
        description: "Understanding how your brain can be rewired through faith-based transformation (Romans 12:2)"
      },
      {
        id: "day2-video2",
        title: "Uncovering False Identities & Generational Patterns",
        type: "main",
        duration: "26:45",
        url: "https://video.pictory.ai/1750699663250/20250623173136748br46jVLETXMH8RS.mp4",
        description: "Identifying deceptive thought patterns passed down through generations"
      },
      {
        id: "day2-video3",
        title: "The 7 Negative Forces Creating Unseen Battles",
        type: "main",
        duration: "35:15",
        url: "https://video.pictory.ai/1750788247171/20250722102342958ZhtghxtEWGCxXO2.mp4",
        description: "Deep dive into Fear, Procrastination, Indecision, Discouragement, Insecurity, Poverty & Lack, Distraction"
      },
      {
        id: "day2-video4",
        title: "Hidden Symptoms of Emotional & Financial Distress",
        type: "main",
        duration: "24:30",
        url: "https://video.pictory.ai/1752522069814/20250722104759494dWB7sMX8S72RtW9.mp4",
        description: "Recognizing the subtle signs of trauma-induced emotional and financial struggles"
      },
      {
        id: "day2-video5",
        title: "Breaking Free from Fear and Procrastination",
        type: "main",
        duration: "28:40",
        url: "https://video.pictory.ai/1750699839329/202507221049067943ao9VeMt7kwMR5z.mp4",
        description: "Practical strategies for overcoming fear and procrastination patterns"
      },
      {
        id: "day2-video6",
        title: "Overcoming Indecision and Discouragement",
        type: "main",
        duration: "25:15",
        url: "https://video.pictory.ai/1750717309951/20250722105101644Zjw6IyyGKumdsbQ.mp4",
        description: "Building confidence and decisiveness in your healing journey"
      },
      {
        id: "day2-video7",
        title: "Breaking Poverty Mindset and Scarcity Thinking",
        type: "main",
        duration: "32:20",
        url: "https://video.pictory.ai/1750792430457/20250624194011882nMOvf9CZqlttHsL.mp4",
        description: "Transforming financial mindset from scarcity to abundance"
      },
      {
        id: "day2-video8",
        title: "Defeating Distraction and Building Focus",
        type: "bonus",
        duration: "22:45",
        url: "https://video.pictory.ai/1750794672771/2025072210540725999MUYGdK5FqW9cK.mp4",
        description: "Strategies for maintaining focus and avoiding mental distractions"
      },
      {
        id: "day2-video9",
        title: "Biblical Mind Renewal Exercise",
        type: "bonus",
        duration: "18:20",
        url: "https://video.pictory.ai/1752523210083/20250722072429595H9T41U7hyg3B7Uu.mp4",
        description: "Practical exercise for transforming your mind through biblical principles"
      },
      {
        id: "day2-video10",
        title: "Day 2 Integration & Assignment Guide",
        type: "reflection",
        duration: "16:30",
        url: "https://video.pictory.ai/1750795187061/20250624204230151NRrYjBjjzmWJLkz.mp4",
        description: "Integrating Day 2 learnings and workbook assignment guidance"
      }
    ],
    questions: [
      "Which of the 7 Negative Forces (Fear, Procrastination, Indecision, Discouragement, Insecurity, Poverty & Lack, Distraction) do you struggle with most? Describe how it manifests in your daily life.",
      "What false identities or generational patterns have you discovered that need to be broken? How have these affected your emotional and financial well-being?",
      "After learning about neuroplasticity and Romans 12:2, what specific steps will you take to 'renew your mind' and build purpose-driven thoughts?",
      "Complete the Day 2 workbook exercises. What insights did you gain about rewiring your thought patterns for transformation?"
    ]
  },
  {
    day: 3,
    title: "Breaking Free from Depression, Anxiety, and Hopelessness",
    description: "Theme: Restoration of Clarity. Focus: How unhealed trauma keeps you stuck Financially and Emotionally. Deepening emotional intelligence and strengthening your inner core.",
    videos: [
      {
        id: "day3-video1",
        title: "Deepening Emotional Intelligence & Resilience",
        type: "main",
        duration: "28:40",
        url: "https://video.pictory.ai/1750346723540/20250715154719424GcImHQiJD73Bx1b.mp4",
        description: "Building emotional intelligence as the foundation for breakthrough"
      },
      {
        id: "day3-video2",
        title: "Strengthening Your Inner Core",
        type: "main",
        duration: "25:15",
        url: "https://video.pictory.ai/1752436626783/20250722104048523PoV0wK3fW7NwOdG.mp4",
        description: "Developing unshakeable inner strength and resilience"
      },
      {
        id: "day3-video3",
        title: "Breaking Free from Patterns That Hinder Healing",
        type: "main",
        duration: "32:30",
        url: "https://video.pictory.ai/1750347415557/20250722103838297Xr0ONIbo0AkrvG5.mp4",
        description: "Identifying and breaking destructive emotional and financial patterns"
      },
      {
        id: "day3-video4",
        title: "How the 7 Negative Forces Feed Depression & Anxiety",
        type: "main",
        duration: "27:20",
        url: "https://video.pictory.ai/1750348923510/20250722103820835upVc9YxQ4mtsHnY.mp4",
        description: "Understanding how negative forces perpetuate depression, anxiety, and hopelessness"
      },
      {
        id: "day3-video5",
        title: "Overcoming Financial Anxiety and Stress",
        type: "main",
        duration: "29:45",
        url: "https://video.pictory.ai/1750350998682/20250619164026883PqWLo0coCI8j6aw.mp4",
        description: "Breaking free from financial anxiety and building emotional resilience around money"
      },
      {
        id: "day3-video6",
        title: "Breaking Free from Emotional Paralysis",
        type: "main",
        duration: "26:30",
        url: "https://video.pictory.ai/1750351327352/20250619164651627PdHRvWXIS1uuwue.mp4",
        description: "Moving from emotional paralysis to empowered action and decision-making"
      },
      {
        id: "day3-video7",
        title: "Restoration of Mental & Emotional Clarity",
        type: "main",
        duration: "24:15",
        url: "https://video.pictory.ai/1750365345321/20250722103521367KAn9IAk0B174e9S.mp4",
        description: "Practical steps to restore mental clarity and emotional balance"
      },
      {
        id: "day3-video8",
        title: "Building Sustainable Hope and Vision",
        type: "bonus",
        duration: "22:40",
        url: "https://video.pictory.ai/1750874025914/20250722103343705CMdzh9Rh3PEH952.mp4",
        description: "Creating and maintaining hope even in difficult circumstances"
      },
      {
        id: "day3-video9",
        title: "Breakthrough Declaration & Visualization",
        type: "bonus",
        duration: "18:30",
        url: "https://video.pictory.ai/1752494417363/202507221030506655VuXYwctXTqsgzp.mp4",
        description: "Guided exercise for declaring breakthrough over depression and anxiety"
      },
      {
        id: "day3-video10",
        title: "Day 3 Clarity Integration & Assignment",
        type: "reflection",
        duration: "16:30",
        url: "https://video.pictory.ai/1750876678851/2025072210302240877O4hI70IMN98Kv.mp4",
        description: "Integrating clarity restoration and assignment guidance for continued breakthrough"
      }
    ],
    questions: [
      "How has unhealed trauma kept you stuck financially and emotionally? Describe specific areas where you feel trapped or limited.",
      "What patterns in your life hinder your healing journey? How will you break free from these destructive cycles?",
      "After learning about emotional intelligence and inner core strength, what practices will you implement to build lasting resilience?",
      "Describe a breakthrough moment from today's session. How do you feel your perspective on depression, anxiety, or hopelessness has shifted?"
    ]
  },
  {
    day: 4,
    title: "Emotional and Financial Recovery",
    description: "Theme: Empowered Recovery. Focus: Living Beyond Trauma. Phase 1: Establish a Faith-Based, Emotionally Resilient Foundation. Phase 2: Re-building Your Business and Financial Strength.",
    videos: [
      {
        id: "day4-video1",
        title: "Phase 1: Building Faith-Based Emotional Resilience",
        type: "main",
        duration: "31:45",
        url: "https://video.pictory.ai/1750272334801/20250618190432508i4lGZYpLKSTnEi7.mp4",
        description: "Establishing emotional resilience as the first step to withstand setbacks and turbulence"
      },
      {
        id: "day4-video2",
        title: "Faith as the Anchor in Emotional Recovery",
        type: "main",
        duration: "28:30",
        url: "https://video.pictory.ai/1750273631785/20250618192406003ELdURmcrvgzndn0.mp4",
        description: "How faith becomes your unshakeable foundation during recovery"
      },
      {
        id: "day4-video3",
        title: "The Emotional-Financial Connection",
        type: "main",
        duration: "26:15",
        url: "https://video.pictory.ai/1750274540747/20250618192844581j4Pa8LIWnU2wJf6.mp4",
        description: "Understanding how emotional health directly impacts financial performance"
      },
      {
        id: "day4-video4",
        title: "Phase 2: Re-building Business & Financial Strength",
        type: "main",
        duration: "33:40",
        url: "https://video.pictory.ai/1750274778289/20250618215010562mAciGDTmXOiY9e3.mp4",
        description: "Strategic approach to rebuilding financial stability on healed foundations"
      },
      {
        id: "day4-video5",
        title: "Day 4 Recovery Integration & Assignment Guide",
        type: "reflection",
        duration: "19:20",
        url: "https://video.pictory.ai/1750283214973/20250618220019182F6zPuuNqROKLWyF.mp4",
        description: "Integrating emotional and financial recovery principles with assignment guidance"
      }
    ],
    questions: [
      "Phase 1 Focus: What does building a 'faith-based, emotionally resilient foundation' look like for your specific situation? What practices will you implement?",
      "How do you see the connection between your emotional health and financial performance? Describe specific examples from your life.",
      "Phase 2 Focus: What does 're-building your business and financial strength' mean for you? What are your next strategic steps?",
      "Complete the Day 4 workbook on emotional and financial recovery. What is your personalized roadmap for sustainable success that honors your healing journey?"
    ]
  },
  {
    day: 5,
    title: "Reclaiming Purpose, Peace, and Provision",
    description: "Theme: Empowered Recovery. Focus: Living Beyond Trauma. Rebuilding A Life Rooted In Faith, Resilience, and Purpose. Amplifying recovery work and positioning for sustained growth.",
    videos: [
      {
        id: "day5-video1",
        title: "Amplifying Your Recovery Work",
        type: "main",
        duration: "29:30",
        url: "https://video.pictory.ai/1750283773850/20250618220448582SRaZmPIki2lAg5A.mp4",
        description: "Building upon and amplifying all the recovery work completed throughout the program"
      },
      {
        id: "day5-video2",
        title: "Reinforcing Transformational Changes",
        type: "main",
        duration: "26:45",
        url: "https://video.pictory.ai/1750284222004/20250618220907542oi39mtj6ATPKZVT.mp4",
        description: "Solidifying the transformational changes and positioning for sustained growth"
      },
      {
        id: "day5-video3",
        title: "Reclaiming Your God-Given Purpose",
        type: "main",
        duration: "31:15",
        url: "https://video.pictory.ai/1750284627255/20250618221417009ZZHxEfXlMIJXZiz.mp4",
        description: "Discovering and stepping into your divine purpose with confidence"
      },
      {
        id: "day5-video4",
        title: "Walking in Peace and Provision",
        type: "main",
        duration: "24:20",
        url: "https://video.pictory.ai/1750284751258/20250618221823941qk6uTNiqzS7fnOk.mp4",
        description: "Living from a place of peace while trusting God's provision"
      },
      {
        id: "day5-video5",
        title: "Graduation: Your New Life of Faith, Resilience & Purpose",
        type: "reflection",
        duration: "18:20",
        url: "https://video.pictory.ai/1750284985484/20250618222148771rCevkoae2vFELQ6.mp4",
        description: "Celebrating your transformation and stepping into your new life with confidence"
      }
    ],
    questions: [
      "How will you amplify and build upon all the recovery work you've completed throughout this 5-day program? What specific practices will you continue?",
      "What is your God-given purpose that you're now ready to reclaim? How has this program helped you clarify your calling?",
      "Describe your vision for living in purpose, peace, and provision. What does this look like practically in your daily life?",
      "Complete the Day 5 workbook and create your personal 'Life Rooted in Faith, Resilience, and Purpose' action plan. What are your next steps for continued growth and how will you prevent emotional or financial setbacks?"
    ]
  }

];