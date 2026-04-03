import React from "react";

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7.7v4.8l3 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M3.5 18.5c.8-2.3 2.9-3.5 4.5-3.5h.1c1.6 0 3.6 1.2 4.4 3.5M13.5 18c.5-1.7 2.1-2.6 3.4-2.6h.1c1.2 0 2.7.9 3.2 2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
    <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H19v16H8.5A2.5 2.5 0 0 0 6 21V5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M6 5.5V21M9.5 7.5H16M9.5 11H16M9.5 14.5H14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
    <path d="M3 10.2 12 4l9 6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.5 10.5V19h13v-8.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M10 19v-4.5h4V19M8 12.5h.01M16 12.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const SparkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
    <path d="m12 3 1.7 4.8L18.5 9l-4.8 1.2L12 15l-1.7-4.8L5.5 9l4.8-1.2L12 3ZM18.7 15.3l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1ZM5.3 14l1 2.7L9 17.7l-2.7 1-1 2.7-1-2.7-2.7-1 2.7-1L5.3 14Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="m8.5 12.3 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const items = [
  { icon: <ClockIcon />, title: "Structured School Routine", desc: "Clear daily routines help students build discipline, consistency, and healthy learning habits." },
  { icon: <UsersIcon />, title: "Dedicated Teachers", desc: "Our teachers support students with guidance, encouragement, and close academic attention." },
  { icon: <BookIcon />, title: "Strong Academic Focus", desc: "We balance classroom learning with thoughtful evaluation and student progress tracking." },
  { icon: <SchoolIcon />, title: "Welcoming Campus", desc: "Students learn in a school environment designed to feel safe, active, and supportive." },
  { icon: <SparkIcon />, title: "Activities & Exposure", desc: "Events, tours, workshops, and co-curricular programs help students grow beyond textbooks." },
  { icon: <CheckCircleIcon />, title: "Student Care", desc: "We aim to help every child build confidence, values, and readiness for the next stage of life." },
];

const AboutWhyChoose = () => (
  <section className="bg-[linear-gradient(135deg,var(--color-secondary-color),#0f2f57)] p-10 text-white shadow-xl shadow-slate-300/60">
    <div className="mb-10 text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">Why Us</span>
      <h2 className="mt-3 text-3xl font-black sm:text-4xl">Why Choose Western School?</h2>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item.title} className="flex items-start gap-4 bg-white/10 p-5">
          <div className="mt-1 flex-shrink-0 text-blue-200">{item.icon}</div>
          <div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-blue-100">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutWhyChoose;
