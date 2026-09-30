import { Course, Review, Testimonial, User } from '../types';

export const DUMMY_USER: User = {
  id: 'user_1',
  name: 'Jamie Davis',
  email: 'designer@example.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  enrolledCourseIds: ['course_2']
};

export const CREATOR_PUREPEARL = {
  name: 'PurePearl Studio',
  avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=240&q=80',
  title: 'Passionate UI/UX, Web designer',
  bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  verified: true,
  followersCount: 12,
  coursesCount: 3
};

export const COURSES: Course[] = [
  {
    id: 'course_1',
    title: 'Learn Figma from Basic',
    slug: 'learn-figma-from-basic',
    subtitle: 'From zero to design hero with real-world design system workflows',
    description: 'Learn Figma step by step with hands-on wireframing, prototyping, and modern component systems designed for beginners and seasoned creators.',
    category: 'UI/UX Design',
    creator: CREATOR_PUREPEARL,
    level: 'Beginner',
    rating: 4.5,
    reviewsCount: 184,
    studentsCount: 1420,
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    price: 25,
    priceType: 'lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    avatarStack: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    ],
    moreStudentsCount: 26,
    featured: true
  },
  {
    id: 'course_2',
    title: 'Build Digital Asset: A Comprehensive Guide',
    slug: 'build-digital-asset',
    subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
    description: `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.

In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.

As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.`,
    category: 'UI/UX Design',
    creator: CREATOR_PUREPEARL,
    level: 'Intermediate',
    rating: 4.8,
    reviewsCount: 172,
    studentsCount: 199,
    lessonsCount: 112,
    duration: '24 hours',
    commentsCount: 59,
    price: 25,
    priceType: 'lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    avatarStack: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    ],
    moreStudentsCount: 26,
    featured: true,
    keyPoints: [
      'Foundational Concepts',
      'Design Principles Mastery',
      'Advanced Techniques in Digital Creation',
      'Project Showcase and Critique',
      'Optimizing for Various Platforms',
      'Digital Asset Management Best Practices',
      'Monetization Strategies',
      'Capstone Project: Building Your Portfolio'
    ],
    sneakPeakImages: [
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80'
    ],
    modules: [
      {
        id: 'mod_1',
        title: 'Module 1: Introduction to Digital Assets',
        description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
        lessons: [
          { id: 'les_1', number: '01', title: 'Introduction to Digital Assets', duration: '12 mins', preview: true },
          { id: 'les_2', number: '02', title: 'Understanding Digital Elements & Vectors', duration: '18 mins' },
          { id: 'les_3', number: '03', title: 'Navigating Industry Software Tools', duration: '15 mins' }
        ]
      },
      {
        id: 'mod_2',
        title: 'Module 2: Design Principles for Impact',
        description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
        lessons: [
          { id: 'les_4', number: '04', title: 'Design Principles for Impacts', duration: '21 mins', preview: true },
          { id: 'les_5', number: '05', title: 'Color Theory in Digital Design', duration: '19 mins' },
          { id: 'les_6', number: '06', title: 'Typography Essentials & Layout Hierarchies', duration: '25 mins' }
        ]
      },
      {
        id: 'mod_4',
        title: 'Module 4: User-Centric Design Strategies',
        description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
        lessons: [
          { id: 'les_7', number: '07', title: 'Design Thinking in Digital Creation', duration: '16 mins' },
          { id: 'les_8', number: '08', title: 'User Experience (UX) Essentials', duration: '22 mins' }
        ]
      },
      {
        id: 'mod_5',
        title: 'Module 5: Interactive Media and Engagement',
        description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
        lessons: [
          { id: 'les_9', number: '09', title: 'Creating Interactive Presentations', duration: '20 mins' },
          { id: 'les_10', number: '10', title: 'Integrating Multimedia Elements', duration: '24 mins' }
        ]
      },
      {
        id: 'mod_6',
        title: 'Module 6: Project Showcase and Critique',
        description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
        lessons: [
          { id: 'les_11', number: '11', title: 'Effective Presentation Techniques', duration: '14 mins' },
          { id: 'les_12', number: '12', title: 'Peer Critique & Iteration Workflow', duration: '19 mins' }
        ]
      },
      {
        id: 'mod_7',
        title: 'Module 7: Optimizing Digital Assets for Various Platforms',
        description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
        lessons: [
          { id: 'les_13', number: '13', title: 'Exporting for Mobile & High-DPI screens', duration: '18 mins' },
          { id: 'les_14', number: '14', title: 'Cross-platform Asset Packaging', duration: '22 mins' }
        ]
      }
    ]
  },
  {
    id: 'course_3',
    title: 'the Power of Big Data',
    slug: 'the-power-of-big-data',
    subtitle: 'Data analytics and business intelligence from scratch',
    description: 'Harness large-scale datasets, query architectures, and modern data visualization dashboards with practical real-life case studies.',
    category: 'Data Science',
    creator: CREATOR_PUREPEARL,
    level: 'Beginner',
    rating: 4.5,
    reviewsCount: 119,
    studentsCount: 890,
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    price: 25,
    priceType: 'lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    avatarStack: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    ],
    moreStudentsCount: 26,
    featured: true
  },
  {
    id: 'course_4',
    title: 'Balancing Productivity and...',
    slug: 'balancing-productivity',
    subtitle: 'Work smart, prevent burnout, and design a balanced creative routine',
    description: 'Master timeboxing, habit systems, deep work sessions, and stress resilience for modern digital creators.',
    category: 'Productivity',
    creator: CREATOR_PUREPEARL,
    level: 'Beginner',
    rating: 4.5,
    reviewsCount: 94,
    studentsCount: 640,
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    price: 25,
    priceType: 'lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    avatarStack: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    ],
    moreStudentsCount: 26,
    featured: true
  },
  {
    id: 'course_5',
    title: 'Mastering Money Management...',
    slug: 'mastering-money-management',
    subtitle: 'Personal finance, investments, and budgeting for freelancers',
    description: 'Take charge of your personal finance, pricing strategy, savings, and investments tailored for independent workers.',
    category: 'Business',
    creator: CREATOR_PUREPEARL,
    level: 'Beginner',
    rating: 4.5,
    reviewsCount: 142,
    studentsCount: 910,
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    price: 25,
    priceType: 'lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    avatarStack: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    ],
    moreStudentsCount: 26,
    featured: true
  },
  {
    id: 'course_6',
    title: 'From Idea to Startup Success...',
    slug: 'from-idea-to-startup-success',
    subtitle: 'Validate assumptions, build MVPs, and launch your business',
    description: 'A step-by-step roadmap to turning raw product ideas into viable, revenue-generating businesses with customer feedback loops.',
    category: 'Business',
    creator: CREATOR_PUREPEARL,
    level: 'Beginner',
    rating: 4.5,
    reviewsCount: 165,
    studentsCount: 1100,
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    price: 25,
    priceType: 'lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    avatarStack: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    ],
    moreStudentsCount: 26,
    featured: true
  },
  {
    id: 'course_7',
    title: 'Modern Web Development with React',
    slug: 'modern-web-development',
    subtitle: 'Build reactive, clean web applications with React & TypeScript',
    description: 'Comprehensive modern frontend development course covering state management, hooks, component architecture, and API integration.',
    category: 'Development',
    creator: CREATOR_PUREPEARL,
    level: 'Intermediate',
    rating: 4.9,
    reviewsCount: 230,
    studentsCount: 2400,
    lessonsCount: 32,
    duration: '8 hours 40 mins',
    commentsCount: 88,
    price: 29,
    priceType: 'lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    avatarStack: [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
    ],
    moreStudentsCount: 42,
    featured: false
  },
  {
    id: 'course_8',
    title: 'Professional Photography Essentials',
    slug: 'professional-photography-essentials',
    subtitle: 'Lighting, composition, and color grading for visual storytellers',
    description: 'Master manual camera controls, lighting setups, studio portraits, and Lightroom post-processing techniques.',
    category: 'Photography',
    creator: CREATOR_PUREPEARL,
    level: 'Beginner',
    rating: 4.7,
    reviewsCount: 86,
    studentsCount: 520,
    lessonsCount: 21,
    duration: '4 hours 30 mins',
    commentsCount: 34,
    price: 25,
    priceType: 'lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    avatarStack: [
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    ],
    moreStudentsCount: 18,
    featured: false
  }
];

