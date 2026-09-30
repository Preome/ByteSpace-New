import React from 'react';
import { Logo } from './Logo';
import { ViewRoute, User } from '../types';
import { ShoppingBag, ChevronDown, UserCheck, LogOut, Search, Compass, User as UserIcon } from 'lucide-react';

interface NavbarProps {
  currentRoute: ViewRoute;
  onNavigate: (route: ViewRoute) => void;
  user: User | null;
  onLogout: () => void;
  cartCount: number;
  onOpenCart: () => void;
  isLightBg?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  user,
  onLogout,
  cartCount,
  onOpenCart,
  isLightBg = false
}) => {
  const [userDropdownOpen, setUserDropdownOpen] = React.useState(false);

  const textStyle = isLightBg ? 'text-gray-800 hover:text-blue-600' : 'text-white/90 hover:text-white';
  const activeStyle = isLightBg ? 'text-blue-600 font-bold' : 'text-[#C9F31D] font-bold';

  return (
    <header className={`w-full z-40 transition-colors ${isLightBg ? 'bg-white/95 backdrop-blur-md border-b border-gray-100' : 'bg-grid-blue border-b border-white/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: ByteSpace Logo */}
        <Logo 
          light={!isLightBg} 
          onClick={() => onNavigate('home')} 
        />

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-base font-semibold">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors cursor-pointer ${currentRoute === 'home' ? activeStyle : textStyle}`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('search')}
            className={`transition-colors cursor-pointer ${currentRoute === 'search' ? activeStyle : textStyle}`}
          >
            Courses
          </button>
          <button
            onClick={() => onNavigate('creator-profile')}
            className={`transition-colors cursor-pointer ${currentRoute === 'creator-profile' ? activeStyle : textStyle}`}
          >
            Creators
          </button>
        </nav>

        {/* Right: User / Auth & Cart */}
        <div className="flex items-center gap-5">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-[#C9F31D]"
                />
                <span className={`text-sm font-semibold hidden sm:inline ${!isLightBg ? 'text-white' : 'text-gray-900'}`}>
                  {user.name.split(' ')[0]}
                </span>
                <ChevronDown className={`w-4 h-4 ${!isLightBg ? 'text-white/80' : 'text-gray-600'}`} />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="text-sm font-bold text-gray-900 truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onNavigate('search');
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Compass className="w-4 h-4 text-blue-600" />
                    Browse Courses
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onNavigate('creator-profile');
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <UserIcon className="w-4 h-4 text-purple-600" />
                    Creator Hub
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onLogout();
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4 text-red-500" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4 text-sm font-bold">
              <button
                onClick={() => onNavigate('login')}
                className={`transition-colors cursor-pointer ${textStyle}`}
              >
                Sign In
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className={`transition-colors cursor-pointer ${textStyle}`}
              >
                Join Us
              </button>
            </div>
          )}

          {/* Cart / Bag Icon */}
          <button
            onClick={onOpenCart}
            aria-label="View Cart"
            className={`relative p-2 rounded-xl transition-all cursor-pointer ${
              isLightBg 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <ShoppingBag className="w-6 h-6 stroke-[1.8]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#C9F31D] text-gray-950 font-black text-xs rounded-full flex items-center justify-center border-2 border-[#0B50FF] shadow-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
