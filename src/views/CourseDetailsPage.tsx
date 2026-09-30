import React, { useState } from 'react';
import { Course, ViewRoute, Review } from '../types';
import { 
  Star, 
  BarChart2, 
  Users, 
  Share2, 
  Play, 
  CheckCircle2, 
  BookOpen, 
  Video, 
  Award, 
  MessageSquare, 
  Check, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { REVIEWS_DATA } from '../data/coursesData';

interface CourseDetailsPageProps {
  course: Course;
  initialTab?: 'about' | 'lessons' | 'reviews';
  onNavigate: (route: ViewRoute) => void;
  onAddToCart: (course: Course) => void;
  isEnrolled: boolean;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({
  course,
  initialTab = 'about',
  onNavigate,
  onAddToCart,
  isEnrolled
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>(initialTab);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<number | 'all'>('all');
  const [copiedShare, setCopiedShare] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [expandedModule, setExpandedModule] = useState<string | null>('mod_1');

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const filteredReviews = selectedRatingFilter === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.rating === selectedRatingFilter);

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* Course Header Banner (Images 11, 13, 14) */}
      <section className="w-full bg-grid-blue pt-8 pb-32 sm:pb-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Top row: Share Button */}
          <div className="flex justify-end">
            <button
              onClick={handleShare}
              className="bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>{copiedShare ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>

          {/* Title & Subtitle */}
          <div className="max-w-4xl space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-base sm:text-lg text-blue-100 font-normal">
              {course.subtitle || 'Unlock the Power of Digital Creation with Expert Guidance'}
            </p>
            <p className="text-sm text-blue-200">
              by{' '}
              <button 
                onClick={() => onNavigate('creator-profile')}
                className="underline font-bold text-white hover:text-[#C9F31D] cursor-pointer"
              >
                {course.creator.name.toLowerCase()}
              </button>
            </p>
          </div>

          {/* Badge Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 shadow-sm">
              <BarChart2 className="w-4 h-4 text-emerald-600" />
              <span>{course.level}</span>
            </div>

            <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 shadow-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{course.rating.toFixed(1)} ({course.reviewsCount} reviews)</span>
            </div>

            <div className="bg-white rounded-full px-4 py-1.5 flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 shadow-sm">
              <Users className="w-4 h-4 text-blue-600" />
              <span>{course.studentsCount} Students</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Container with Overlapping Video & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-32 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Video Preview + Tabs Content (7 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Video Player Card */}
            <div className="bg-white rounded-3xl p-3 border border-slate-200 shadow-xl overflow-hidden relative">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center group">
                {isPlayingVideo ? (
                  <div className="relative w-full h-full bg-black flex items-center justify-center">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title={course.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm transition-all z-20 cursor-pointer"
                    >
                      Close Preview
                    </button>
                  </div>
                ) : (
                  <>
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/25"></div>

                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      aria-label="Play Course Video Preview"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/70 backdrop-blur-md flex items-center justify-center text-gray-900 shadow-2xl hover:scale-110 hover:bg-[#C9F31D] transition-all cursor-pointer z-10"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Sub-navigation Tabs (Image 12, 13, 14) */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('about')}
                className={`px-7 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'about'
                    ? 'bg-[#C9F31D] text-gray-950 shadow-xs'
                    : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab('lessons')}
                className={`px-7 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'lessons'
                    ? 'bg-[#C9F31D] text-gray-950 shadow-xs'
                    : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                }`}
              >
                Lesson
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-7 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'reviews'
                    ? 'bg-[#C9F31D] text-gray-950 shadow-xs'
                    : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                }`}
              >
                Reviews
              </button>
            </div>

            {/* TAB 1: ABOUT (Image 12) */}
            {activeTab === 'about' && (
              <div className="space-y-10 animate-in fade-in duration-300">
                
                {/* Description */}
                <div>
                  <h3 className="text-2xl font-black text-gray-950 tracking-tight mb-4">
                    Description
                  </h3>
                  <div className="p-6 rounded-2xl border border-amber-300 bg-amber-50/20 text-sm text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peak */}
                <div>
                  <h3 className="text-xl font-black text-gray-950 tracking-tight mb-4">
                    Sneak Peak
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {(course.sneakPeakImages || [
                      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80',
                      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
                      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=400&q=80',
                      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80'
                    ]).map((img, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3] border border-gray-100 shadow-sm hover:scale-105 transition-transform">
                        <img src={img} alt="Course sneak peak" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div>
                  <h3 className="text-xl font-black text-gray-950 tracking-tight mb-4">
                    Key Points
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Foundational Concepts',
                      'Design Principles Mastery',
                      'Advanced Techniques in Digital Creation',
                      'Project Showcase and Critique',
                      'Optimizing for Various Platforms',
                      'Digital Asset Management Best Practices',
                      'Monetization Strategies',
                      'Capstone Project: Building Your Portfolio'
                    ].map((kp) => (
                      <div key={kp} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{kp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: LESSONS (Image 13) */}
            {activeTab === 'lessons' && (
              <div className="space-y-10 animate-in fade-in duration-300">
                
                <div>
                  <h3 className="text-2xl font-black text-gray-950 tracking-tight mb-2">
                    Explore the Modules
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>
                </div>

                {/* Lesson List */}
                <div className="space-y-5">
                  <h4 className="text-lg font-bold text-gray-900">Lesson List</h4>

                  {(course.modules || [
                    {
                      id: 'mod_1',
                      title: 'Module 1: Introduction to Digital Assets',
                      description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
                      lessons: []
                    },
                    {
                      id: 'mod_2',
                      title: 'Module 2: Design Principles for Impact',
                      description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
                      lessons: []
                    },
                    {
                      id: 'mod_4',
                      title: 'Module 4: User-Centric Design Strategies',
                      description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
                      lessons: []
                    },
                    {
                      id: 'mod_5',
                      title: 'Module 5: Interactive Media and Engagement',
                      description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
                      lessons: []
                    },
                    {
                      id: 'mod_6',
                      title: 'Module 6: Project Showcase and Critique',
                      description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
                      lessons: []
                    },
                    {
                      id: 'mod_7',
                      title: 'Module 7: Optimizing Digital Assets for Various Platforms',
                      description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
                      lessons: []
                    }
                  ]).map((mod) => (
                    <div
                      key={mod.id}
                      className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-lime-300 hover:bg-slate-50/50 transition-all"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#C9F31D] flex items-center justify-center text-gray-950 shrink-0 shadow-xs">
                        <Video className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-base font-bold text-gray-950">{mod.title}</h5>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lesson Content & Progress Tracking */}
                <div className="space-y-6 pt-4 border-t border-gray-100">
                  <div>
                    <h4 className="text-lg font-bold text-gray-950 mb-2">Lesson Content</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-950 mb-3">Lesson Progress Tracking</h4>
                    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <span className="text-gray-700">Course Completion</span>
                        <span className="text-blue-600 font-bold">55%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                        <div className="bg-[#C9F31D] h-full w-[55%] rounded-full"></div>
                      </div>
                      <p className="text-xs text-gray-500">62 of 112 lessons completed</p>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 3: REVIEWS (Image 14) */}
            {activeTab === 'reviews' && (
              <div className="space-y-10 animate-in fade-in duration-300">
                
                <div>
                  <h3 className="text-2xl font-black text-gray-950 tracking-tight mb-2">
                    What Learners Are Saying
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>
                </div>

                {/* Big Score Breakdown Box */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center gap-8">
                  {/* Big Lime Rating Badge */}
                  <div className="w-36 h-36 bg-[#C9F31D] rounded-3xl flex flex-col items-center justify-center p-4 text-center shrink-0 shadow-sm">
                    <span className="text-xs font-bold text-gray-800">Ratings</span>
                    <span className="text-5xl font-black text-gray-950 mt-1">4.7</span>
                  </div>

                  {/* Stars Progress Bars */}
                  <div className="flex-1 w-full space-y-2.5">
                    {[
                      { stars: 5, count: 720, width: '85%' },
                      { stars: 4, count: 120, width: '45%' },
                      { stars: 3, count: 21, width: '18%' },
                      { stars: 2, count: 12, width: '12%' },
                      { stars: 1, count: 16, width: '14%' }
                    ].map((row) => (
                      <div key={row.stars} className="flex items-center gap-3 text-xs text-gray-600">
                        {/* Progress Bar */}
                        <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-[#C9F31D] h-full rounded-full"
                            style={{ width: row.width }}
                          ></div>
                        </div>

                        {/* Stars Icons */}
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < row.stars ? 'fill-gray-700 text-gray-700' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>

                        <span className="w-8 text-right font-semibold text-gray-700">{row.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-gray-950">Individual Reviews:</h4>

                  {/* Rating Filters */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setSelectedRatingFilter('all')}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-all ${
                        selectedRatingFilter === 'all'
                          ? 'bg-[#C9F31D] text-gray-950 shadow-xs'
                          : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                      }`}
                    >
                      All rating
                    </button>
                    {[5, 4, 3, 2, 1].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSelectedRatingFilter(num)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-all ${
                          selectedRatingFilter === num
                            ? 'bg-[#C9F31D] text-gray-950 shadow-xs'
                            : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                        }`}
                      >
                        <Star className="w-3 h-3 fill-current" />
                        <span>{num}</span>
                      </button>
                    ))}
                  </div>

                  {/* Review Cards */}
                  <div className="space-y-4">
                    {filteredReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={rev.author.avatar}
                              alt={rev.author.name}
                              className="w-12 h-12 rounded-full object-cover border border-gray-100"
                            />
                            <div>
                              <h5 className="text-sm font-bold text-gray-950">{rev.author.name}</h5>
                              <p className="text-xs text-gray-500 font-medium">{rev.author.role}</p>
                            </div>
                          </div>
                          <span className="text-xs text-gray-400 font-medium">{rev.date}</span>
                        </div>

                        <div className="flex items-center gap-1 text-gray-900">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                          ))}
                        </div>

                        <p className="text-sm text-gray-700 leading-relaxed font-normal">
                          "{rev.comment}"
                        </p>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            )}

          </div>

          {/* Right Column: Floating Sticky Purchase & Syllabus Sidebar (Images 11, 12, 13, 14) (5 Cols) */}
          <div className="lg:col-span-4 sticky top-6 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-6">
              
              {/* Syllabus Header */}
              <div>
                <h4 className="text-lg font-black text-gray-950">
                  {course.lessonsCount} Lessons ({course.duration})
                </h4>

                {/* Lesson Preview Items */}
                <div className="mt-4 space-y-3 divide-y divide-gray-100 text-xs text-gray-700">
                  <div className="pt-2 flex items-center justify-between">
                    <span className="font-semibold text-gray-900">01 Introduction to Digital Assets</span>
                    <span className="text-blue-600 font-medium">12 mins</span>
                  </div>
                  <div className="pt-3 flex items-center justify-between">
                    <span className="font-semibold text-gray-900">02 Design Principles for Impacts</span>
                    <span className="text-blue-600 font-medium">21 mins</span>
                  </div>
                  <div className="pt-3 flex items-center justify-between">
                    <span className="font-semibold text-gray-900">03 Advanced Techniques in Digital Creation</span>
                    <span className="text-blue-600 font-medium">16 mins</span>
                  </div>
                  <div className="pt-3 text-center">
                    <span className="text-gray-400 font-medium">99 more videos</span>
                  </div>
                </div>
              </div>

              {/* Ready to Dive In */}
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-600 font-medium">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-blue-600">
                    ${course.price}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    /{course.priceType}
                  </span>
                </div>

                {/* Enroll Button */}
                <button
                  onClick={() => onAddToCart(course)}
                  className="mt-4 w-full bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-black py-3.5 px-4 rounded-full text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
                >
                  {isEnrolled ? 'Enrolled - Go to Course' : 'Enroll Now'}
                </button>
              </div>

              {/* Course Includes Checklist */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                  This course include
                </h5>
                <div className="space-y-2.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span>Learning Resources</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-blue-600" />
                    <span>Quality Lesson Videos</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span>Private Consultation</span>
                  </div>
                </div>
              </div>

              {/* Creator Card */}
              <div className="pt-4 border-t border-gray-100 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={course.creator.avatar}
                    alt={course.creator.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-100"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-gray-950">{course.creator.name}</h5>
                    <p className="text-xs text-gray-500">Professional Creator</p>
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-normal">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <button
                  onClick={() => onNavigate('creator-profile')}
                  className="w-full py-2.5 px-4 rounded-full border border-gray-200 text-xs font-bold text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer text-center"
                >
                  See Full Profile
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
