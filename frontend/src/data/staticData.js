// Static data for the portfolio website

export const PROJECT_CATEGORIES = {
  fullstack: {
    key: 'fullstack',
    label: 'Full Stack',
    icon: '🌐',
    description: 'Web applications built end-to-end with modern frameworks and databases',
    color: 'from-blue-500 to-cyan-500',
  },
  aiml: {
    key: 'aiml',
    label: 'AI / ML',
    icon: '🤖',
    description: 'Machine learning models, AI integrations, and intelligent applications',
    color: 'from-violet-500 to-purple-500',
  },
  data: {
    key: 'data',
    label: 'Data Analysis',
    icon: '📊',
    description: 'Data pipelines, visualizations, and insights from real-world datasets',
    color: 'from-emerald-500 to-green-500',
  },
  mobile: {
    key: 'mobile',
    label: 'Mobile',
    icon: '📱',
    description: 'Native and cross-platform mobile applications',
    color: 'from-orange-500 to-amber-500',
  },
}

export const staticProjects = [
  // ── Full Stack ──────────────────────────────────────────────────────────────
  {
    id: 1,
    category: 'fullstack',
    title: 'Cyan',
    description: `Built a distributed social network in a team of 5 using Django REST Framework, implementing an ActivityPub-inspired inbox push model where independent Heroku nodes exchanged authors, entries, likes, and follow requests via HTTP Basic Auth-authenticated REST API calls with FQID-based object identification to prevent cross-node ID collisions.

Modelled a normalized PostgreSQL schema with unique constraints on FQID fields and ForeignKey relations keyed on full author URLs, enforcing configurable post visibility (public, unlisted, friends-only) with server-side push routing to follower inboxes.

Designed and tested 15+ RESTful API endpoints covering authors, entries, comments, likes, followers, and inbox delivery with full pagination support, verifying cross-node interoperability with 3 other independently deployed team nodes.`,
    icon: '🌐',
    tags: ['Django', 'React.js', 'PostgreSQL', 'Heroku', 'HTTP Basic Auth', 'REST API'],
    image_url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    category: 'fullstack',
    title: 'Mongo-Twitter',
    description: `Developed Python scripts for MongoDB management, focusing on batch processing, error handling, and real-time analytics. Included dynamic database interaction for tweet composition and analytics.

Showcases database optimization, data processing pipelines, and analytics dashboard creation with real-time updates. Implemented efficient query patterns and indexing strategies for high-throughput social data.`,
    icon: '🐦',
    tags: ['Python', 'MongoDB', 'SQL'],
    link: 'https://github.com/PPusola/Mongo-Twitter',
    image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    category: 'fullstack',
    title: 'The Wordle',
    description: `Created a Python-based Wordle game variant with a custom Scrabble dictionary class for word validation. Demonstrates object-oriented programming principles, dictionary manipulation, and game logic implementation.

The game provides a challenging word-guessing experience with custom word validation rules and colorized terminal feedback on each guess.`,
    icon: '🎮',
    tags: ['Python'],
    link: 'https://github.com/PPusola/Wordle-175',
    image_url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    category: 'fullstack',
    title: 'Booyaa Website',
    description: `Built a responsive business website for Booyaa with Next.js and Tailwind CSS, presenting product work, service positioning, and deployment-ready marketing pages for a freelance web development brand.

Structured the app for Vercel hosting with reusable page sections, a polished landing experience, and straightforward customization paths for future product and client showcases.`,
    icon: '🚀',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://github.com/PPusola/Booyaa-Website',
    live_url: 'https://n-gamma-green.vercel.app',
    image_url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
  },
  {
    id: 9,
    category: 'fullstack',
    title: 'Caroline Does Numbers',
    description: `Delivered a production client website for Caroline Does Numbers, creating responsive service, about, testimonial, and contact pages for a bookkeeping-focused small business.

Focused on clear service discovery, approachable content structure, and fast static pages that can be hosted with minimal operational overhead.`,
    icon: '💼',
    tags: ['HTML', 'CSS', 'Responsive Design', 'Client Website', 'Vercel'],
    link: 'https://github.com/PPusola/Caroline-s-Website',
    live_url: 'https://project-inuil.vercel.app',
    image_url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
  },

  // ── AI / ML ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    category: 'aiml',
    title: 'Travel Companion',
    description: `Developed an Agentic AI responsible for finding flights and hotels and preparing a travel itinerary based on the travel budget and dates given to it.

The system integrates with multiple APIs to provide comprehensive travel planning, including flight comparisons, hotel recommendations, and optimized itinerary scheduling. Implements multi-step reasoning chains to balance cost, timing, and traveler preferences.`,
    icon: '✈️',
    tags: ['Python', 'Agentic AI', 'Gemini', 'FastAPI'],
    link: 'https://github.com/PPusola/Travel-Guide',
    image_url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    category: 'aiml',
    title: 'AI Chat Bot',
    description: `Built a Python AI chat interface using OpenAI's GPT model, providing real-time answers from uploaded documents. Implemented text extraction from PDFs, Excel, CSV, and images with a Tkinter GUI.

Features document parsing, vector embeddings via LlamaIndex, and conversational AI for intelligent Q&A. Users can drop in any document and immediately ask natural-language questions against its content.`,
    icon: '🤖',
    tags: ['Python', 'OpenAI', 'LlamaIndex', 'NLP'],
    link: 'https://github.com/PPusola/ai-document-explorer',
    image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    id: 10,
    category: 'aiml',
    title: 'Email Scam Detector',
    description: `Built an AI-powered email scam detection system aimed at protecting elderly users by analyzing inbox messages with a FastAPI backend and a React Native mobile interface.

Designed a multi-signal detection pipeline combining a fine-tuned DistilBERT classifier, SBERT vector similarity, URL reputation checks, and sender/header anomaly analysis into a single risk score with plain-language warning steps.

Structured supporting scripts for phishing/spam dataset collection, vector-store generation, classifier training, and monthly retraining from user feedback.`,
    icon: '🛡️',
    tags: ['FastAPI', 'DistilBERT', 'SBERT', 'React Native', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/PPusola/email-scam-detector',
    image_url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
  },

  // ── Data Analysis ────────────────────────────────────────────────────────────
  {
    id: 6,
    category: 'data',
    title: 'Energy Insights',
    description: `Built a Pandas data pipeline ingesting CER, EIA, and CANSIM government datasets, performing time-series analysis on WTI, Brent, AECO, and Henry Hub pricing alongside 1P/2P reserve data to surface Canadian energy supply-demand dynamics.

Implemented interactive ipywidgets controls for filtering by commodity, date range, and price benchmark, producing reproducible Matplotlib visualizations tracking production trends, price differentials, and pipeline constraints.

Maintained structured RMarkdown documentation of datasets, methodology, and analysis to ensure full reproducibility and transparency for data-driven energy market decision-making.`,
    icon: '⚡',
    tags: ['Python', 'R', 'Pandas', 'Matplotlib', 'ipywidgets'],
    image_url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
  },

  // ── Mobile ───────────────────────────────────────────────────────────────────
  {
    id: 7,
    category: 'mobile',
    title: 'Cobra Chickens',
    description: `Engineered an Android event app in Java generating custom QR codes encoding event ID and attendee data; on scan, decoded the payload and wrote a real-time check-in record to Firebase Firestore, instantly syncing attendance state across all devices.

Integrated Firebase Cloud Messaging for push notifications and Google Maps API for location-based event discovery, implementing secure Firebase Authentication and photo upload flows across a 6-member Agile team.

Designed and executed functional and edge-case test scenarios for QR check-ins, notifications, and event creation, improving reliability across diverse Android versions and screen configurations.`,
    icon: '📱',
    tags: ['Java', 'Android Studio', 'Firebase Firestore', 'FCM', 'Google Maps API'],
    link: 'https://github.com/PPusola/The-Cobra-Chickens',
    image_url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
  },
  {
    id: 11,
    category: 'mobile',
    title: 'MiDoid',
    description: `Built a local-first macOS and Android companion app for browsing and transferring Android files from a Mac over Wi-Fi without a cloud account or remote server.

Implemented QR-based pairing, temporary authenticated local sessions, mDNS discovery, WebDAV-backed file operations, selected-folder sharing through Android's Storage Access Framework, and a native macOS file manager with drag-and-drop uploads, previews, search, breadcrumbs, and transfer queue state.

Documented the privacy and security model around visible session lifetime, foreground Android sharing status, and local-network-only transfers.`,
    icon: '🔁',
    tags: ['Swift', 'Android', 'Kotlin', 'WebDAV', 'mDNS', 'Local Network'],
    link: 'https://github.com/PPusola/MiDoid',
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
  },
  {
    id: 12,
    category: 'mobile',
    title: 'PhotoSnap',
    description: `Built a social photo game where friends upload memories and compete to guess when and where each photo was taken, with scoring based on date accuracy, challenges, streaks, and leagues.

Implemented an Expo React Native app backed by Supabase authentication, Postgres, storage, row-level security, direct messaging, friend requests, push notification tokens, encrypted photo upload flows, and profile/feed experiences inspired by modern social apps.`,
    icon: '📸',
    tags: ['Expo', 'React Native', 'Supabase', 'PostgreSQL', 'Encryption', 'Push Notifications'],
    link: 'https://github.com/PPusola/PhotoSnap',
    live_url: 'https://booyaa.net/products',
    image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop',
  },
  {
    id: 13,
    category: 'mobile',
    title: 'Spotify Jam Sesh',
    description: `Built a Spotify-powered social app for finding music-compatible friends, joining shared listening rooms, and chatting with matches.

Implemented Spotify OAuth with PKCE, Firebase-backed listening-room synchronization, live chat, room codes, taste matching with genre-vector cosine similarity and artist-set Jaccard similarity, friend requests, direct messages, and listening stats across multiple Spotify time ranges.`,
    icon: '🎧',
    tags: ['React Native', 'Expo', 'Spotify API', 'Firebase', 'OAuth PKCE', 'Jest'],
    link: 'https://github.com/PPusola/Spotify_Jamz',
    live_url: 'https://booyaa.net/products',
    image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop',
  },
  {
    id: 14,
    category: 'mobile',
    title: 'Ez-Buddeh',
    description: `Built a campus-focused mobile app concept for university students to find study buddies, gym partners, and social companions.

Structured the Expo/React Native app with typed navigation, reusable components, mock data, Tailwind-style mobile styling, and screens aimed at matching students around shared activities and availability.`,
    icon: '🤝',
    tags: ['React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Mobile UX'],
    link: 'https://github.com/PPusola/Ez-Buddeh',
    image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
  },
]

