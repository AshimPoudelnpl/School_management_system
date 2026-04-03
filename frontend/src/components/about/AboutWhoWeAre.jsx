import React from "react";
import { schoolBuilding } from "../../assets";

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary-color" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="m8.5 12.3 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const checkItems = [
  "Supportive and student-focused learning environment",
  "Balanced attention to academics and co-curricular growth",
  "Clear communication with students and families",
  "A school culture built on values, care, and discipline",
];

const AboutWhoWeAre = () => (
  <section className="grid items-center gap-12 lg:grid-cols-2">
    <div>
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary-color">Who We Are</span>
      <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">A school community built on trust, guidance, and care.</h2>
      <p className="mt-6 text-base leading-8 text-slate-600">
        Western E.M Secondary School is committed to creating a strong educational environment where students can build knowledge, discipline, confidence, and values. With a dedicated school team and a welcoming campus, we work to support each learner in both academic and personal growth.
      </p>
      <p className="mt-4 text-base leading-8 text-slate-600">
        Since 2002, the school has continued to grow with a clear focus on meaningful education, student participation, and steady progress. We aim to provide learning experiences that help children move confidently toward the future.
      </p>
      <div className="mt-8 space-y-3">
        {checkItems.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircleIcon />
            <span className="text-slate-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
      <img src={schoolBuilding} alt="Western School campus" className="h-[420px] w-full object-cover" />
    </div>
  </section>
);

export default AboutWhoWeAre;
