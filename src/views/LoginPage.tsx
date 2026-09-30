import React, { useState } from 'react';
import { ViewRoute, User } from '../types';
import { Logo } from '../components/Logo';
import { LimeTorus, YellowPyramid, WhiteSquiggle } from '../components/DecorativeShapes';
import { DUMMY_USER } from '../data/coursesData';
import { Star, BarChart2 } from 'lucide-react';

import log1Img from '../assets/images/log1.png';
import log2Img from '../assets/images/log2.png';

interface LoginPageProps {
  onLogin: (user: User) => void;
  onNavigate: (route: ViewRoute) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('designer@example.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email.trim() && password.trim()) {
        onLogin({
          ...DUMMY_USER,
          email: email
        });
        onNavigate('home');
      } else {
        setError('Please enter both email and password.');
      }
    }, 600);
  };

  const handleAutofillDemo = () => {
    setEmail('designer@example.com');
    setPassword('password123');
    setError('');
  };

  return (
    <div className="min-h-screen w-full bg-grid-blue flex flex-col justify-between p-4 sm:p-6 lg:p-12 relative overflow-hidden">
      
      {/* Top Left Brand */}
      <div className="relative z-30 mb-6">
        <Logo light onClick={() => onNavigate('home')} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-20 my-auto">
        
        {/* Left Side: Welcome Text and Visual Cards */}
        <div className="lg:col-span-6 text-white space-y-8">
          <div className="space-y-3 max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Sign in with ease
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* Floating Course Mockups Preview (Exactly matching image.png) */}
          <div className="relative w-full max-w-[480px] h-[440px] hidden sm:flex items-center justify-center">
            
            {/* 3D Shapes */}
            {/* Top-Left Lime Torus Donut */}
            <div className="absolute top-2 -left-8 w-24 h-24 pointer-events-none z-10">
              <LimeTorus />
            </div>

            {/* Bottom-Left Yellow Pyramid */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 pointer-events-none z-30">
              <YellowPyramid />
            </div>

            {/* Bottom-Right White Squiggle */}
            <div className="absolute bottom-2 right-2 w-28 h-28 pointer-events-none z-10">
              <WhiteSquiggle />
            </div>

            {/* Card 1: Back-Left Course Card (log2.png) */}
            <div className="absolute top-12 left-2 w-[240px] sm:w-[260px] bg-white rounded-3xl p-3 shadow-2xl border border-gray-100/90 z-15">
              <div className="relative rounded-2xl overflow-hidden h-32 bg-gray-900">
                <img
                  src={log2Img}
                  alt="the Power of Big Data"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                </div>
              </div>

              <div className="mt-2.5 space-y-1">
                <h4 className="font-extrabold text-gray-900 text-xs sm:text-sm leading-snug truncate">
                  the Power of Big Data
                </h4>
                <p className="text-[11px] text-blue-600 font-medium">by purepearl studio</p>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
                    <BarChart2 className="w-3 h-3 text-emerald-600" />
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center -space-x-1.5">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border border-white object-cover" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border border-white object-cover" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border border-white object-cover" alt="Student" />
                    <div className="w-5 h-5 rounded-full bg-gray-900 text-white text-[8px] font-bold flex items-center justify-center border border-white">
                      26+
                    </div>
                  </div>
                </div>

                <div className="pt-1.5">
                  <span className="text-blue-600 font-black text-xs sm:text-sm">$25</span>
                  <span className="text-[10px] text-gray-400 font-normal"> / lifetime</span>
                </div>
              </div>
            </div>

            {/* Card 2: Front-Right Course Card (log1.png) */}
            <div className="absolute top-0 left-20 sm:left-24 w-[265px] sm:w-[290px] bg-white rounded-3xl p-3.5 shadow-2xl border border-gray-100 z-20">
              <div className="relative rounded-2xl overflow-hidden h-36 bg-gray-100">
                <img
                  src={log1Img}
                  alt="Build Digital Asset"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 flex items-center gap-1">
                  <span className="bg-black/60 backdrop-blur-xs text-white text-[9px] font-medium px-1.5 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                  <span className="bg-black/60 backdrop-blur-xs text-white text-[9px] font-medium px-1.5 py-0.5 rounded-full">
                    2 hours 16 mins
                  </span>
                  <span className="bg-black/60 backdrop-blur-xs text-white text-[9px] font-medium px-1.5 py-0.5 rounded-full">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="mt-2.5 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-gray-900 text-xs sm:text-sm leading-snug">
                    Build Digital Asset...
                  </h4>
                  <div className="flex items-center gap-0.5 text-[11px] font-bold text-gray-700">
                    <span>4.5</span>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </div>
                </div>

                <p className="text-[11px] text-blue-600 font-medium">by purepearl studio</p>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-full">
                    <BarChart2 className="w-3 h-3 text-emerald-600" />
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center -space-x-1.5">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border border-white object-cover" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border border-white object-cover" alt="Student" />
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border border-white object-cover" alt="Student" />
                    <div className="w-5 h-5 rounded-full bg-gray-900 text-white text-[8px] font-bold flex items-center justify-center border border-white">
                      26+
                    </div>
                  </div>
                </div>

                <div className="pt-1.5">
                  <span className="text-blue-600 font-black text-xs sm:text-sm">$25</span>
                  <span className="text-[10px] text-gray-400 font-normal"> / lifetime</span>
                </div>
              </div>
            </div>

            {/* Card 3: Floating Lime Green Happy Students Card */}
            <div className="absolute -bottom-4 left-28 sm:left-32 bg-[#C9F31D] text-gray-950 rounded-2xl p-3 shadow-2xl border-2 border-white z-25 min-w-[200px]">
              <p className="text-xs font-black text-gray-950">Happy Students</p>
              <div className="flex items-center gap-1 text-[10px] font-bold text-gray-800 mt-0.5">
                <span>4.5 (240)</span>
                <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
              </div>
              <div className="flex items-center -space-x-1.5 mt-1.5">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border-2 border-white object-cover" alt="Student" />
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=60&q=80" className="w-5 h-5 rounded-full border-2 border-white object-cover" alt="Student" />
                <div className="w-5 h-5 rounded-full bg-gray-950 text-white text-[9px] font-black flex items-center justify-center border-2 border-white shadow-xs">
                  2K+
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Sign In Form Box */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl w-full max-w-md border border-white/80">
            
            {/* Header */}
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Sign In
              </span>
              <h3 className="text-3xl font-extrabold text-gray-950 tracking-tight">
                Welcome Back
              </h3>
            </div>

            {error && (
              <div className="mt-3 text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-100 font-medium">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 font-medium"
                />
              </div>

              {/* Right-aligned Sign In pill button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-bold py-3 px-8 rounded-full text-sm transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-70 flex items-center gap-2"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-gray-950 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="my-6 relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-3 text-xs text-gray-400 uppercase tracking-wider absolute">
                or
              </span>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook */}
              <button
                type="button"
                onClick={handleAutofillDemo}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer shadow-xs"
                title="Sign in with Facebook"
              >
                <span className="font-bold text-lg font-serif">f</span>
              </button>

              {/* Google */}
              <button
                type="button"
                onClick={handleAutofillDemo}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer shadow-xs"
                title="Sign in with Google"
              >
                <span className="font-bold text-lg font-sans">G</span>
              </button>
            </div>

            {/* Footer switch */}
            <div className="mt-8 text-center text-xs text-gray-500">
              New user?{' '}
              <button
                onClick={() => onNavigate('signup')}
                className="text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Create an account
              </button>
            </div>

          </div>
        </div>

      </div>

      <div className="relative z-20 text-center text-xs text-blue-200 pt-6">
        © 2023 ByteSpace. All rights reserved.
      </div>
    </div>
  );
};
