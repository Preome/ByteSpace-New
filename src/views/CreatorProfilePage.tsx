import React, { useState } from 'react';
import { Course, ViewRoute } from '../types';
import { CourseCard } from '../components/CourseCard';
import { CREATOR_PUREPEARL } from '../data/coursesData';
import { SlidersHorizontal, BarChart2, FolderKanban, ChevronDown, Check, UserPlus } from 'lucide-react';

interface CreatorProfilePageProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onNavigate: (route: ViewRoute) => void;
}

export const CreatorProfilePage: React.FC<CreatorProfilePageProps> = ({
  courses,
  onSelectCourse,
  onNavigate
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(CREATOR_PUREPEARL.followersCount);
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [sortBy, setSortBy] = useState('Most relevant');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers(prev => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowers(prev => prev + 1);
    }
  };

  const creatorCourses = courses.filter(c => 
    c.creator.name.toLowerCase() === CREATOR_PUREPEARL.name.toLowerCase() ||
    selectedLevel === 'All' ? true : c.level === selectedLevel
  );

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* Creator Profile Header (Image 15) */}
      <section className="w-full bg-grid-blue pt-8 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Top row: Avatar + Name + Creator Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <img
                src={CREATOR_PUREPEARL.avatar}
                alt={CREATOR_PUREPEARL.name}
                className="w-24 h-24 rounded-3xl object-cover ring-4 ring-white/30 shadow-2xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {CREATOR_PUREPEARL.name}
                </h1>
                <span className="bg-[#C9F31D] text-gray-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  Creator
                </span>
              </div>
              <p className="text-blue-100 text-sm sm:text-base font-medium mt-1">
                {CREATOR_PUREPEARL.title}
              </p>
            </div>
          </div>

          {/* Bio text */}
          <p className="max-w-4xl text-sm sm:text-base text-blue-100/90 leading-relaxed">
            {CREATOR_PUREPEARL.bio}
          </p>

          {/* Stats & Follow Button */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="bg-white rounded-full px-5 py-2 text-xs sm:text-sm font-bold text-gray-900 shadow-sm">
              {CREATOR_PUREPEARL.coursesCount} Products
            </div>

            <div className="bg-white rounded-full px-5 py-2 text-xs sm:text-sm font-bold text-gray-900 shadow-sm">
              {followers} Followers
            </div>

            <button
              onClick={handleFollowToggle}
              className={`px-7 py-2 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer shadow-md flex items-center gap-1.5 ${
                isFollowing
                  ? 'bg-white text-blue-600 hover:bg-slate-100'
                  : 'bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950'
              }`}
            >
              {isFollowing ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Following</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4 stroke-[2.5]" />
                  <span>Follow</span>
                </>
              )}
            </button>
          </div>

        </div>
      </section>

      {/* Creator Courses List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filter Controls Row (Image 15) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-gray-100">
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSelectedLevel('All')}
              className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer transition-all"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setShowLevelMenu(!showLevelMenu)}
                className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer transition-all"
              >
                <BarChart2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Level {selectedLevel !== 'All' ? `(${selectedLevel})` : ''}</span>
              </button>

              {showLevelMenu && (
                <div className="absolute left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-30">
                  {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        setSelectedLevel(lvl);
                        setShowLevelMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-slate-50 ${
                        selectedLevel === lvl ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('search')}
              className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer transition-all"
            >
              <FolderKanban className="w-3.5 h-3.5 text-blue-600" />
              <span>Category</span>
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>{sortBy}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-30">
                {['Most relevant', 'Highest Rated', 'Price: Low to High'].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSortBy(s);
                      setShowSortMenu(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Courses 3-col Grid (Matching Image 15) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {creatorCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={onSelectCourse}
            />
          ))}
        </div>

      </div>

    </div>
  );
};
