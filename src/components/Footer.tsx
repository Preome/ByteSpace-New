import React, { useState } from 'react';
import { Logo } from './Logo';
import { ViewRoute } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: ViewRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-12 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-gray-100">
          
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-5">
            <Logo onClick={() => onNavigate('home')} />
            
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <div className="flex items-center bg-white rounded-full p-1.5 border border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-bold px-7 py-2.5 rounded-full text-sm transition-all duration-200 cursor-pointer shadow-xs shrink-0"
                >
                  Search
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you for subscribing to ByteSpace updates!</span>
                </div>
              )}

              <p className="text-[11px] text-gray-400 mt-3 leading-normal">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Right Columns: Nav Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {/* Column 1 */}
            <div className="space-y-3.5">
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Featured Courses
              </button>
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Featured Categories
              </button>
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Business
              </button>
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                IT
              </button>
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Design
              </button>
            </div>

            {/* Column 2 */}
            <div className="space-y-3.5">
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Development
              </button>
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Marketing
              </button>
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Photography
              </button>
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Finance
              </button>
              <button 
                onClick={() => onNavigate('search')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Sport
              </button>
            </div>

            {/* Column 3 */}
            <div className="space-y-3.5">
              <button 
                onClick={() => onNavigate('creator-profile')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Become a Creator
              </button>
              <button 
                onClick={() => onNavigate('creator-profile')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Affiliate Program
              </button>
              <button 
                onClick={() => onNavigate('home')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => onNavigate('home')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                Help
              </button>
              <button 
                onClick={() => onNavigate('home')} 
                className="block text-gray-600 hover:text-blue-600 transition-colors cursor-pointer text-left"
              >
                About
              </button>
              <button 
                onClick={() => onNavigate('not-found')} 
                className="block text-xs text-gray-400 hover:text-blue-600 transition-colors cursor-pointer text-left pt-2"
                title="Preview 404 Error Page"
              >
                • 404 Page Preview
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <button className="hover:text-gray-800 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button className="hover:text-gray-800 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button className="hover:text-gray-800 transition-colors cursor-pointer">
              Cookies Settings
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