export const CATEGORIES_LIST = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking'
];

export const DIVERSE_PATHS = [
  { id: 'design', name: 'Design', icon: 'palette' },
  { id: 'dev', name: 'Development', icon: 'code' },
  { id: 'it', name: 'IT & Software', icon: 'laptop' },
  { id: 'business', name: 'Business', icon: 'building' },
  { id: 'marketing', name: 'Marketing', icon: 'megaphone' },
  { id: 'photography', name: 'Photography', icon: 'camera' }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev_1',
    courseId: 'course_2',
    author: {
      name: 'PurePearl Studio',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      role: 'UI/UX Designer'
    },
    rating: 5,
    date: 'a year ago',
    comment: 'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!'
  },
  {
    id: 'rev_2',
    courseId: 'course_2',
    author: {
      name: 'Albert Flores',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      role: 'UI/UX Designer'
    },
    rating: 5,
    date: 'a year ago',
    comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
  },
  {
    id: 'rev_3',
    courseId: 'course_2',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      role: 'Product Manager'
    },
    rating: 4,
    date: '10 months ago',
    comment: 'Clear, structured, and easy to follow. The module on user-centric design gave our whole team actionable frameworks.'
  },
  {
    id: 'rev_4',
    courseId: 'course_2',
    author: {
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      role: 'Creative Director'
    },
    rating: 5,
    date: '6 months ago',
    comment: 'Outstanding production quality and curriculum depth. Truly exceptional value for $25.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test_1',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."'
  },
  {
    id: 'test_2',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."'
  },
  {
    id: 'test_3',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."'
  }
];

export const LOGOIPSUM_SVGS = [
  { id: '1', name: 'Logoipsum Wave' },
  { id: '2', name: 'Logoipsum Sun' },
  { id: '3', name: 'Logoipsum Bolt' },
  { id: '4', name: 'Logoipsum Flower' },
  { id: '5', name: 'Logoipsum Swirl' }
];
