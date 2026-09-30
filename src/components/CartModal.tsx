import React from 'react';
import { Course } from '../types';
import { X, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Course[];
  onRemoveItem: (courseId: string) => void;
  onCheckout: () => void;
  onBrowseCourses: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onCheckout,
  onBrowseCourses
}) => {
  const [checkedOut, setCheckedOut] = React.useState(false);

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      onCheckout();
      setCheckedOut(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-gray-900">Your Learning Cart</h3>
            <span className="bg-blue-50 text-blue-700 text-xs px-2.5 py-0.5 rounded-full font-bold">
              {cartItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {checkedOut ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-2xl font-bold text-gray-900">Enrollment Confirmed!</h4>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Your courses have been unlocked in your dashboard. Happy learning!
            </p>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-600">
              <ArrowRight className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-gray-900">Your cart is empty</h4>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              Explore our hundreds of courses and start expanding your skills today.
            </p>
            <button
              onClick={() => {
                onClose();
                onBrowseCourses();
              }}
              className="bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-bold px-6 py-2.5 rounded-full text-sm cursor-pointer shadow-xs transition-all"
            >
              Explore Courses
            </button>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <div className="max-h-72 overflow-y-auto space-y-3 pr-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-12 object-cover rounded-xl"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-gray-900 truncate">
                      {item.title}
                    </h5>
                    <p className="text-xs text-gray-500">
                      {item.duration} • {item.level}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-base font-extrabold text-blue-600">
                      ${item.price}
                    </p>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer mt-1"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-3">
              <div className="flex items-center justify-between text-base">
                <span className="font-semibold text-gray-600">Total</span>
                <span className="text-2xl font-black text-gray-950">
                  ${total}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 px-4 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 py-3 px-4 rounded-full bg-[#C9F31D] hover:bg-[#b8e210] text-gray-950 font-bold text-sm shadow-md transition-all cursor-pointer text-center"
                >
                  Checkout (${total})
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
