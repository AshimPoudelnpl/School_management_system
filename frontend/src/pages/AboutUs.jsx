import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { schoolBuilding } from "../assets";
import campusTourImage from "../assets/news_events/490101178_1145653737574206_2205984292387668726_n.jpg";
import eventImage from "../assets/news_events/images.jpeg";

const iconClassName = "h-7 w-7";

const CheckCircleIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="m8.5 12.3 2.2 2.2 4.8-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SchoolIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M3 10.2 12 4l9 6.2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 10.5V19h13v-8.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M10 19v-4.5h4V19M8 12.5h.01M16 12.5h.01"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const UsersIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M3.5 18.5c.8-2.3 2.9-3.5 4.5-3.5h.1c1.6 0 3.6 1.2 4.4 3.5M13.5 18c.5-1.7 2.1-2.6 3.4-2.6h.1c1.2 0 2.7.9 3.2 2.6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BookIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M6 5.5A2.5 2.5 0 0 1 8.5 3H19v16H8.5A2.5 2.5 0 0 0 6 21V5.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M6 5.5V21M9.5 7.5H16M9.5 11H16M9.5 14.5H14.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const AwardIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="8.5" r="4.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M9.5 12.2 7 20l5-2.2L17 20l-2.5-7.8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CompassIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="m14.8 9.2-2 5.6-5.6 2 2-5.6 5.6-2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 20s-6.8-4.5-8.7-8.3C1.5 8.4 3.4 5 7.1 5c2 0 3.2 1 4 2.3C11.9 6 13.1 5 15.1 5c3.7 0 5.6 3.4 3.8 6.7C18.8 15.5 12 20 12 20Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 7.7v4.8l3 1.8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkIcon = ({ className = iconClassName }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="m12 3 1.7 4.8L18.5 9l-4.8 1.2L12 15l-1.7-4.8L5.5 9l4.8-1.2L12 3ZM18.7 15.3l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1ZM5.3 14l1 2.7L9 17.7l-2.7 1-1 2.7-1-2.7-2.7-1 2.7-1L5.3 14Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const stats = [
  {
    icon: <SchoolIcon className="h-9 w-9" />,
    value: "Since 2002",
    label: "Serving students with care and consistency",
    color: "text-secondary-color",
  },
  {
    icon: <UsersIcon className="h-9 w-9" />,
    value: "Student-Centered",
    label: "A supportive learning environment every day",
    color: "text-primary-color",
  },
  {
    icon: <BookIcon className="h-9 w-9" />,
    value: "Balanced Learning",
    label: "Academics, activities, and discipline together",
    color: "text-secondary-color",
  },
  {
    icon: <AwardIcon className="h-9 w-9" />,
    value: "Forward Looking",
    label: "Preparing learners for a changing world",
    color: "text-primary-color",
  },
];

const foundationItems = [
  {
    icon: <HeartIcon className="h-9 w-9 text-secondary-color" />,
    title: "Our Mission",
    desc: "To provide a strong academic foundation in a caring school environment where every student can learn, participate, and grow with confidence.",
    bg: "bg-white border-slate-200",
  },
  {
    icon: <CompassIcon className="h-9 w-9 text-primary-color" />,
    title: "Our Vision",
    desc: "To be a trusted school community known for quality education, disciplined learning, and meaningful preparation for the future.",
    bg: "bg-white border-slate-200",
  },
  {
    icon: <AwardIcon className="h-9 w-9 text-secondary-color" />,
    title: "Our Values",
    desc: "Respect, integrity, compassion, discipline, and continuous growth guide how we teach, support, and inspire our students.",
    bg: "bg-white border-slate-200",
  },
];

const whyChooseItems = [
  {
    icon: <ClockIcon className="h-7 w-7" />,
    title: "Structured School Routine",
    desc: "Clear daily routines help students build discipline, consistency, and healthy learning habits.",
  },
  {
    icon: <UsersIcon className="h-7 w-7" />,
    title: "Dedicated Teachers",
    desc: "Our teachers support students with guidance, encouragement, and close academic attention.",
  },
  {
    icon: <BookIcon className="h-7 w-7" />,
    title: "Strong Academic Focus",
    desc: "We balance classroom learning with thoughtful evaluation and student progress tracking.",
  },
  {
    icon: <SchoolIcon className="h-7 w-7" />,
    title: "Welcoming Campus",
    desc: "Students learn in a school environment designed to feel safe, active, and supportive.",
  },
  {
    icon: <SparkIcon className="h-7 w-7" />,
    title: "Activities & Exposure",
    desc: "Events, tours, workshops, and co-curricular programs help students grow beyond textbooks.",
  },
  {
    icon: <CheckCircleIcon className="h-7 w-7" />,
    title: "Student Care",
    desc: "We aim to help every child build confidence, values, and readiness for the next stage of life.",
  },
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,var(--color-secondary-color),#0f2f57)] py-20 text-white sm:py-24">
        <div className="absolute inset-0 opacity-20">
          <img
            src={campusTourImage}
            alt="Western School students"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-10">
          <img
            src={logo}
            alt="Western School"
            className="mx-auto mb-6 w-24 rounded-full bg-white/10 p-3 sm:w-28"
          />
          <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
            About Western School
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
            Dedicated to meaningful education, student growth, and a supportive
            school culture that prepares children for learning and life.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/academics")}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-secondary-color transition hover:bg-blue-50"
            >
              Explore Academics
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-secondary-color"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.value} className="border border-slate-200 p-6 text-center shadow-sm">
                <div className={`mb-4 flex justify-center ${stat.color}`}>
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-10">
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary-color">
              Who We Are
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              A school community built on trust, guidance, and care.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Western E.M Secondary School is committed to creating a strong
              educational environment where students can build knowledge,
              discipline, confidence, and values. With a dedicated school team
              and a welcoming campus, we work to support each learner in both
              academic and personal growth.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Since 2002, the school has continued to grow with a clear focus on
              meaningful education, student participation, and steady progress.
              We aim to provide learning experiences that help children move
              confidently toward the future.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Supportive and student-focused learning environment",
                "Balanced attention to academics and co-curricular growth",
                "Clear communication with students and families",
                "A school culture built on values, care, and discipline",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary-color" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <img
              src={schoolBuilding}
              alt="Western School campus"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </section>

        <section>
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary-color">
              Our Foundation
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {foundationItems.map((item) => (
              <div key={item.title} className={`border p-8 shadow-sm ${item.bg}`}>
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,0.8fr)]">
          <div className="border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/70">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-color">
              Student Life
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Learning that grows beyond the classroom.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              At Western School, students are encouraged to participate in
              events, group activities, workshops, and shared school
              experiences. These moments help build confidence, teamwork, and
              practical understanding alongside academic learning.
            </p>
          </div>

          <div className="overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <img
              src={eventImage}
              alt="Western School event"
              className="h-[360px] w-full object-cover"
            />
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,var(--color-secondary-color),#0f2f57)] p-10 text-white shadow-xl shadow-slate-300/60">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
              Why Us
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Why Choose Western School?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white/10 p-5">
                <div className="mt-1 flex-shrink-0 text-blue-200">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-blue-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
