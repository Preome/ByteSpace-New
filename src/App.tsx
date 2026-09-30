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
