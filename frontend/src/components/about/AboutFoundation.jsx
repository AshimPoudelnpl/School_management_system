import React from "react";

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9 text-primary-color" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="m14.8 9.2-2 5.6-5.6 2 2-5.6 5.6-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9 text-secondary-color" aria-hidden="true">
    <path d="M12 20s-6.8-4.5-8.7-8.3C1.5 8.4 3.4 5 7.1 5c2 0 3.2 1 4 2.3C11.9 6 13.1 5 15.1 5c3.7 0 5.6 3.4 3.8 6.7C18.8 15.5 12 20 12 20Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9 text-secondary-color" aria-hidden="true">
    <circle cx="12" cy="8.5" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9.5 12.2 7 20l5-2.2L17 20l-2.5-7.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const foundationItems = [
  { icon: <HeartIcon />, title: "Our Mission", desc: "To provide a strong academic foundation in a caring school environment where every student can learn, participate, and grow with confidence.", bg: "bg-white border-slate-200" },
  { icon: <CompassIcon />, title: "Our Vision", desc: "To be a trusted school community known for quality education, disciplined learning, and meaningful preparation for the future.", bg: "bg-white border-slate-200" },
  { icon: <AwardIcon />, title: "Our Values", desc: "Respect, integrity, compassion, discipline, and continuous growth guide how we teach, support, and inspire our students.", bg: "bg-white border-slate-200" },
];

const AboutFoundation = () => (
  <section>
    <div className="mb-10 text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary-color">Our Foundation</span>
      <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Mission, Vision & Values</h2>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      {foundationItems.map((item) => (
        <div key={item.title} className={`border p-8 shadow-sm ${item.bg}`}>
          <div className="mb-5">{item.icon}</div>
          <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutFoundation;