export const staticExperiences = [
  {
    id: 1,
    title: 'Founder & Developer',
    company: 'Booyaa',
    date: 'Mar. 2026 – Present',
    responsibilities: [
      'Built and launched booyaa.net, a freelance web development business delivering professional client websites',
      'Developed a full client project (Caroline Does Numbers), including responsive service pages, contact forms, branding, UI/UX, and SEO optimization',
      'Currently developing additional client websites and expanding the business client base',
    ],
  },
  {
    id: 2,
    title: 'Functional Safety Co-op',
    company: 'BlackBerry QNX',
    date: 'May 2024 – Aug. 2024',
    responsibilities: [
      'Authored C standard library functional tests for QNX RTOS targeting ARM, x86, and x64 architectures, validating POSIX compliance and edge-case error handling against official C standard documentation',
      'Designed test flag annotations to integrate with the regression pipeline, ensuring each test case was correctly indexed and traceable through final regression review before merging to the main QNX branch',
      'Participated in daily cross-timezone standups coordinating issue triage with the India team, reporting blockers to leads, following full Agile/SCRUM cycles with senior code review in C, Python (FastAPI), Vim, and JIRA before every commit',
    ],
  },
  {
    id: 3,
    title: 'Software Developer Intern',
    company: 'Newgen Software',
    date: 'June 2023 – Aug. 2023',
    responsibilities: [
      'Researched OpenAI model APIs and fine-tuned GPT-3.5 using LlamaIndex Vector Store, achieving a 25% improvement in model accuracy and 10% faster response times',
      'Built a multimodal Gradio app supporting audio and image uploads to automatically extract meeting notes from recordings and itemize receipts from photos',
      'Collaborated with one colleague through the full build cycle from API research and model fine-tuning to frontend delivery, with iterative code reviews from senior mentors enforcing SDLC best practices',
    ],
  },
]

