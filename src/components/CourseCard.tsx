import React from 'react';
import { Course } from '../types';
import { Star, BarChart2 } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick?: (course: Course) => void;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onClick, className = '' }) => {
  return (
    <div
      onClick={() => onClick && onClick(course)}
      className={`bg-white rounded-[26px] p-3.5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${className}`}
    >
      <div>
        {/* Card Image with overlay badges */}
        <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] w-full bg-slate-100">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Bottom stats inside image */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 text-[11px] font-semibold text-gray-800">
            <span className="bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-xs">
              {course.lessonsCount} Lessons
            </span>
            <span className="bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-xs">
              {course.duration}
            </span>
            <span className="bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-xs">
              {course.commentsCount} Comments
            </span>
          </div>
        </div>

        {/* Title and Rating */}
        <div className="mt-4 px-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[17px] font-bold text-gray-950 group-hover:text-blue-600 transition-colors line-clamp-1">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 text-sm font-semibold text-gray-700 shrink-0">
              <span>{course.rating.toFixed(1)}</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>

          <p className="text-xs text-gray-500 font-medium mt-0.5">
            by {course.creator.name.toLowerCase()}
          </p>

          {/* Level and Avatar stack */}
          <div className="flex items-center justify-between mt-3.5">
            {/* Level Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100/90 text-gray-700 rounded-full text-xs font-medium">
              <BarChart2 className="w-3 h-3 text-emerald-600" />
              <span>{course.level}</span>
            </div>

            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2">
              {course.avatarStack.slice(0, 3).map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="Student"
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-6 h-6 rounded-full bg-[#C9F31D] text-gray-950 text-[10px] font-bold flex items-center justify-center border-2 border-white">
                {course.moreStudentsCount}+
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price footer */}
      <div className="mt-4 pt-2.5 px-1 border-t border-slate-100 flex items-baseline gap-1">
        <span className="text-xl font-extrabold text-blue-600">
          ${course.price}
        </span>
        <span className="text-xs text-gray-500 font-medium">
          /{course.priceType}
        </span>
      </div>
    </div>
  );
};
