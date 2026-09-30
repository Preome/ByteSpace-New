import React, { useState, useEffect } from 'react';
import { Course, ViewRoute, User } from './types';
import { COURSES, DUMMY_USER } from './data/coursesData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartModal } from './components/CartModal';
import { HomePage } from './views/HomePage';
import { LoginPage } from './views/LoginPage';
import { SignupPage } from './views/SignupPage';
import { SearchPage } from './views/SearchPage';
import { CourseDetailsPage } from './views/CourseDetailsPage';
import { CreatorProfilePage } from './views/CreatorProfilePage';
import { NotFoundPage } from './views/NotFoundPage';
import { LayoutGrid, Layers, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<ViewRoute>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[1]); // default to "Build Digital Asset" as in Figma
  const [user, setUser] = useState<User | null>(null);
  const [cartItems, setCartItems] = useState<Course[]>([COURSES[1]]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState<string[]>(['course_1']);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync scroll on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSelectCourse = (course: Course) => {
    setSelectedCourse(course);
    setCurrentRoute('course-details');
  };

  const handleAddToCart = (course: Course) => {
    if (enrolledCourses.includes(course.id)) {
      showToast(`You are already enrolled in "${course.title}"!`);
      return;
    }
    if (!cartItems.some(i => i.id === course.id)) {
      setCartItems(prev => [...prev, course]);
    }
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (courseId: string) => {
    setCartItems(prev => prev.filter(c => c.id !== courseId));
  };

  const handleCheckout = () => {
    setEnrolledCourses(prev => [...prev, ...cartItems.map(c => c.id)]);
    setCartItems([]);
    showToast('Success! You are now enrolled.');
  };

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    showToast(`Welcome back, ${newUser.name}!`);
  };

  const handleSignup = (newUser: User) => {
    setUser(newUser);
    showToast(`Welcome to ByteSpace, ${newUser.name}!`);
  };

  const handleLogout = () => {
    setUser(null);
    showToast('Signed out successfully.');
  };

  // Determine whether current page uses dark blue navbar or light navbar
  const isAuthPage = currentRoute === 'login' || currentRoute === 'signup';

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#C9F31D] selection:text-gray-950 font-sans">
      
      {/* Quick Figma Pages Interactive Bar */}
      <aside aria-label="Figma Prototype Screen Navigator" className="bg-slate-900 text-slate-200 text-xs py-2 px-3 sm:px-6 sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9F31D] animate-ping"></span>
            <span className="font-bold text-white tracking-wide">Figma Prototype Screens:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto py-0.5">
            <button
              onClick={() => setCurrentRoute('home')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                currentRoute === 'home'
                  ? 'bg-[#C9F31D] text-gray-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              1. Home (6 Sections)
            </button>
            <button
              onClick={() => setCurrentRoute('login')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                currentRoute === 'login'
                  ? 'bg-[#C9F31D] text-gray-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              2. Login
            </button>
            <button
              onClick={() => setCurrentRoute('signup')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                currentRoute === 'signup'
                  ? 'bg-[#C9F31D] text-gray-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              3. Sign Up
            </button>
            <button
              onClick={() => setCurrentRoute('search')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                currentRoute === 'search'
                  ? 'bg-[#C9F31D] text-gray-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              4. Search
            </button>
            <button
              onClick={() => setCurrentRoute('course-details')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                currentRoute === 'course-details'
                  ? 'bg-[#C9F31D] text-gray-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              5. Details (About)
            </button>
            <button
              onClick={() => setCurrentRoute('course-lessons')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                currentRoute === 'course-lessons'
                  ? 'bg-[#C9F31D] text-gray-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              6. Lessons
            </button>
            <button
              onClick={() => setCurrentRoute('course-reviews')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                currentRoute === 'course-reviews'
                  ? 'bg-[#C9F31D] text-gray-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              7. Reviews
            </button>
            <button
              onClick={() => setCurrentRoute('creator-profile')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                currentRoute === 'creator-profile'
                  ? 'bg-[#C9F31D] text-gray-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              8. Creator Profile
            </button>
            <button
              onClick={() => setCurrentRoute('not-found')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                currentRoute === 'not-found'
                  ? 'bg-[#C9F31D] text-gray-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              9. 404 Page
            </button>
          </div>
        </div>
      </aside>

      {/* Main App Navbar (omitted on full-bleed login & signup pages as in Figma, or shown with toggle) */}
      {!isAuthPage && (
        <Navbar
          currentRoute={currentRoute}
          onNavigate={(route) => setCurrentRoute(route)}
          user={user}
          onLogout={handleLogout}
          cartCount={cartItems.length}
          onOpenCart={() => setIsCartOpen(true)}
          isLightBg={false}
        />
      )}

      {/* Main Views Container */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            courses={COURSES}
            onSelectCourse={handleSelectCourse}
            onNavigate={(route) => setCurrentRoute(route)}
          />
        )}

        {currentRoute === 'login' && (
          <LoginPage
            onLogin={handleLogin}
            onNavigate={(route) => setCurrentRoute(route)}
          />
        )}

        {currentRoute === 'signup' && (
          <SignupPage
            onSignup={handleSignup}
            onNavigate={(route) => setCurrentRoute(route)}
          />
        )}

        {currentRoute === 'search' && (
          <SearchPage
            courses={COURSES}
            onSelectCourse={handleSelectCourse}
            onNavigate={(route) => setCurrentRoute(route)}
          />
        )}

        {currentRoute === 'course-details' && (
          <CourseDetailsPage
            course={selectedCourse}
            initialTab="about"
            onNavigate={(route) => setCurrentRoute(route)}
            onAddToCart={handleAddToCart}
            isEnrolled={enrolledCourses.includes(selectedCourse.id)}
          />
        )}

        {currentRoute === 'course-lessons' && (
          <CourseDetailsPage
            course={selectedCourse}
            initialTab="lessons"
            onNavigate={(route) => setCurrentRoute(route)}
            onAddToCart={handleAddToCart}
            isEnrolled={enrolledCourses.includes(selectedCourse.id)}
          />
        )}

        {currentRoute === 'course-reviews' && (
          <CourseDetailsPage
            course={selectedCourse}
            initialTab="reviews"
            onNavigate={(route) => setCurrentRoute(route)}
            onAddToCart={handleAddToCart}
            isEnrolled={enrolledCourses.includes(selectedCourse.id)}
          />
        )}

        {currentRoute === 'creator-profile' && (
          <CreatorProfilePage
            courses={COURSES}
            onSelectCourse={handleSelectCourse}
            onNavigate={(route) => setCurrentRoute(route)}
          />
        )}

        {currentRoute === 'not-found' && (
          <NotFoundPage
            onNavigate={(route) => setCurrentRoute(route)}
          />
        )}
      </main>

      {/* Footer on all pages except auth pages */}
      {!isAuthPage && (
        <Footer onNavigate={(route) => setCurrentRoute(route)} />
      )}

      {/* Cart Drawer / Modal */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
        onBrowseCourses={() => {
          setIsCartOpen(false);
          setCurrentRoute('search');
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-700 animate-in slide-in-from-bottom-5 duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#C9F31D]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
