/**
 * ==========================================================================
 * MD FARZID AHMED - PORTFOLIO DATA CONFIGURATION
 * ==========================================================================
 * আপনি এখান থেকে যেকোনো প্রজেক্ট সহজে পরিবর্তন, ডিলিট বা নতুন প্রজেক্ট অ্যাড করতে পারবেন।
 * You can easily edit existing projects, delete them, or add new projects below.
 */

const PORTFOLIO_DATA = {
  // ---------------- Projects List ---------------- //
  projects: [
    {
      id: 'direct-bazar',
      title: 'Direct Bazar',
      category: 'E-Commerce & Grocery Platform',
      metric: 'Live on App Store',
      metricIcon: 'fa-bag-shopping',
      status: 'Live on App Store',
      icon: 'fa-cart-shopping',
      bannerGradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
      description: 'Delivered a production-ready iOS mobile app for Direct Bazar, a leading online grocery and consumer goods platform. Features dynamic product catalogs, seamless cart management, multi-address management, and secure checkout.',
      bullets: [
        'Built full cross-platform architecture with fluid iOS UI and <strong>99%+ crash-free stability</strong>.',
        'Integrated address editing, order dispatching, and secure payment processing.',
        'Successfully published and managed on Apple App Store under Direct Bazar Limited.'
      ],
      tags: ['Flutter', 'iOS App', 'E-Commerce', 'REST API', 'Payment Gateway', 'Address Management'],
      links: [
        {
          type: 'apple',
          label: 'Apple App Store',
          subtext: 'Download on',
          icon: 'fa-brands fa-apple',
          url: 'https://apps.apple.com/us/app/direct-bazar/id6756918034',
          isFullWidth: true
        }
      ]
    },
    {
      id: 'iploy',
      title: 'Iploy',
      category: 'Job & Recruitment Platform',
      metric: '90% Crash-Free',
      metricIcon: 'fa-shield-check',
      status: 'Live on App Store & Play Store',
      icon: 'fa-briefcase-medical',
      bannerGradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      description: 'Engineered a comprehensive, production-ready Flutter app for an Android and iOS job platform. Features secure authentication with social logins (Google, Apple) and role-based access control for job providers and seekers.',
      bullets: [
        'Engineered scalable cross-platform architecture achieving <strong>90% crash-free stability</strong>.',
        'Implemented role-based dashboards (Job Seekers vs. Employers) & OAuth (Google/Apple).',
        'Integrated real-time push notifications for instant job applications and status alerts.'
      ],
      tags: ['Flutter', 'Dart', 'Firebase Auth', 'Push Notifications', 'REST API', 'Role-Based Access'],
      links: [
        {
          type: 'apple',
          label: 'App Store',
          subtext: 'Download on',
          icon: 'fa-brands fa-apple',
          url: 'https://apps.apple.com/us/app/iploy-app/id6756605572'
        },
        {
          type: 'google',
          label: 'Google Play',
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
      metric: '95%+ Compatibility',
      metricIcon: 'fa-mobile-screen',
      status: 'Live on Play Store',
      icon: 'fa-lungs',
      bannerGradient: 'linear-gradient(135deg, #0575E6, #00F260)',
      description: 'Delivered a high-performance cross-platform Flutter mobile app with a responsive UI. Integrated WebSocket and Pusher for instantaneous live data streaming and engagement.',
      bullets: [
        'Integrated REST APIs, Firebase push notifications, and in-app subscriptions.',
        'Connected WebSocket & Pusher for real-time messaging, <strong>boosting user engagement by 40%</strong>.',
        'Maintained full Play Store compliance through optimized security and memory benchmarks.'
      ],
      tags: ['Flutter', 'WebSocket', 'Pusher', 'Firebase', 'Subscriptions', 'REST API'],
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
      category: 'iOS Productivity & Smart Reminders',
      metric: 'Push Sync',
      metricIcon: 'fa-bell',
      status: 'Live on App Store',
      icon: 'fa-clock-rotate-left',
      bannerGradient: 'linear-gradient(135deg, #654ea3, #eaafc8)',
      description: 'Designed and shipped a production-ready Flutter iOS app with a clean, intuitive UI. Provides intelligent date synchronization, personalized notifications, and cloud backup.',
      bullets: [
        'Clean and fluid iOS-centric design achieving <strong>95%+ device compatibility</strong>.',
        'Implemented REST APIs and Firebase push notifications for reliable event synchronization.',
        'Achieved full Apple App Store review compliance through high performance standards.'
      ],
      tags: ['Flutter', 'iOS App', 'Firebase FCM', 'REST APIs', 'Date Sync', 'App Store Release'],
      links: [
        {
          type: 'apple',
          label: 'Apple App Store',
          subtext: 'Available on',
          icon: 'fa-brands fa-apple',
          url: 'https://apps.apple.com/us/app/romeo-reminder/id6758392313',
          isFullWidth: true
        }
      ]
    }
  ],

  // ---------------- Theme Presets (Background & Accent Colors) ---------------- //
  colorThemes: [
    {
      id: 'theme-flutter-sky',
      name: 'Flutter Sky (Default)',
      previewColor: '#0175C2',
      vars: {
        '--bg-primary': '#070c18',
        '--bg-secondary': '#0d1527',
        '--bg-tertiary': '#14203a',
        '--bg-card': 'rgba(15, 23, 42, 0.75)',
        '--flutter-sky': '#0175C2',
        '--flutter-cyan': '#54C5F8',
        '--accent-glow': 'rgba(1, 117, 194, 0.35)',
        '--primary-gradient': 'linear-gradient(135deg, #0175C2 0%, #54C5F8 50%, #80D8FF 100%)'
      }
    },
    {
      id: 'theme-cyber-violet',
      name: 'Cyber Violet Neon',
      previewColor: '#8B5CF6',
      vars: {
        '--bg-primary': '#0c071a',
        '--bg-secondary': '#160d2e',
        '--bg-tertiary': '#241547',
        '--bg-card': 'rgba(23, 14, 46, 0.75)',
        '--flutter-sky': '#7C3AED',
        '--flutter-cyan': '#A78BFA',
        '--accent-glow': 'rgba(139, 92, 246, 0.4)',
        '--primary-gradient': 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 50%, #C084FC 100%)'
      }
    },
    {
      id: 'theme-emerald-matrix',
      name: 'Emerald Matrix Glow',
      previewColor: '#10B981',
      vars: {
        '--bg-primary': '#04130d',
        '--bg-secondary': '#0a2319',
        '--bg-tertiary': '#0f3627',
        '--bg-card': 'rgba(10, 35, 25, 0.75)',
        '--flutter-sky': '#059669',
        '--flutter-cyan': '#34D399',
        '--accent-glow': 'rgba(16, 185, 129, 0.4)',
        '--primary-gradient': 'linear-gradient(135deg, #059669 0%, #10B981 50%, #6EE7B7 100%)'
      }
    },
    {
      id: 'theme-sunset-crimson',
      name: 'Sunset Amber & Rose',
      previewColor: '#F43F5E',
      vars: {
        '--bg-primary': '#16080e',
        '--bg-secondary': '#270e19',
        '--bg-tertiary': '#3d1627',
        '--bg-card': 'rgba(39, 14, 25, 0.75)',
        '--flutter-sky': '#E11D48',
        '--flutter-cyan': '#FB7185',
        '--accent-glow': 'rgba(244, 63, 94, 0.4)',
        '--primary-gradient': 'linear-gradient(135deg, #E11D48 0%, #FB7185 50%, #FDA4AF 100%)'
      }
    },
    {
      id: 'theme-midnight-oled',
      name: 'Midnight Deep Slate',
      previewColor: '#38BDF8',
      vars: {
        '--bg-primary': '#020408',
        '--bg-secondary': '#080d1a',
        '--bg-tertiary': '#101828',
        '--bg-card': 'rgba(12, 18, 32, 0.85)',
        '--flutter-sky': '#0284C7',
        '--flutter-cyan': '#38BDF8',
        '--accent-glow': 'rgba(56, 189, 248, 0.35)',
        '--primary-gradient': 'linear-gradient(135deg, #0284C7 0%, #38BDF8 50%, #BAE6FD 100%)'
      }
    }
  ]
};
