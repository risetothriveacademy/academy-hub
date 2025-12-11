// Configuration for all 18 Mini-Course Workbook Covers
// Copy and paste the customizeCover() code into cover-template.html

const MINI_COURSES_CONFIG = [
  {
    courseNumber: '1',
    courseTitle: 'Stuck in Shame & Guilt',
    scriptureText: '"There is therefore now no condemnation for those who are in Christ Jesus."',
    scriptureRef: 'ROMANS 8:1',
    fileName: 'workbook-shame-guilt.pdf',
    imageKeywords: 'breaking chains, freedom, light breaking through darkness'
  },
  {
    courseNumber: '2',
    courseTitle: 'Breaking the Cycle of Fear',
    scriptureText: '"For God has not given us a spirit of fear, but of power and of love and of a sound mind."',
    scriptureRef: '2 TIMOTHY 1:7',
    fileName: 'workbook-fear.pdf',
    imageKeywords: 'courage, strength, overcoming fear, shield of faith'
  },
  {
    courseNumber: '3',
    courseTitle: 'The Hidden Pattern Holding You Back',
    scriptureText: '"You will know the truth, and the truth will set you free."',
    scriptureRef: 'JOHN 8:32',
    fileName: 'workbook-hidden-pattern.pdf',
    imageKeywords: 'unveiling, discovery, patterns, breaking cycles'
  },
  {
    courseNumber: '4',
    courseTitle: 'Why You Can\'t Move On',
    scriptureText: '"Forget the former things; do not dwell on the past. See, I am doing a new thing!"',
    scriptureRef: 'ISAIAH 43:18-19',
    fileName: 'workbook-move-on.pdf',
    imageKeywords: 'forward movement, new path, leaving the past, fresh start'
  },
  {
    courseNumber: '5',
    courseTitle: 'Fighting Hopelessness',
    scriptureText: '"May the God of hope fill you with all joy and peace in believing."',
    scriptureRef: 'ROMANS 15:13',
    fileName: 'workbook-hopelessness.pdf',
    imageKeywords: 'light in darkness, sunrise, hope rising, restoration'
  },
  {
    courseNumber: '6',
    courseTitle: 'Feeling Lost in Your Purpose',
    scriptureText: '"For I know the plans I have for you, declares the Lord, plans to give you hope and a future."',
    scriptureRef: 'JEREMIAH 29:11',
    fileName: 'workbook-purpose.pdf',
    imageKeywords: 'compass, direction, path forward, destiny, calling'
  },
  {
    courseNumber: '7',
    courseTitle: 'Exhausted but Still Broken',
    scriptureText: '"Come to me, all you who are weary and burdened, and I will give you rest."',
    scriptureRef: 'MATTHEW 11:28',
    fileName: 'workbook-exhausted.pdf',
    imageKeywords: 'rest, renewal, refreshment, healing waters, restoration'
  },
  {
    courseNumber: '8',
    courseTitle: 'Resentment Ruining Your Peace',
    scriptureText: '"Get rid of all bitterness, rage and anger... Be kind and compassionate to one another, forgiving each other."',
    scriptureRef: 'EPHESIANS 4:31-32',
    fileName: 'workbook-resentment.pdf',
    imageKeywords: 'release, letting go, freedom, peace, calm waters'
  },
  {
    courseNumber: '9',
    courseTitle: 'When Anger Turns Inward',
    scriptureText: '"In your anger do not sin. Do not let the sun go down while you are still angry."',
    scriptureRef: 'EPHESIANS 4:26',
    fileName: 'workbook-anger.pdf',
    imageKeywords: 'self-compassion, healing from within, gentle restoration'
  },
  {
    courseNumber: '10',
    courseTitle: 'Overwhelmed by Trauma',
    scriptureText: '"The Lord is close to the brokenhearted and saves those who are crushed in spirit."',
    scriptureRef: 'PSALM 34:18',
    fileName: 'workbook-trauma.pdf',
    imageKeywords: 'safety, protection, God\'s presence, gentle healing'
  },
  {
    courseNumber: '11',
    courseTitle: 'Stuck in Your Past',
    scriptureText: '"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!"',
    scriptureRef: '2 CORINTHIANS 5:17',
    fileName: 'workbook-past.pdf',
    imageKeywords: 'new beginning, butterfly, transformation, moving forward'
  },
  {
    courseNumber: '12',
    courseTitle: 'Struggling to Set Boundaries',
    scriptureText: '"Guard your heart above all else, for it determines the course of your life."',
    scriptureRef: 'PROVERBS 4:23',
    fileName: 'workbook-boundaries.pdf',
    imageKeywords: 'healthy limits, protection, self-care, strong foundation'
  },
  {
    courseNumber: '13',
    courseTitle: 'Financial Despair',
    scriptureText: '"And my God will meet all your needs according to the riches of his glory in Christ Jesus."',
    scriptureRef: 'PHILIPPIANS 4:19',
    fileName: 'workbook-financial-despair.pdf',
    imageKeywords: 'provision, abundance, trust, breaking scarcity mindset'
  },
  {
    courseNumber: '14',
    courseTitle: 'When Forgiveness Feels Impossible',
    scriptureText: '"Bear with each other and forgive one another if any of you has a grievance against someone."',
    scriptureRef: 'COLOSSIANS 3:13',
    fileName: 'workbook-forgiveness.pdf',
    imageKeywords: 'release, freedom, broken chains, heart healing'
  },
  {
    courseNumber: '15',
    courseTitle: 'Losing Your Identity & Self-Worth',
    scriptureText: '"You are a chosen people, a royal priesthood, a holy nation, God\'s special possession."',
    scriptureRef: '1 PETER 2:9',
    fileName: 'workbook-identity.pdf',
    imageKeywords: 'crown, worth, value, beloved, chosen'
  },
  {
    courseNumber: '16',
    courseTitle: 'Carrying the Weight of Grief',
    scriptureText: '"Blessed are those who mourn, for they will be comforted."',
    scriptureRef: 'MATTHEW 5:4',
    fileName: 'workbook-grief.pdf',
    imageKeywords: 'comfort, gentle arms, tears to joy, healing embrace'
  },
  {
    courseNumber: '17',
    courseTitle: 'Trapped in Depression',
    scriptureText: '"Why, my soul, are you downcast? Put your hope in God, for I will yet praise him, my Savior and my God."',
    scriptureRef: 'PSALM 42:11',
    fileName: 'workbook-depression.pdf',
    imageKeywords: 'light breaking through, hope rising, emerging from darkness'
  },
  {
    courseNumber: '18',
    courseTitle: 'Why Anxiety Won\'t Let Go',
    scriptureText: '"Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God."',
    scriptureRef: 'PHILIPPIANS 4:6',
    fileName: 'workbook-anxiety.pdf',
    imageKeywords: 'peace, calm, still waters, rest, tranquility'
  }
];

