export interface Course {
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  description?: string;
  category: string;
  creator: {
    name: string;
    avatar: string;
    title: string;
    bio?: string;
    verified?: boolean;
    followersCount?: number;
    coursesCount?: number;
  };
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  price: number;
  priceType: 'lifetime' | 'monthly' | 'free';
  thumbnail: string;
  videoPreviewUrl?: string;
  featured?: boolean;
  avatarStack: string[];
  moreStudentsCount: number;
  keyPoints?: string[];
  sneakPeakImages?: string[];
  modules?: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: {
    id: string;
    number: string;
    title: string;
    duration: string;
    preview?: boolean;
  }[];
}

export interface Review {
  id: string;
  courseId: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  rating: number;
  date: string;
  comment: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export type ViewRoute = 
  | 'home' 
  | 'login' 
  | 'signup' 
  | 'search' 
  | 'course-details' 
  | 'course-lessons' 
  | 'course-reviews' 
  | 'creator-profile' 
  | 'not-found';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  enrolledCourseIds: string[];
}
