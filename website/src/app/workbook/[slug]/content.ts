// website/src/app/workbook/[slug]/content.ts

export type WorkbookSection = {
  title: string;
  prompts: string[];
};

export type WorkbookContent = {
  slug: string;
  title: string;
  subtitle?: string;
  scriptureRef: string;
  scriptureText: string;
  sections: WorkbookSection[];
  closingPrayer: string;
};

export const WORKBOOKS: Record<string, WorkbookContent> = {
  // 1 — Shame & Guilt
  "shame-guilt": {
    slug: "shame-guilt",
    title: "Shame & Guilt: When Your Past Won’t Let You Go",
    subtitle: "Letting God’s truth speak louder than self-condemnation",
    scriptureRef: "Romans 8:1 (NLV)",
    scriptureText:
      "So now, those who belong to Christ Jesus are not judged guilty.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "When you think about shame or guilt, what specific memories or moments come to mind first?",
          "What words do you secretly say about yourself when you feel ashamed or condemned?",
          "Whose voice seems the loudest in your mind when you feel guilt — your own, someone else’s, or God’s?",
          "How has shame or guilt affected your relationships, decisions, or willingness to step into new opportunities?",
          "If shame or guilt had a weight, where do you feel it most in your body (chest, stomach, shoulders, etc.)?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What lie has shame told you about who you are that does not align with being ‘in Christ’?",
          "How does Romans 8:1 challenge the way you normally think about your past and your failures?",
          "Write out one accusation you feel, then rewrite it as a truth based on God’s Word.",
          "What do you think it practically means to ‘belong to Christ Jesus’ in the middle of your struggles?",
          "If you truly believed you were not judged guilty in Christ, what might begin to change in how you see yourself?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What is one situation this week where you usually feel shame that you can invite Jesus into intentionally?",
          "Who is one safe, faith-filled person you could share part of your story with so shame loses secrecy and power?",
          "What daily reminder (verse, phrase, phone note) can you use to replace self-condemnation?",
          "What is one small act of obedience you sense God asking of you that shame has kept you from doing?",
          "How will you respond the next time shame rises — what will you say, think, or pray instead of agreeing with it?"
        ]
      }
    ],
    closingPrayer:
      "Lord Jesus, You see every place where shame and guilt have chained my heart. Thank You that in You, I am no longer judged guilty. I bring my past, my failures, and my hidden regrets to Your cross. Speak louder than every accusing voice. Teach me to agree with Your truth instead of the enemy’s lies. Give me courage to walk as someone forgiven, washed, and deeply loved. In Your Name, amen."
  },

  // 2 — Fear
  fear: {
    slug: "fear",
    title: "Breaking the Grip of Fear",
    subtitle: "Learning to feel afraid without being controlled by fear",
    scriptureRef: "2 Timothy 1:7 (NLV)",
    scriptureText:
      "For God did not give us a spirit of fear. He gave us a spirit of power and of love and of a good mind.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "What are the top three fears that seem to circle around your mind most often?",
          "When did you first start noticing these fears becoming stronger in your life?",
          "How do these fears affect your decisions, relationships, or ability to rest?",
          "What do you tend to do when fear shows up — fight it, avoid it, freeze, or try to control everything?",
          "If fear could speak, what would it say it is trying to ‘protect’ you from?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "According to 2 Timothy 1:7, what has God actually given you instead of fear?",
          "Where do you see the opposite of power, love, or a sound mind operating in your thoughts right now?",
          "Write a fearful thought you often have, then rewrite it through the lens of this verse.",
          "How might ‘a good mind’ (self-controlled, anchored thinking) look in one specific fearful area of your life?",
          "What would it look like to partner with God’s power instead of rehearsing worst-case scenarios?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "Which situation this week usually triggers fear that you can face with God instead of alone?",
          "What calming or grounding practice can you pair with prayer when fear spikes (breathing, worship, walking, etc.)?",
          "Who can you message or call when fear feels overwhelming, so you are not isolated with it?",
          "What declaration can you speak out loud when fear starts writing the story of your day?",
          "What small step of faith can you take that says, ‘Fear, you don’t get the final word here’?"
        ]
      }
    ],
    closingPrayer:
      "Father, You see how fear has wrapped around my thoughts and emotions. I confess I have often agreed with fear more than with Your Word. Today I receive what You have truly given me — power, love, and a good mind. Holy Spirit, settle my heart when fear rises. Teach me to run to You, not away from life. Walk with me into the places I have avoided, and let Your courage grow strong inside of me. In Jesus’ Name, amen."
  },

  // 3 — Hidden Pattern
  "hidden-pattern": {
    slug: "hidden-pattern",
    title: "Hidden Patterns That Keep You Stuck",
    subtitle: "Seeing the cycles beneath your reactions and decisions",
    scriptureRef: "Psalm 139:23–24 (NLV)",
    scriptureText:
      "Look through me, O God, and know my heart. Try me and know my thoughts. See if there is any sinful way in me and lead me in the way that lasts forever.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "What repeated pattern or cycle do you notice in your life that keeps leading to pain or regret?",
          "When does this pattern usually show up — after stress, conflict, loneliness, success, or rejection?",
          "What emotions do you feel just before you respond in that same familiar way again?",
          "Who or what do you tend to blame when the pattern shows up?",
          "If this pattern had a message, what would it say it is trying to ‘protect’ you from feeling?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What do you hear in Psalm 139 about God’s willingness to gently search and lead you?",
          "What fear do you feel about letting God look closely at this pattern?",
          "Write a lie that fuels this pattern (for example, ‘I’m always abandoned,’ ‘I’ll never be enough’).",
          "What truth from God’s character or His Word directly confronts that lie?",
          "If God could speak one sentence of truth over this specific pattern, what do you sense He might say?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What is one small interruption you can put in place the next time this pattern starts (pause, pray, step outside)?",
          "Who is a safe person you can invite to check in with you about this pattern without judgment?",
          "What new, healthier response could you practice in the same situations where the old pattern appears?",
          "How can you celebrate even tiny moments of progress instead of only seeing where you ‘failed’?",
          "What would it look like for you to walk a ‘way that lasts forever’ in this area — one aligned with God’s heart?"
        ]
      }
    ],
    closingPrayer:
      "Search me, Lord, not to shame me but to free me. I bring You this hidden pattern that keeps repeating in my life. Show me the roots beneath it. Reveal the lies I have believed and the wounds I have carried. Lead me in a new way that lines up with Your truth. Thank You that You do not abandon me in my cycles but walk with me into lasting change. In Jesus’ Name, amen."
  },

  // 4 — Past Emotional Attachments / Move On
  "move-on": {
    slug: "move-on",
    title: "Breaking Past Emotional Attachments",
    subtitle: "Releasing people and seasons that still have a hold on your heart",
    scriptureRef: "Isaiah 43:18–19 (NLV)",
    scriptureText:
      "Do not remember the things that have happened before. Do not think about the things of the past. See, I will do something new. It will come to light now.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "Who or what do you still feel emotionally tied to, even though that season is supposed to be over?",
          "What memories replay most often when you think about this person, place, or time?",
          "How do these attachments affect your ability to be fully present in your life right now?",
          "What emotions rise when you imagine truly letting go — fear, sadness, anger, emptiness, relief?",
          "What ‘what-ifs’ or ‘if only’ thoughts keep you circling back to this attachment?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "How does Isaiah 43 challenge the way you have been revisiting the past?",
          "What lie might you be believing — for example, ‘My best days are behind me,’ or ‘I’ll never feel that loved again’?",
          "What new thing do you sense God might want to bring that requires open hands rather than clinging?",
          "Write a short declaration that agrees with God doing something new, even if you don’t feel it yet.",
          "What would it look like to honor the past without being imprisoned by it?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What tangible step can you take toward closure (writing a letter you don’t send, releasing items, unfollowing online, etc.)?",
          "How can you invite God into the grief of letting go, instead of pretending you feel nothing?",
          "What healthy support do you need as you detach emotionally (counseling, pastoral care, community)?",
          "What new habit, project, or relationship can you lean into as you make space for the ‘new thing’ God is doing?",
          "How will you remind yourself, when nostalgia hits, that God is with you in your present and future?"
        ]
      }
    ],
    closingPrayer:
      "Lord, You know every connection my heart still holds onto. I place these memories, relationships, and seasons into Your hands. Thank You for what You did in those times, and thank You that You are not finished with me. Give me courage to release what no longer belongs to this chapter, and open my eyes to the new thing You are bringing. Walk with me through the grief and into hope. In Jesus’ Name, amen."
  },

  // 5 — Hopelessness
  hopelessness: {
    slug: "hopelessness",
    title: "When Hopelessness Feels Heavy",
    subtitle: "Finding light again when you feel numb, tired, or done",
    scriptureRef: "Psalm 34:18 (NLV)",
    scriptureText:
      "The Lord is near to those who have a broken heart. And He saves those who are broken in spirit.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "Where in your life do you feel the most hopeless right now?",
          "How long have you felt this way, and what seemed to trigger it?",
          "What thoughts do you hear most often when you feel numb or ‘done’ with trying?",
          "How has hopelessness affected your sleep, energy, and ability to enjoy things?",
          "What have you stopped praying for because it feels pointless?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What does Psalm 34:18 tell you about where God is in relation to your broken heart?",
          "What lie about God’s distance, silence, or disappointment have you quietly believed?",
          "Write a sentence beginning with, ‘God, if You are really near to me in this, then…’",
          "What small sign of His nearness can you remember from any point in your life story?",
          "What truth about His character do you need to anchor to, even if your feelings haven’t caught up yet?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What is one very small, doable act of hope you can take today (a text, a short walk, opening your Bible, etc.)?",
          "Who can gently check in on you during this season so you’re not isolated with your pain?",
          "What practical support might you need — counseling, medical care, pastor, trusted friend?",
          "What would it look like to be honest with God instead of ‘performing’ faith in this area?",
          "How can you give yourself permission to heal at a human pace while trusting God is still working?"
        ]
      }
    ],
    closingPrayer:
      "God, You see the places where my hope feels thin and my heart feels heavy. Thank You that You are near to the brokenhearted, not distant. I do not have to pretend with You. Hold me when I feel like letting go. Show me that my story is not over. Place the right people around me and give me strength for even one small step at a time. In Jesus’ Name, amen."
  },

  // 6 — Purpose
  purpose: {
    slug: "purpose",
    title: "Finding Purpose Again After Loss and Trauma",
    subtitle: "Believing that your life still matters in God’s story",
    scriptureRef: "Ephesians 2:10 (NLV)",
    scriptureText:
      "For we are His work. He has made us new in Christ Jesus so we can do good things He planned for us long ago.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "Where do you feel most uncertain or confused about your purpose right now?",
          "How have past losses, failures, or trauma made you question your value or calling?",
          "What roles (work, family, ministry) used to define you that have changed or been taken away?",
          "What do you enjoy or feel drawn to, even if it feels small or ‘not spiritual’?",
          "What fears come up when you think about stepping into something new again?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What does Ephesians 2:10 say about who you are and why you exist?",
          "Where have you believed the lie that you are ‘too broken’ or ‘too late’ for God to use?",
          "What parts of your story, including pain, might God want to turn into ministry or encouragement for others?",
          "Write one sentence beginning: ‘God, thank You that I am Your workmanship even when I feel…’",
          "What ‘good things’ might include both simple daily faithfulness and larger assignments?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What is one small step you can take toward something that feels life-giving and aligned with God’s heart?",
          "Who can help you pray and discern next steps without pressuring you to move faster than you’re ready?",
          "What boundaries do you need to protect your healing while still allowing gradual re-engagement with purpose?",
          "How can you remind yourself that your identity is in Christ, not in your productivity or performance?",
          "What would it look like to surrender your timeline to God while still saying, ‘Here I am, use me’?"
        ]
      }
    ],
    closingPrayer:
      "Lord, thank You that I am Your workmanship, not an accident or an afterthought. You see every loss I have walked through and how it has shaken my sense of purpose. I place my gifts, my pain, my story, and my future in Your hands. Show me the good works You have prepared for me, one step at a time. Help me to trust that nothing surrendered to You is wasted. In Jesus’ Name, amen."
  },

  // 7 — Exhausted but Still Broken
  exhausted: {
    slug: "exhausted",
    title: "Exhausted but Still Broken",
    subtitle: "When you’re tired of fighting the same battles",
    scriptureRef: "Matthew 11:28 (NLV)",
    scriptureText:
      "Come to Me, all of you who are tired and have heavy loads. I will give you rest.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "Where in your life do you feel the most emotionally and physically drained?",
          "What have you tried already to ‘fix’ things that has left you even more tired?",
          "How does exhaustion show up in your body — headaches, tension, brain fog, numbness?",
          "What do you fear will happen if you truly slow down or stop for a while?",
          "In what ways have you felt like you had to keep going for others, even when you were empty?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What invitation do you hear from Jesus in Matthew 11:28?",
          "Where have you believed that rest must be earned or deserved?",
          "How is coming to Jesus different from just escaping through distraction or numbing habits?",
          "Write a sentence that begins, ‘Jesus, if I really brought this burden to You, I’m afraid that…’",
          "What truth about His gentleness and care would answer that fear?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What is one practical way you can choose rest with God this week (even 10–15 minutes)?",
          "What responsibilities might need to be adjusted, shared, or postponed in this season?",
          "Who can you be honest with about your exhaustion instead of hiding it?",
          "What small rhythms (sleep, food, movement, quiet) can you begin to rebuild without perfectionism?",
          "How can you invite Jesus into your daily routines so rest becomes connection, not just collapse?"
        ]
      }
    ],
    closingPrayer:
      "Jesus, I am tired. You see the weight I have been carrying and the ways I have tried to be strong. I accept Your invitation to come to You. Teach me how to rest in Your presence, not just collapse in distraction. Show me where to lay things down and where to keep going. Restore my soul and meet me in the deep places that still feel broken. Amen."
  },

  // 8 — Resentment
  resentment: {
    slug: "resentment",
    title: "Resentment Ruining Your Peace",
    subtitle: "Letting God heal what still feels unfair",
    scriptureRef: "Hebrews 12:15 (NLV)",
    scriptureText:
      "Be careful that no one is without the loving-favor of God. Be careful that no one becomes like a plant whose root is full of bitter poison.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "Who or what do you feel most resentful toward right now?",
          "What specific events or patterns continue to feed that resentment?",
          "How does resentment show up in your body, your conversations, or your thoughts?",
          "What do you wish the other person would finally understand or admit?",
          "What feels like it would be ‘lost’ if you fully released this resentment?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "How does Hebrews 12:15 describe bitterness and its effect?",
          "What lie have you believed about holding on to resentment (for example, ‘It protects me,’ ‘It keeps justice alive’)?",
          "Where do you need to remember that God sees the whole story, including what others don’t?",
          "Write out what you would want God to do about this situation if you fully trusted His justice and compassion.",
          "How might His loving-favor toward you change the way you see yourself in this story?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What is one small step toward releasing resentment (naming it in prayer, journaling, talking with a counselor)?",
          "What boundaries may still be necessary even as you work toward releasing bitterness?",
          "Who can safely hold space for your pain without fueling more resentment?",
          "What might forgiving or releasing look like today — not once-for-all, but one layer at a time?",
          "How can you ask God to heal the wound beneath the resentment, not just the emotion itself?"
        ]
      }
    ],
    closingPrayer:
      "Lord, You see the places where my heart feels poisoned by resentment. You know exactly what happened and how deeply it hurt. I do not want bitterness to steal my future. I place this situation and these people into Your hands. Begin untangling my heart. Show me how to walk in wisdom, truth, and protection while letting go of the grip resentment has on me. In Jesus’ Name, amen."
  },

  // 9 — Anger
  anger: {
    slug: "anger",
    title: "When Anger Turns Inward",
    subtitle: "Learning to feel anger without destroying yourself",
    scriptureRef: "Ephesians 4:26 (NLV)",
    scriptureText:
      "If you are angry, do not sin by nursing your anger. Do not let the sun go down while you are still angry.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "What situations or people trigger the most intense anger in you right now?",
          "How do you usually express anger — outwardly, inwardly, or by shutting down?",
          "When did you learn that anger was dangerous, wrong, or not allowed?",
          "In what ways has your anger turned against yourself (self-blame, harsh inner talk, self-sabotage)?",
          "What important values or needs might your anger be trying to protect?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What does Ephesians 4:26 teach about anger itself versus what we do with it?",
          "Where have you believed the lie that all anger is sinful or unsafe?",
          "How might God invite you to bring your anger to Him instead of stuffing or exploding?",
          "Write a prayer beginning: ‘God, I am angry about…’ and allow yourself to be honest.",
          "What truth do you sense He might speak over your heart in response?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What healthy outlet can you use when anger rises (movement, journaling, talking to a safe person)?",
          "What conversations or boundaries might be needed as you deal with the causes of your anger?",
          "How can you notice early signs of anger in your body so you can respond sooner, not after exploding?",
          "What would it look like to let go of the need to punish yourself when you feel angry?",
          "How can you invite God into the deeper wounds underneath your anger for long-term healing?"
        ]
      }
    ],
    closingPrayer:
      "God, thank You that You are not afraid of my anger. You see what has been unfair, painful, and confusing. Forgive me for the ways my anger has turned into sin — against others or against myself. Teach me how to bring my anger to You honestly and to respond in ways that lead to healing, not more damage. Heal the wounds beneath my anger and lead me into Your peace. In Jesus’ Name, amen."
  },

  // 10 — Trauma Overwhelm
  trauma: {
    slug: "trauma",
    title: "Overwhelmed by Trauma",
    subtitle: "When your body remembers what your mind wants to forget",
    scriptureRef: "Psalm 91:1–2 (NLV)",
    scriptureText:
      "He who lives in the safe place of the Most High will be in the shadow of the All-powerful. He will say to the Lord, “You are the One Who keeps me safe and strong. You are my God, and I trust in You.”",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "Without going into details that feel unsafe, how would you describe the kind of trauma you’ve walked through?",
          "How does your body react when you feel triggered (racing heart, freezing, flashbacks, dissociation, etc.)?",
          "What situations, sounds, smells, or dates tend to bring old memories closer to the surface?",
          "How have you tried to cope or survive when trauma memories show up?",
          "What do you wish others understood about how trauma still affects you today?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What does Psalm 91 say about God’s heart toward you as a place of safety?",
          "Where have you believed that you are ‘too much’ or ‘too broken’ because of what happened?",
          "How might God’s shadow — His covering — look in a very specific trigger or situation for you?",
          "Write a sentence beginning: ‘God, when my body reacts like this, help me remember that You…’",
          "What truth about His protection comforts you, even if you still feel vulnerable?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What trauma-informed help do you have or need (therapy, support group, pastor, doctor)?",
          "What grounding practices help you come back to the present when you feel overwhelmed?",
          "Who can be a ‘safe person’ you reach out to when triggers feel too heavy to handle alone?",
          "What boundaries or changes might lower your exposure to unnecessary triggering environments right now?",
          "How can you invite God into your healing as a gentle, patient Father instead of a distant observer?"
        ]
      }
    ],
    closingPrayer:
      "Lord, You know every moment of my story, including the ones that shattered my sense of safety. Thank You that You are my refuge and my safe place. Be near to me when my body remembers what my mind wants to forget. Guide me to wise, trauma-informed help. Help me feel Your steady presence when I feel afraid or overwhelmed. Heal me layer by layer, at a pace my heart can bear. In Jesus’ Name, amen."
  },

  // 11 — Past / Rejection & Abandonment
  past: {
    slug: "past",
    title: "Stuck in Your Past: Rejection & Abandonment",
    subtitle: "Letting God rewrite the story of being left behind",
    scriptureRef: "Deuteronomy 31:6 (NLV)",
    scriptureText:
      "Be strong and have strength of heart. Do not be afraid or shake in fear before them. For the Lord your God is the One Who goes with you. He will not fail you or leave you.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "What experiences of rejection or abandonment stand out most strongly in your memory?",
          "How have these experiences shaped the way you see yourself and other people?",
          "Where do you still fear being left, replaced, or overlooked?",
          "What do you tend to do in relationships to try to prevent being rejected again?",
          "What painful sentences have you repeated to yourself because of these experiences?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What does Deuteronomy 31:6 reveal about God’s presence and commitment to you?",
          "Where have you unconsciously believed that God might leave you like others did?",
          "Write down one memory of rejection, then write what God might say as He stands beside you in that moment.",
          "How might God walking with you change the way you approach new relationships or opportunities?",
          "What is one lie about being unlovable or unwanted that you can replace with this verse?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "Who in your life has shown signs of being trustworthy, even in small ways, that you might lean toward slowly?",
          "What boundaries can help you build relationships wisely without hiding or over-attaching?",
          "How can you practice receiving love — compliments, care, support — without immediately rejecting it?",
          "What would it look like to let God, not past rejection, define your worth in this season?",
          "How can you remind yourself daily that He is with you and will not leave you, even when feelings flare?"
        ]
      }
    ],
    closingPrayer:
      "Father, You see every time I have been rejected, forgotten, or left behind. These moments have marked my heart more deeply than I realized. Thank You that You are not like those who walked away. You go with me, and You will not fail me or leave me. Heal the story I tell myself about my worth. Teach me how to build safe, healthy connections without fear ruling me. In Jesus’ Name, amen."
  },

  // 12 — Boundaries
  boundaries: {
    slug: "boundaries",
    title: "Struggling to Set Boundaries",
    subtitle: "Saying yes to God without saying yes to everything",
    scriptureRef: "Proverbs 4:23 (NLV)",
    scriptureText:
      "Keep your heart with all care, for out of it are the well-springs of life.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "In what areas of your life do you feel most overextended, used, or taken for granted?",
          "What makes it hard for you to say ‘no’ even when you are tired or uncomfortable?",
          "What emotions rise when you think about setting a boundary (fear, guilt, shame, anger)?",
          "Where have you learned that ‘good Christians’ must always say yes?",
          "What has it cost you — emotionally, physically, spiritually — to live without healthy boundaries?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What does Proverbs 4:23 say about the value of your heart and inner life?",
          "Where have you believed the lie that protecting your heart is selfish or unloving?",
          "How might healthy boundaries actually allow you to love others more purely and freely?",
          "Write a new belief: ‘It is godly to guard my heart when…’",
          "What do you sense God saying to you about His care for your energy, body, and emotional capacity?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What is one simple, specific boundary you need to set or clarify this week?",
          "What words can you use to express that boundary calmly and clearly?",
          "Who can support you or pray for you as you follow through, especially if pushback comes?",
          "How will you handle the guilt that may rise after you say no (what will you remind yourself of)?",
          "What long-term fruit do you hope to see in your life as you guard your heart with God?"
        ]
      }
    ],
    closingPrayer:
      "God, thank You that my heart matters to You. Forgive me for the times I have ignored my limits to keep people happy or avoid conflict. Teach me how to guard my heart in a way that honors You and loves others well. Give me wisdom, courage, and language for the boundaries I need. Help me trust that obedience to You is more important than pleasing everyone. In Jesus’ Name, amen."
  },

  // 13 — Financial Despair
  "financial-despair": {
    slug: "financial-despair",
    title: "Financial Despair",
    subtitle: "Trusting God when money stress triggers old trauma",
    scriptureRef: "Philippians 4:19 (NLV)",
    scriptureText:
      "My God will give you everything you need because of what Christ Jesus has done for us.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "What are your biggest financial fears or stress points right now?",
          "How have past losses, poverty, or financial trauma shaped the way you feel about money?",
          "What stories did you grow up hearing about money, success, or failure?",
          "How does financial stress affect your body, sleep, and relationships?",
          "Where do you feel shame or secrecy around your financial situation?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What promise does Philippians 4:19 give regarding your needs?",
          "Where have you believed the lie that you are completely alone in provision?",
          "What is the difference between needs and wants in your current situation?",
          "Write a prayer that honestly tells God what you need financially right now.",
          "What evidence (even small) can you see of God’s past faithfulness in provision?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What practical steps might help (budgeting, wise counsel, debt plan, talking to a professional)?",
          "Who is a trusted, wise person you could invite into this conversation without shame?",
          "What unhelpful financial habits or coping mechanisms is God gently highlighting?",
          "How can you practice gratitude for today’s provision while still asking boldly for breakthrough?",
          "What declaration of trust can you speak when anxiety about money rises again?"
        ]
      }
    ],
    closingPrayer:
      "Lord, You see every bill, every number, and every hidden fear about my finances. I confess the ways I have tried to carry this alone. Thank You that You are my Provider and that You care about my daily needs. Give me wisdom, discipline, and courage to face the practical reality. Open doors that no one else can open, and calm my heart while I wait. I choose to trust that You will supply what I truly need. In Jesus’ Name, amen."
  },

  // 14 — Forgiveness
  forgiveness: {
    slug: "forgiveness",
    title: "When Forgiveness Feels Impossible",
    subtitle: "Releasing others into God’s hands without denying your pain",
    scriptureRef: "Colossians 3:13 (NLV)",
    scriptureText:
      "Be ready to forgive. The Lord forgave you, so you must forgive others.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "Who comes to mind when you think, ‘I just can’t forgive’?",
          "What exactly happened that still feels so deeply wrong or unfair?",
          "How has holding on to this hurt affected your emotions, body, or relationships?",
          "What are you afraid will happen if you forgive (for example, ‘They’ll get away with it’ or ‘My pain won’t matter’)?",
          "What do you wish they would say or do that you have never received?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What does Colossians 3:13 say about the connection between God’s forgiveness and ours?",
          "Where have you believed that forgiving means pretending it didn’t hurt or allowing ongoing harm?",
          "How is releasing someone to God different from excusing what they did?",
          "Write a sentence beginning: ‘God, I don’t know how to forgive, but I choose to place this person in Your hands…’",
          "What do you sense God saying to you about His care for your pain and His justice?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What is one small step toward forgiveness you can take today (praying their name, blessing them in faith, etc.)?",
          "What boundaries or distance might still be needed for safety and wisdom?",
          "Who can walk with you in this process so you are not carrying it alone?",
          "How will you respond when old emotions rise again — what will you pray or declare?",
          "What freedom do you hope to experience as God continues this forgiveness journey in you?"
        ]
      }
    ],
    closingPrayer:
      "Jesus, You know the depth of this wound and how impossible forgiveness feels. Thank You that You never minimize my pain, yet You also invite me into freedom. I choose today to place this person and this situation into Your just and loving hands. Work forgiveness in my heart in layers, at Your pace. Show me how to walk in wisdom, not denial. I trust You to be both my Healer and my Judge. Amen."
  },

  // 15 — Identity
  identity: {
    slug: "identity",
    title: "Losing Your Identity & Self-Worth",
    subtitle: "Remembering who you are when everything has been shaken",
    scriptureRef: "Isaiah 43:1 (NLV)",
    scriptureText:
      "Do not be afraid, for I have bought you and made you free. I have called you by name. You are Mine.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "What losses, changes, or failures have most shaken your sense of identity?",
          "How do you usually describe yourself to others — and what is left out?",
          "Where have you tied your worth to a role, relationship, appearance, or achievement?",
          "What harsh labels have you secretly accepted about yourself?",
          "What do you fear people would think if they saw the ‘real’ you?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What does Isaiah 43:1 say about who you belong to?",
          "How does being called by name by God challenge the labels you’ve carried?",
          "Write down three negative labels, then write what God might say instead next to each one.",
          "What part of ‘You are Mine’ is hardest for you to receive, and why?",
          "How might your choices change if you really believed you were deeply loved and secure in Him?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What practical reminder can you keep visible (note, background, bracelet) about your identity in Christ?",
          "Who in your life reflects God’s view of you and can remind you when you forget?",
          "What environments or voices do you need less of because they constantly tear down your worth?",
          "What new habit can you build that aligns with your identity as God’s beloved (prayer, worship, creativity, serving)?",
          "How can you speak more kindly to yourself as an act of agreement with God, not self-indulgence?"
        ]
      }
    ],
    closingPrayer:
      "Father, so many things have tried to tell me who I am — my past, my failures, my trauma, and other people’s words. Today I choose to listen to You. Thank You that You have called me by name and that I belong to You. Rewrite the labels I have worn. Help me live from my identity in Christ, not from fear or shame. Let my thoughts, decisions, and relationships be shaped by the truth that I am Yours. In Jesus’ Name, amen."
  },

  // 16 — Grief
  grief: {
    slug: "grief",
    title: "Carrying the Weight of Grief",
    subtitle: "Learning to mourn with God instead of alone",
    scriptureRef: "Matthew 5:4 (NLV)",
    scriptureText: "Those who have sorrow are happy, because they will be comforted.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "What or who have you lost that your heart is still grieving?",
          "How has this loss changed your daily life, routines, or identity?",
          "What emotions visit you most often — sadness, anger, numbness, regret, disbelief?",
          "Where do you feel pressure (from yourself or others) to ‘be over it’ by now?",
          "What parts of your grief have you kept hidden from others?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What does Matthew 5:4 reveal about how God views those who mourn?",
          "Where have you believed that tears or sadness mean you are weak or lacking faith?",
          "How might God’s comfort look practically for you in this season?",
          "Write a letter to God describing your grief exactly as it is right now.",
          "What small ways has He already been near to you, even if the pain remains?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What healthy ways can you give space to your grief (journaling, talking, walking, creating, remembering)?",
          "Who can sit with you without trying to fix you or rush your process?",
          "What rituals or practices might honor what you’ve lost (lighting a candle, memory box, special day, etc.)?",
          "How can you listen to your body’s limits as you navigate grief (rest, nutrition, slowing down)?",
          "What gentle step toward hope do you sense God inviting you to take, without denying your sorrow?"
        ]
      }
    ],
    closingPrayer:
      "Lord, You know the depth of my loss and the ache that does not simply go away. Thank You that You do not shame me for grieving, but You promise comfort. Hold me in the waves of emotion. Send the right people to walk with me. Help me honor what I have lost while still believing that You are with me in what remains and in what is ahead. In Jesus’ Name, amen."
  },

  // 17 — Depression
  depression: {
    slug: "depression",
    title: "Trapped in Depression",
    subtitle: "When motivation is gone and darkness feels normal",
    scriptureRef: "Psalm 42:11 (NLV)",
    scriptureText:
      "Why are you so sad, O my soul? Why are you troubled within me? Hope in God, for I will yet praise Him.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "How would you describe what depression feels like for you personally?",
          "When did you first start noticing this heaviness, and has anything made it worse or better?",
          "What everyday tasks feel hardest to do when depression is strong?",
          "What thoughts repeat most often when you feel low?",
          "Where do you feel misunderstood by others about your depression?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What do you notice in Psalm 42:11 about talking honestly to your own soul and to God?",
          "Where have you believed the lie that you are a burden or that nothing will ever change?",
          "How might ‘hope in God’ look in a very small, practical way today?",
          "Write a compassionate sentence you wish someone would say to you on a hard day.",
          "What do you sense God might say to you that is different from your harsh inner voice?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What professional help do you have or need (therapist, doctor, counselor, pastor)?",
          "What tiny, realistic routine can you keep on hard days (get up, wash face, short walk, brief prayer)?",
          "Who can you text when you feel yourself slipping deeper into isolation?",
          "What safety plan or support list do you need for very dark moments?",
          "How can you remind yourself that depression is something you are walking through, not your identity?"
        ]
      }
    ],
    closingPrayer:
      "God, You see the darkness that sometimes feels like it is closing in around me. Thank You that my feelings do not scare You. Help me to reach for hope even when it feels far away. Lead me to the right help and give me courage to receive it. Speak to my soul when it is tired and troubled. Remind me that my life has value and purpose, even in this season. In Jesus’ Name, amen."
  },

  // 18 — Anxiety
  anxiety: {
    slug: "anxiety",
    title: "Why Anxiety Won’t Let Go",
    subtitle: "Learning to breathe again when your mind won’t slow down",
    scriptureRef: "Philippians 4:6–7 (NLV)",
    scriptureText:
      "Do not worry about anything. Instead, pray about everything. Tell God what you need, and thank Him for all He has done. Then God’s peace will keep your hearts and minds in Christ Jesus.",
    sections: [
      {
        title: "Naming What You’re Carrying",
        prompts: [
          "What does anxiety feel like in your body and mind — be as specific as you can?",
          "What worries keep circling no matter how many times you try to push them away?",
          "When is your anxiety usually worst — morning, night, before certain events, after certain triggers?",
          "How has anxiety affected your relationships, work, or ability to rest?",
          "What do you do to try to control or prevent what you are afraid might happen?"
        ]
      },
      {
        title: "Replacing Lies With God’s Truth",
        prompts: [
          "What invitation do you hear in Philippians 4:6–7 about worry and prayer?",
          "Where have you believed the lie that you must handle everything alone or it will fall apart?",
          "Write out one anxious thought, then turn it into a simple prayer request.",
          "What can you genuinely thank God for right now, even in the middle of anxiety?",
          "How do you imagine His peace ‘guarding’ your heart and mind like a shield?"
        ]
      },
      {
        title: "Walking It Out With God",
        prompts: [
          "What simple breathing or grounding practice can you pair with prayer when anxiety spikes?",
          "Who can you reach out to when anxiety feels bigger than your coping tools?",
          "What practical steps might lower anxiety (planning ahead, simplifying schedule, saying no, seeking help)?",
          "What nightly or morning routine could help your nervous system feel a bit safer?",
          "How can you practice noticing when peace shows up, even for a moment, and thank God for it?"
        ]
      }
    ],
    closingPrayer:
      "Lord, You know how fast my thoughts race and how my body reacts when anxiety rises. Thank You that You invite me to bring everything to You. Teach me to turn worries into honest prayers and to notice the peace You provide, even in small doses. Guard my heart and mind in Christ Jesus. Surround me with the support and tools I need as we walk this out together. Amen."
  }
};

export function getWorkbookBySlug(slug: string): WorkbookContent | undefined {
  return WORKBOOKS[slug];
}

