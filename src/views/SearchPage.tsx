import React, { useState } from 'react';
import { Course, ViewRoute } from '../types';
import { CourseCard } from '../components/CourseCard';
import { Search, ChevronDown, SlidersHorizontal, BarChart2, FolderKanban, ChevronLeft, ChevronRight } from 'lucide-react';

interface SearchPageProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onNavigate: (route: ViewRoute) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({
  courses,
  onSelectCourse,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [sortBy, setSortBy] = useState('Most relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const categories = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Cooking'
  ];

  // Filter & Search logic
  const filtered = courses.filter((course) => {
    const matchesSearch = searchQuery.trim() === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.creator.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'Featured' || 
      course.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'Highest Rated') return b.rating - a.rating;
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Most Popular') return b.studentsCount - a.studentsCount;
    return 0; // Most relevant default
  });

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* Blue Grid Search Header (Image 9) */}
      <section className="w-full bg-grid-blue pt-8 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Find Your Next Course
          </h1>

          {/* Large Search Input */}
          <div className="max-w-2xl mx-auto bg-white rounded-full p-2 shadow-2xl flex items-center gap-2 focus-within:ring-4 focus-within:ring-[#C9F31D]/40 transition-all">
            <div className="pl-4 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full text-base text-gray-900 outline-none bg-transparent placeholder:text-gray-400 font-medium"
            />
            
            {/* Courses Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCategoryMenu(!showCategoryMenu)}
                className="bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-bold px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-all cursor-pointer shadow-xs shrink-0"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showCategoryMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-30 text-left">
                  <p className="px-4 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Categories
                  </p>
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setSelectedCategory(c);
                        setShowCategoryMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-slate-50 cursor-pointer ${
                        selectedCategory === c ? 'text-blue-600 font-bold bg-blue-50/50' : 'text-gray-700'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filter Controls Row (Image 9) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
          
          {/* Left Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Toggle */}
            <button
              onClick={() => {
                setSelectedCategory('Featured');
                setSelectedLevel('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full border border-purple-600 text-purple-700 bg-white hover:bg-purple-50 text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer transition-all shadow-xs"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>

            {/* Level Selector */}
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

            {/* Category Selector */}
            <button
              onClick={() => setShowCategoryMenu(!showCategoryMenu)}
              className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer transition-all"
            >
              <FolderKanban className="w-3.5 h-3.5 text-blue-600" />
              <span>Category</span>
            </button>
          </div>

          {/* Right: Most relevant sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>{sortBy}</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-30">
                {['Most relevant', 'Highest Rated', 'Price: Low to High', 'Most Popular'].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSortBy(s);
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-slate-50 ${
                      sortBy === s ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Category Filter Pills (Image 9) */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#C9F31D] text-gray-950 shadow-xs'
                  : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mt-8 flex items-center justify-between text-sm text-gray-500 font-medium">
          <p>Showing {sorted.length} available courses</p>
          {(searchQuery || selectedCategory !== 'Featured' || selectedLevel !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Featured');
                setSelectedLevel('All');
              }}
              className="text-xs text-blue-600 hover:underline font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Course Cards Grid */}
        {sorted.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sorted.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={onSelectCourse}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <h3 className="text-xl font-bold text-gray-900">No courses found matching your criteria</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              Try searching with another keyword or resetting the filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Featured');
                setSelectedLevel('All');
              }}
              className="bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-bold px-6 py-2.5 rounded-full text-sm cursor-pointer shadow-xs"
            >
              Show All Courses
            </button>
          </div>
        )}

        {/* Pagination (Image 10) */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer shadow-xs"
            title="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center transition-all cursor-pointer ${
                currentPage === page
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(5, prev + 1))}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 cursor-pointer shadow-xs"
            title="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </div>
  );
};
