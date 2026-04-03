import React from "react";

const iconClass = "h-9 w-9";

const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path d="M3 10.2 12 4l9 6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 10.5V19h13v-8.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M10 19v-4.5h4V19M8 12.5h.01M16 12.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M3.5 18.5c.8-2.3 2.9-3.5 4.5-3.5h.1c1.6 0 3.6 1.2 4.4 3.5M13.5 18c.5-1.7 2.1-2.6 3.4-2.6h.1c1.2 0 2.7.9 3.2 2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H19v16H8.5A2.5 2.5 0 0 0 6 21V5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M6 5.5V21M9.5 7.5H16M9.5 11H16M9.5 14.5H14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="12" cy="8.5" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9.5 12.2 7 20l5-2.2L17 20l-2.5-7.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const stats = [
  { icon: <SchoolIcon />, value: "Since 2002", label: "Serving students with care and consistency", color: "text-secondary-color" },
  { icon: <UsersIcon />, value: "Student-Centered", label: "A supportive learning environment every day", color: "text-primary-color" },
  { icon: <BookIcon />, value: "Balanced Learning", label: "Academics, activities, and discipline together", color: "text-secondary-color" },
  { icon: <AwardIcon />, value: "Forward Looking", label: "Preparing learners for a changing world", color: "text-primary-color" },
];

const AboutStats = () => (
  <section className="bg-white py-12 shadow-sm">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.value} className="border border-slate-200 p-6 text-center shadow-sm">
            <div className={`mb-4 flex justify-center ${stat.color}`}>{stat.icon}</div>
            <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutStats;
