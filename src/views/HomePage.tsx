import React, { useState } from 'react';
import { Course, ViewRoute } from '../types';
import { CourseCard } from '../components/CourseCard';
import { 
  Search, 
  Star, 
  Palette, 
  Code, 
  Laptop, 
  Building2, 
  Megaphone, 
  Camera, 
  CheckCircle2, 
  ArrowUpRight,
  BarChart2
} from 'lucide-react';
import { CATEGORIES_LIST, TESTIMONIALS } from '../data/coursesData';

import boyStudentImg from '../assets/images/boy_headphones_laptop_1790798262701.png';
import girlImg from '../assets/images/girl.png';
import { ClientLogos } from '../components/ClientLogos';
import { 
  LimeSpiral, 
  WhiteSquiggle, 
  WhiteTorus, 
  WhitePyramid, 
  LimeCylinder 
} from '../components/DecorativeShapes';

interface HomePageProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onNavigate: (route: ViewRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  courses,
  onSelectCourse,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Featured');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('search');
  };

  const filteredCourses = selectedCategory === 'Featured'
    ? courses.slice(0, 6)
    : courses.filter(c => c.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory === 'Featured').slice(0, 6);

  const displayCourses = filteredCourses.length > 0 ? filteredCourses : courses.slice(0, 6);

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* SECTION 1: HERO EXACTLY MATCHING USER'S IMAGE */}
      <section className="relative w-full bg-grid-blue pt-4 pb-0 overflow-hidden min-h-[820px] flex flex-col justify-between">
        
        {/* 3D Decorative Shapes (Exact positioning from screenshot) */}
        {/* Left Top: Big Lime 3D Spiral */}
        <div className="absolute top-12 -left-6 sm:-left-2 w-36 sm:w-48 lg:w-56 pointer-events-none z-10">
          <LimeSpiral />
        </div>

        {/* Left Middle: White Squiggle */}
        <div className="absolute top-80 left-8 sm:left-24 lg:left-36 w-20 sm:w-28 pointer-events-none z-10">
          <WhiteSquiggle />
        </div>

        {/* Left Bottom: White 3D Torus Donut */}
        <div className="absolute bottom-6 -left-4 sm:left-8 lg:left-14 w-44 sm:w-60 lg:w-72 pointer-events-none z-20">
          <WhiteTorus />
        </div>

        {/* Right Top: Lime 3D Cylinder */}
        <div className="absolute -top-6 right-0 sm:right-4 w-40 sm:w-52 lg:w-64 pointer-events-none z-10">
          <LimeCylinder />
        </div>

        {/* Right Middle: White 3D Pyramid */}
        <div className="absolute top-64 right-10 sm:right-28 lg:right-36 w-24 sm:w-36 pointer-events-none z-10">
          <WhitePyramid />
        </div>

        {/* Right Bottom: White Squiggle Spring */}
        <div className="absolute bottom-12 right-6 sm:right-16 lg:right-24 w-24 sm:w-36 pointer-events-none z-10">
          <WhiteSquiggle />
        </div>

        {/* Hero Title & Search Header */}
        <div className="relative max-w-5xl mx-auto px-4 text-center z-20 pt-6 sm:pt-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            Get Access to Hundreds <br className="hidden sm:inline" />
            Courses Available
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Box */}
          <form 
            onSubmit={handleHeroSearch}
            className="mt-7 max-w-xl mx-auto relative flex items-center bg-white rounded-full p-2 shadow-2xl transition-all focus-within:ring-4 focus-within:ring-[#C9F31D]/40"
          >
            <div className="pl-4 pr-2 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full text-sm sm:text-base text-gray-900 outline-none bg-transparent placeholder:text-gray-400 font-medium"
            />
            <button
              type="submit"
              className="bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-bold px-7 py-3 rounded-full text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-md shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Central Graphic Composition: Giant Lime Dome + Student + Floating Badges */}
        <div className="relative max-w-5xl mx-auto w-full px-4 mt-8 sm:mt-12 z-20 flex justify-center items-end overflow-visible">
          
          {/* Giant Lime Arch / Dome (exact shape from screenshot) */}
          <div className="relative w-[360px] h-[280px] sm:w-[620px] sm:h-[460px] lg:w-[760px] lg:h-[540px] rounded-t-full bg-[#C9F31D] flex items-end justify-center shadow-2xl overflow-visible">
            
            {/* Student Portrait Image (Cutout smiling with headphones & laptop) */}
            <div className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] lg:w-[640px] lg:h-[640px] -mb-1 flex items-end justify-center">
              <img
                src={boyStudentImg}
                alt="Student with headphones and laptop"
                className="w-full h-full object-contain object-bottom drop-shadow-2xl z-10"
              />
            </div>

            {/* Floating Badge 1 (Top Left): UI/UX Design */}
            <div className="absolute top-8 -left-8 sm:-left-16 lg:-left-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 z-30 text-left min-w-[190px]">
              <h4 className="text-sm font-bold text-gray-900">UI/UX Design</h4>
              <p className="text-[11px] text-gray-500 font-medium mt-0.5">200 Courses • 1000+ Students</p>
            </div>

            {/* Floating Badge 2 (Top Right): Learning Progress 55% */}
            <div className="absolute top-20 -right-6 sm:-right-16 lg:-right-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 z-30 text-left min-w-[200px]">
              <p className="text-xs text-gray-500 font-medium">Learning Progress</p>
              <h4 className="text-3xl font-black text-gray-900 mt-1">55%</h4>
              <div className="w-full bg-slate-100 rounded-full h-2 mt-2.5 overflow-hidden">
                <div className="h-full w-[55%] rounded-full bg-gradient-to-r from-purple-500 via-[#C9F31D] to-[#C9F31D]"></div>
              </div>
            </div>

            {/* Floating Badge 3 (Bottom Left): Happy Students */}
            <div className="absolute bottom-8 -left-10 sm:-left-20 lg:-left-24 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/80 z-30 text-left min-w-[210px]">
              <h5 className="text-xs font-bold text-gray-900">Happy Students</h5>
              <div className="flex items-center gap-1 text-[11px] text-gray-500 font-semibold mt-0.5">
                <span>4.5 (240)</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </div>
              <div className="flex items-center -space-x-2 mt-2">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                <div className="w-6 h-6 rounded-full bg-[#C9F31D] text-gray-950 text-[10px] font-black flex items-center justify-center border-2 border-white">
                  2K+
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* CLIENT LOGOS TICKER (Exactly matching the 5 Logoipsum logos in image.png) */}
      <ClientLogos />

      {/* SECTION 2: DISCOVER YOUR PASSION, BUILD YOUR SKILLS (Image 2 & 3) */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Pills (Matching exact layout from Figma image 2) */}
        <div className="mt-12 flex flex-col items-center gap-3">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C9F31D] text-gray-950 shadow-xs'
                    : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C9F31D] text-gray-950 shadow-xs'
                    : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 3 (highlighted in pink in Figma or "+ More" toggle) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-4 py-1.5 rounded-full border border-pink-400/50 bg-pink-50/20">
            {['Productivity', 'Web Development', 'Data Science', 'Cooking'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C9F31D] text-gray-950'
                    : 'bg-transparent text-gray-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => onNavigate('search')}
              className="px-3 py-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              + More
            </button>
          </div>
        </div>

        {/* Course Cards 3-Column Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={onSelectCourse}
            />
          ))}
        </div>
      </section>

      {/* SECTION 3: EXPLORE DIVERSE LEARNING PATHS AT BYTESPACE (Image 3 & 4) */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Rounded Cards */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {[
            { name: 'Design', icon: Palette },
            { name: 'Development', icon: Code },
            { name: 'IT & Software', icon: Laptop },
            { name: 'Business', icon: Building2 },
            { name: 'Marketing', icon: Megaphone },
            { name: 'Photography', icon: Camera }
          ].map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  onNavigate('search');
                }}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-lime-300 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9F31D] flex items-center justify-center text-gray-950 group-hover:scale-110 transition-transform shadow-xs">
                  <Icon className="w-7 h-7 stroke-[2.2]" />
                </div>
                <h4 className="mt-4 text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h4>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: YOUR PATH TO PROFESSIONAL GROWTH STARTS HERE! */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
        {/* Soft Ambient Lime Glow in Background */}
        <div className="absolute top-0 -left-20 w-80 h-80 bg-[#C9F31D]/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.12]">
              Your Path to Professional <br />
              Growth Starts Here!
            </h2>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics */}
            <div className="pt-4 flex items-center gap-10 sm:gap-14">
              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#0052FF]">12K</p>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">Students</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#0052FF]">70+</p>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">Courses</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-black text-[#0052FF]">16</p>
                <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Visual Composition (Matching screenshot) */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[520px] sm:min-h-[580px]">
            <div className="relative w-full max-w-[500px] sm:max-w-[560px] h-[520px] sm:h-[580px]">
              
              {/* Background Course Card (Learn Figma from Basic) */}
              <div className="absolute top-2 left-0 w-[250px] sm:w-[280px] bg-white rounded-3xl p-3.5 shadow-2xl border border-gray-100/80 z-10">
                <div className="relative rounded-2xl overflow-hidden h-36">
                  <img
                    src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80"
                    alt="Course preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                    <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                      17 Lessons
                    </span>
                    <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>

                <div className="mt-3 space-y-1">
                  <h4 className="font-extrabold text-gray-900 text-sm leading-snug">
                    Learn Figma from Basic
                  </h4>
                  <p className="text-[11px] text-blue-600 font-medium">by purepearl studio</p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-gray-600 bg-gray-100 px-2.5 py-0.5 rounded-full">
                      <BarChart2 className="w-3 h-3 text-emerald-600" />
                      <span>Beginner</span>
                    </div>
                    <div className="text-xs font-black text-gray-950">
                      <span className="text-blue-600 font-bold">$25</span>
                      <span className="text-[10px] font-normal text-gray-400"> / lifetime</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lime Spiral Decoration floating behind on top-right */}
              <div className="absolute top-2 right-0 sm:right-2 w-32 sm:w-36 pointer-events-none z-10">
                <LimeSpiral />
              </div>

              {/* Boy Cutout Overlay in Foreground (Center-Right) */}
              <div className="absolute -bottom-1 right-8 sm:right-12 lg:right-14 w-[330px] sm:w-[390px] lg:w-[420px] h-[460px] sm:h-[520px] lg:h-[560px] z-20 flex items-end justify-center pointer-events-none">
                <img
                  src={boyStudentImg}
                  alt="Student with headphones and laptop"
                  className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Floating Progress Badge (Cleanly on the RIGHT SIDE of the boy, below the spiral, not above his head) */}
              <div className="absolute top-48 sm:top-52 -right-2 sm:right-0 lg:right-0 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-gray-100 min-w-[170px] sm:min-w-[185px] z-30">
                <p className="text-[11px] text-gray-500 font-semibold">Learning Progress</p>
                <p className="text-3xl font-black text-gray-900 mt-1">55%</p>
                <div className="w-full bg-slate-100 rounded-full h-2 mt-2.5 overflow-hidden">
                  <div className="bg-[#C9F31D] h-full w-[55%] rounded-full"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: CREATE & MANAGE COURSES EASILY */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
        {/* Soft Ambient Lime Glows in Background */}
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#C9F31D]/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Visual: Female Creator Cutout & Floating Analytics Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[520px] sm:min-h-[580px] order-2 lg:order-1">
            <div className="relative w-full max-w-[500px] sm:max-w-[540px] h-[520px] sm:h-[580px] flex justify-center items-end">
              
              {/* Floating Card: Total Revenue (top left) */}
              <div className="absolute top-8 left-0 sm:left-2 bg-[#0052FF] text-white rounded-2xl p-4 shadow-2xl z-25 min-w-[180px]">
                <p className="text-[11px] text-blue-100 font-medium">Total Revenue</p>
                <p className="text-[10px] text-blue-200">July 1-28</p>
                <p className="text-2xl font-black mt-1">$120.29</p>
                <div className="w-full bg-blue-950/40 rounded-full h-1.5 mt-2.5 overflow-hidden">
                  <div className="bg-[#C9F31D] h-full w-[70%] rounded-full"></div>
                </div>
              </div>

              {/* Floating Card: Year to Date (middle left) */}
              <div className="absolute top-52 left-0 sm:left-2 bg-[#0052FF] text-white rounded-2xl p-4 shadow-2xl z-25 min-w-[180px]">
                <p className="text-[11px] text-blue-100 font-medium">Year to Date</p>
                <p className="text-[10px] text-blue-200">2023</p>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <p className="text-xl font-black">$1,200.38</p>
                  <span className="bg-[#C9F31D] text-gray-950 text-[10px] font-black px-2 py-0.5 rounded-full">
                    +12$
                  </span>
                </div>
              </div>

              {/* Lime Spiral Decoration (floating behind girl on right) */}
              <div className="absolute top-16 right-2 sm:right-6 w-32 sm:w-40 pointer-events-none z-10">
                <LimeSpiral />
              </div>

              {/* Girl Photo Cutout (Enlarged center foreground) */}
              <div className="relative w-[340px] sm:w-[400px] lg:w-[440px] h-[470px] sm:h-[530px] lg:h-[570px] z-15 flex items-end justify-center">
                <img
                  src={girlImg}
                  alt="ByteSpace Creator"
                  className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Floating Card: Happy Students (bottom right) */}
              <div className="absolute bottom-6 right-0 sm:right-2 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-gray-100 z-25 min-w-[210px]">
                <p className="text-xs font-bold text-gray-900">Happy Students</p>
                <div className="flex items-center gap-1 text-[11px] text-gray-500 font-semibold mt-0.5">
                  <span>4.5 (240)</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex items-center -space-x-2 mt-2">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="Student" />
                  <div className="w-6 h-6 rounded-full bg-[#C9F31D] text-gray-900 text-[10px] font-black flex items-center justify-center border-2 border-white shadow-xs">
                    2K+
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.12]">
              Create & Manage <br />
              Courses Easily.
            </h2>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal max-w-xl">
              <strong className="text-gray-900 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="text-base font-bold text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: CREATOR BANNER & TESTIMONIALS (Image 5 & 6) */}
      <section className="w-full">
        
        {/* Creator Banner */}
        <div className="relative w-full bg-grid-blue py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
          {/* 3D Shapes */}
          <div className="absolute top-8 left-8 w-24 pointer-events-none opacity-80">
            <LimeSpiral />
          </div>
          <div className="absolute -bottom-10 left-16 w-32 pointer-events-none">
            <WhitePyramid />
          </div>
          <div className="absolute top-8 right-12 w-28 pointer-events-none">
            <WhitePyramid />
          </div>
          <div className="absolute bottom-4 right-10 w-24 pointer-events-none">
            <LimeSpiral />
          </div>

          <div className="relative max-w-4xl mx-auto z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Unlock Your Potential as a <br />
              Creator with ByteSpace
            </h2>

            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('creator-profile')}
                className="bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-extrabold px-9 py-3.5 rounded-full text-base transition-all duration-200 cursor-pointer shadow-xl hover:scale-105"
              >
                Join as Creator
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover shadow-sm ring-4 ring-slate-50"
                  />
                  <h4 className="mt-5 text-lg font-bold text-gray-950">{t.name}</h4>
                  <p className="text-xs font-semibold text-blue-600 mt-0.5">{t.role}</p>
                  <p className="mt-5 text-sm text-gray-600 leading-relaxed font-normal">
                    {t.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
};