export const staticAwards = [
  {
    id: 1,
    title: 'UAlberta International Country Scholarship',
    organization: 'University of Alberta',
    description: 'Awarded the University of Alberta International Country Scholarship for academic excellence',
    date: '2022',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'International Student Scholarship',
    organization: 'University of Alberta',
    description: 'Awarded the International Student Scholarship',
    date: '2022',
    icon: '⭐',
  },
  {
    id: 3,
    title: 'ODSC Agentic AI Conference',
    organization: 'ODSC',
    description: 'Attendee at the Open Data Science Conference — Agentic AI 2025',
    date: '2025',
    icon: '🤖',
  },
  {
    id: 4,
    title: 'Nathacks 2024',
    organization: 'Nathacks',
    description: 'Participated in Nathacks 2024 hackathon',
    date: '2024',
    icon: '🚀',
  },
  {
    id: 5,
    title: 'HackEd 2022',
    organization: 'University of Alberta',
    description: 'Participated in HackEd 2022 hackathon at the University of Alberta',
    date: '2022',
    icon: '💻',
  },
]

export const staticHobbies = [
  {
    id: 1,
    title: 'Soccer',
    description: 'Love playing and watching soccer',
    icon: '⚽',
  },
  {
    id: 2,
    title: 'Gaming',
    description: 'Enjoy video games and game development',
    icon: '🎮',
  },
  {
    id: 3,
    title: 'Hiking',
    description: 'Exploring nature and trails',
    icon: '🥾',
  },
  {
    id: 4,
    title: 'Cats',
    description: 'Cat enthusiast',
    icon: '🐱',
  },
  {
    id: 5,
    title: 'Anime',
    description: 'Anime fan and watcher',
    icon: '🎌',
  },
  {
    id: 6,
    title: 'Hackathons',
    description: 'Participating in coding competitions',
    icon: '💻',
  },
]
