import React from "react";
import principalImage from "../../assets/principal image.jpg";

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="M12 3l2.47 5 5.53.8-4 3.9.94 5.5L12 15.9 7.06 18.2 8 12.7 4 8.8 9.53 8 12 3Z"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const QuoteIcon = () => (
  <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
  </svg>
);

const ChairmanMessageSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-soft px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-secondary-color/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-primary-color/20 blur-3xl" />

      <div className="relative mx-auto max-w-screen-xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ── Image side ── */}
          <div className="relative mx-auto w-full max-w-[460px]">
            {/* Large blob decorations */}
            <div className="absolute -left-8 -top-8 h-52 w-52 rounded-full bg-secondary-color/20 blur-3xl" />
            <div className="absolute -bottom-8 right-0 h-40 w-40 rounded-full bg-primary-color/20 blur-3xl" />

            {/* Photo card */}
            <div className="relative overflow-hidden rounded-3xl glass-card shadow-2xl shadow-slate-200/80 p-2">
              <img
                src={principalImage}
                alt="Western School principal"
                className="h-[360px] w-full rounded-2xl object-cover object-center sm:h-[420px]"
              />

              {/* Badge overlay */}
              <div className="absolute bottom-6 right-6 flex items-center gap-3 glass-card rounded-2xl px-4 py-3 shadow-lg">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-color to-primary-color text-white shadow-lg shadow-secondary-color/30">
                  <AwardIcon />
                </div>
                <div>
                  <p className="text-base font-black text-slate-900">20+ Years</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Educational Journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Text side ── */}
          <div className="max-w-xl">
            {/* Label */}
            <span className="section-label bg-secondary-color/10 text-secondary-color ring-1 ring-secondary-color/30">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary-color" />
              Message From Principal
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Principal&apos;s <span className="text-secondary-color">Message</span>
            </h2>

            {/* Decorative quote */}
            <div className="mt-6 text-secondary-color/20">
              <QuoteIcon />
            </div>

            <div className="mt-2 space-y-4 text-[15px] leading-7 text-slate-600">
              <p className="text-base font-medium text-slate-700">
                Welcome to Western English Medium Secondary School, a place
                where learning is guided with discipline, care, and a strong
                sense of responsibility toward every child&apos;s future.
              </p>
              <p>
                Since our establishment, we have remained committed to creating
                an environment where students can grow academically, morally,
                and socially. We believe education should not only build
                knowledge, but also shape confidence, character, and compassion.
              </p>
              <p className="italic font-semibold text-slate-800 border-l-4 border-secondary-color pl-4">
                &ldquo;We remain devoted to guiding every student toward a
                brighter, stronger, and more capable future.&rdquo;
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 rounded-2xl glass-card p-5">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-secondary-color to-primary-color flex items-center justify-center text-white text-xl font-black shadow-lg shadow-secondary-color/30">
                K
              </div>
              <div>
                <p className="text-lg font-black text-slate-900">Kuber Basnet</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-0.5">Principal, Western School</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessageSection;
