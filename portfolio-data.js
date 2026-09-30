/**
 * ==========================================================================
 * MD FARZID AHMED - PORTFOLIO DATA CONFIGURATION
 * ==========================================================================
 * Flutter Developer | Software Engineer | Mobile App Developer
 * Live Production Apps, Architecture, Skills & Theme Presets
 */

const PORTFOLIO_DATA = {
  // ---------------- Personal Details ---------------- //
  personal: {
    name: 'MD Farzid Ahmed',
    role: 'Flutter Developer | Software Engineer | Mobile App Developer',
    location: 'Mohakhali, Dhaka, Bangladesh',
    phone: '+880 1751757891',
    email: 'farzidahmed150@gmail.com',
    github: 'https://github.com/farzidahmed',
    linkedin: 'https://linkedin.com/in/farzid-ahmed',
    experienceYears: '2+',
    publishedAppsCount: '5+',
    projectsDeliveredCount: '10+'
  },

  // ---------------- Projects List ---------------- //
  projects: [
    {
      id: 'direct-bazar',
      title: 'Direct Bazar',
      category: 'E-Commerce & Live Delivery Platform',
      metric: '30% Memory Optimized',
      metricIcon: 'fa-gauge-high',
      status: 'Live on Play Store & App Store',
      icon: 'fa-cart-shopping',
      bannerGradient: 'linear-gradient(135deg, #064E3B 0%, #047857 50%, #111827 100%)',
      description: 'Full-featured cross-platform e-commerce app featuring real-time buyer-seller chat, live location delivery tracking, Stripe in-app payments, and optimized memory management.',
      bullets: [
        'Built a full-featured Flutter e-commerce app using <strong>Provider</strong> for state management and <strong>Stripe</strong> for secure in-app payments.',
        'Implemented <strong>real-time chat and live location tracking</strong> to streamline buyer-seller communication and order delivery updates.',
        'Integrated and optimized REST APIs, improving app performance and <strong>reducing memory usage by up to 30%</strong> through efficient data handling and local caching.',
        'Enabled <strong>real-time push notifications</strong> for order and chat updates, and successfully published on both <strong>Google Play Store and Apple App Store</strong>.'
      ],
      tags: ['Flutter', 'Dart', 'Provider', 'Stripe Payments', 'Live Chat', 'Live Location Tracking', 'REST API', 'FCM Push'],
      links: [
        {
          type: 'apple',
          label: 'Apple App Store',
          subtext: 'Download on',
          icon: 'fa-brands fa-apple',
          url: 'https://apps.apple.com/us/app/direct-bazar/id6756918034'
        },
        {
          type: 'google',
          label: 'Google Play Store',
          subtext: 'Get it on',
          icon: 'fa-brands fa-google-play',
          url: 'https://play.google.com/store/apps/details?id=com.mydirectbazzarecommerce'
        }
      ]
    },
    {
      id: 'iploy',
      title: 'Iploy',
      category: 'Job & Recruitment Platform',
      metric: '90% Crash-Free',
      metricIcon: 'fa-shield-halved',
      status: 'Live on Play Store & App Store',
      icon: 'fa-briefcase',
      bannerGradient: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #111827 100%)',
      description: 'Production-ready Android & iOS recruitment platform engineered with role-based access for job seekers and employers, social logins (Google & Apple), and instant notification alerts.',
      bullets: [
        'Engineered a production-ready Flutter app for Android and iOS job platform, achieving <strong>90% crash-free stability</strong>.',
        'Implemented secure authentication with <strong>social logins (Google, Apple)</strong> and role-based access control across 2 user types: job providers and seekers.',
        'Integrated <strong>real-time push notifications</strong> to improve user engagement and deliver instant job-related updates and candidate applications.'
      ],
      tags: ['Flutter', 'Dart', 'Social Auth (Google/Apple)', 'Role-Based Access', 'Firebase FCM', 'REST API', 'App Store & Play Store'],
      links: [
        {
          type: 'apple',
          label: 'Apple App Store',
          subtext: 'Download on',
          icon: 'fa-brands fa-apple',
          url: 'https://apps.apple.com/us/app/iploy/id6756605572'
        },
        {
          type: 'google',
          label: 'Google Play Store',
          subtext: 'Get it on',
          icon: 'fa-brands fa-google-play',
          url: 'https://play.google.com/store/apps/details?id=com.iploy_app'
        }
      ]
    },
    {
      id: 'breatheasy',
      title: 'BreathEasy222',
      category: 'Health & Real-Time Utility',
      metric: '40% Engagement Boost',
      metricIcon: 'fa-chart-line',
      status: 'Live on Play Store',
      icon: 'fa-lungs',
      bannerGradient: 'linear-gradient(135deg, #0369A1 0%, #0284C7 50%, #111827 100%)',
      description: 'Cross-platform mobile application delivering responsive UI across screen sizes with WebSocket & Pusher live communication, in-app subscriptions, and optimized performance benchmarks.',
      bullets: [
        'Delivered a cross-platform, production-ready Flutter mobile app with a responsive UI, achieving <strong>95%+ device compatibility</strong> across screen sizes and OS versions.',
        'Integrated REST APIs, Firebase push notifications, subscriptions, <strong>WebSocket, and Pusher for real-time communication</strong>, increasing user engagement by <strong>40%</strong>.',
        'Maintained App Store and Play Store compliance through optimized performance, security, and stability best practices.'
      ],
      tags: ['Flutter', 'Dart', 'WebSocket', 'Pusher', 'Firebase FCM', 'Subscriptions', 'REST API', 'Play Store'],
      links: [
        {
          type: 'google',
          label: 'Google Play Store',
          subtext: 'Get it on',
          icon: 'fa-brands fa-google-play',
          url: 'https://play.google.com/store/search?q=Breatheasy222&c=apps',
          isFullWidth: true
        }
      ]
    },
    {
      id: 'romeo-reminder',
      title: 'Romeo Reminder',
      category: 'AI Lifestyle & Smart Couple Habits',
      metric: 'AI-Powered',
      metricIcon: 'fa-wand-magic-sparkles',
      status: 'Live on App Store',
      icon: 'fa-heart',
      bannerGradient: 'linear-gradient(135deg, #4C1D95 0%, #6D28D9 50%, #111827 100%)',
      description: 'Dedicated iOS app designed for committed couples to cultivate daily love and care habits through AI-personalized love language reminders, thoughtful acts of service, heartfelt message crafting, and seamless gifting.',
      bullets: [
        'Engineered an iOS-focused Flutter app delivering <strong>AI-integrated reminders</strong> personalized according to each partner\'s love language.',
        'Implemented intelligent suggestions for <strong>thoughtful acts of service</strong> and AI-assisted heartfelt messaging.',
        'Integrated a seamless <strong>gift-giving experience</strong> through trusted partners and reliable push notifications.',
        'Successfully published on the <strong>Apple App Store</strong> with fluid native iOS feel, cloud sync, and 99%+ stability.'
      ],
      tags: ['Flutter', 'iOS App', 'AI Integration', 'Love Language Reminders', 'Acts of Service', 'Gift Commerce', 'FCM Push', 'App Store'],
      links: [
        {
          type: 'apple',
          label: 'Apple App Store',
          subtext: 'Download on',
          icon: 'fa-brands fa-apple',
          url: 'https://apps.apple.com/us/app/romeo-reminder/id6758392313',
          isFullWidth: true
        }
      ]
    }
  ],

  // ---------------- Categorized Technical Skills ---------------- //
  skills: [
    {
      category: 'Languages & Framework',
      icon: 'fa-code',
      items: ['Flutter', 'Dart']
    },
    {
      category: 'State Management',
      icon: 'fa-cubes',
      items: ['Provider', 'Riverpod']
    },
    {
      category: 'Architecture',
      icon: 'fa-sitemap',
      items: ['MVVM', 'Repository Pattern', 'Clean Architecture']
    },
    {
      category: 'Backend & APIs',
      icon: 'fa-network-wired',
      items: ['REST API', 'WebSockets', 'Socket.IO', 'Firebase (Auth, Firestore, FCM)']
    },
    {
      category: 'Storage & Caching',
      icon: 'fa-database',
      items: ['SQLite', 'Hive', 'SharedPreferences']
    },
    {
      category: 'Integrations & Payments',
      icon: 'fa-plug-circle-bolt',
      items: ['Google Maps API', 'Stripe Gateway', 'RevenueCat', 'Third-Party APIs']
    },
    {
      category: 'Testing & Tooling',
      icon: 'fa-vial-circle-check',
      items: ['Unit Testing', 'Widget Testing', 'Git & GitHub', 'CI/CD (Fastlane)']
    },
    {
      category: 'Deployment & Distribution',
      icon: 'fa-cloud-arrow-up',
      items: ['App Store Publishing', 'Play Store Publishing', 'Push Notifications', 'Cross-Platform Development']
    }
  ],

  // ---------------- Refined Professional Theme Presets ---------------- //
  colorThemes: [
    {
      id: 'theme-flutter-sky',
      name: 'Obsidian Slate (Default)',
      previewColor: '#38BDF8',
      vars: {
        '--bg-primary': '#0B0F17',
        '--bg-secondary': '#111827',
        '--bg-tertiary': '#1E293B',
        '--bg-card': 'rgba(17, 24, 39, 0.72)',
        '--flutter-sky': '#2563EB',
        '--flutter-cyan': '#38BDF8',
        '--accent-glow': 'rgba(56, 189, 248, 0.22)',
        '--primary-gradient': 'linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)'
      }
    },
    {
      id: 'theme-indigo-noir',
      name: 'Deep Indigo (Stripe/Linear)',
      previewColor: '#6366F1',
      vars: {
        '--bg-primary': '#080C14',
        '--bg-secondary': '#0F172A',
        '--bg-tertiary': '#1E1B4B',
        '--bg-card': 'rgba(15, 23, 42, 0.75)',
        '--flutter-sky': '#4F46E5',
        '--flutter-cyan': '#818CF8',
        '--accent-glow': 'rgba(99, 102, 241, 0.25)',
        '--primary-gradient': 'linear-gradient(135deg, #4F46E5 0%, #818CF8 100%)'
      }
    },
    {
      id: 'theme-emerald-clean',
      name: 'Emerald Noir (Supabase)',
      previewColor: '#10B981',
      vars: {
        '--bg-primary': '#050D0A',
        '--bg-secondary': '#0A1B14',
        '--bg-tertiary': '#112F24',
        '--bg-card': 'rgba(10, 27, 20, 0.75)',
        '--flutter-sky': '#059669',
        '--flutter-cyan': '#34D399',
        '--accent-glow': 'rgba(16, 185, 129, 0.25)',
        '--primary-gradient': 'linear-gradient(135deg, #059669 0%, #34D399 100%)'
      }
    },
    {
      id: 'theme-minimal-dark',
      name: 'Minimal Charcoal (GitHub)',
      previewColor: '#94A3B8',
      vars: {
        '--bg-primary': '#030712',
        '--bg-secondary': '#0F172A',
        '--bg-tertiary': '#1F2937',
        '--bg-card': 'rgba(15, 23, 42, 0.8)',
        '--flutter-sky': '#475569',
        '--flutter-cyan': '#CBD5E1',
        '--accent-glow': 'rgba(203, 213, 225, 0.2)',
        '--primary-gradient': 'linear-gradient(135deg, #334155 0%, #94A3B8 100%)'
      }
    },
    {
      id: 'theme-nordic-slate',
      name: 'Nordic Slate & Cyan',
      previewColor: '#0EA5E9',
      vars: {
        '--bg-primary': '#070D18',
        '--bg-secondary': '#0F1C30',
        '--bg-tertiary': '#172B4A',
        '--bg-card': 'rgba(15, 28, 48, 0.75)',
        '--flutter-sky': '#0284C7',
        '--flutter-cyan': '#0EA5E9',
        '--accent-glow': 'rgba(14, 165, 233, 0.25)',
        '--primary-gradient': 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)'
      }
    }
  ]
};