// INSTRUCTIONS TO USE:
// 1. Open cover-template.html in a browser
// 2. Copy the code below for each course
// 3. Paste into the browser console (F12)
// 4. Press Ctrl/Cmd + P to print to PDF
// 5. Save as the fileName specified

// EXAMPLE for Course #1:
/*
customizeCover({
  courseNumber: '1',
  courseTitle: 'Stuck in Shame & Guilt',
  scriptureText: '"There is therefore now no condemnation for those who are in Christ Jesus."',
  scriptureRef: 'ROMANS 8:1',
  imageUrl: 'images/shame-guilt.png' // Add your image path here
});
*/

// Quick copy-paste for all 18 courses:
// Just uncomment the course you want to generate and paste into console

/*
// COURSE 1 - SHAME & GUILT
customizeCover(MINI_COURSES_CONFIG[0]);

// COURSE 2 - FEAR
customizeCover(MINI_COURSES_CONFIG[1]);

// COURSE 3 - HIDDEN PATTERN
customizeCover(MINI_COURSES_CONFIG[2]);

// COURSE 4 - MOVE ON
customizeCover(MINI_COURSES_CONFIG[3]);

// COURSE 5 - HOPELESSNESS
customizeCover(MINI_COURSES_CONFIG[4]);

// COURSE 6 - PURPOSE
customizeCover(MINI_COURSES_CONFIG[5]);

// COURSE 7 - EXHAUSTED
customizeCover(MINI_COURSES_CONFIG[6]);

// COURSE 8 - RESENTMENT
customizeCover(MINI_COURSES_CONFIG[7]);

// COURSE 9 - ANGER
customizeCover(MINI_COURSES_CONFIG[8]);

// COURSE 10 - TRAUMA
customizeCover(MINI_COURSES_CONFIG[9]);

// COURSE 11 - PAST
customizeCover(MINI_COURSES_CONFIG[10]);

// COURSE 12 - BOUNDARIES
customizeCover(MINI_COURSES_CONFIG[11]);

// COURSE 13 - FINANCIAL DESPAIR
customizeCover(MINI_COURSES_CONFIG[12]);

// COURSE 14 - FORGIVENESS
customizeCover(MINI_COURSES_CONFIG[13]);

// COURSE 15 - IDENTITY
customizeCover(MINI_COURSES_CONFIG[14]);

// COURSE 16 - GRIEF
customizeCover(MINI_COURSES_CONFIG[15]);

// COURSE 17 - DEPRESSION
customizeCover(MINI_COURSES_CONFIG[16]);

// COURSE 18 - ANXIETY
customizeCover(MINI_COURSES_CONFIG[17]);
*/
