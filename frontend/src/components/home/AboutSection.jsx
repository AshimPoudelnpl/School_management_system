import React from "react";
import { Link } from "react-router-dom";
import { schoolBuilding } from "../../assets";
import campusFieldImage from "../../assets/news_events/download.jpeg";
import studentMomentImage from "../../assets/news_events/download (1).jpeg";

const AboutSection = () => (
  <section className="relative overflow-hidden bg-gradient-soft px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
    {/* Background blobs */}
    <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-secondary-color/10 blur-3xl" />
    <div className="pointer-events-none absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-primary-color/10 blur-3xl" />

    <div className="relative mx-auto grid max-w-screen-xl items-center gap-12 lg:grid-cols-2">
      {/* Image mosaic */}
      <div className="grid grid-cols-[1.3fr_0.7fr] gap-3 lg:order-none order-last">
        <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-200/80">
          <img
            src={schoolBuilding}
            alt="Western School building"
            className="h-full min-h-[340px] w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="grid gap-3">
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-slate-200/60">
            <img
              src={campusFieldImage}
              alt="Western School campus grounds"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-slate-200/60">
            <img
              src={studentMomentImage}
              alt="Western School students"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="max-w-xl">
        {/* Label */}
        <span className="section-label bg-secondary-color/10 text-secondary-color ring-1 ring-secondary-color/30">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary-color" />
          Since 2002
        </span>

        <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
          A vibrant school environment shaped around{" "}
          <span className="text-secondary-color">learning and student life.</span>
        </h2>

        <p className="mt-5 text-base leading-7 text-slate-600">
          Western School brings together a welcoming campus, committed teachers,
          and a strong academic routine. The school building and surrounding
          spaces reflect a place where students can learn, participate, and grow
          with confidence every day.
        </p>

        {/* Stats row */}
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { value: "20+", label: "Years of Excellence" },
            { value: "1200+", label: "Students Enrolled" },
            { value: "80+", label: "Expert Teachers" },
          ].map(({ value, label }) => (
            <div key={label} className="glass-card rounded-xl px-5 py-3">
              <p className="text-2xl font-black text-secondary-color">{value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary-color px-6 py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-secondary-color/30 transition-all hover:shadow-secondary-color/50 hover:scale-[1.03] hover:-translate-y-0.5"
          >
            Learn More About Us
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
