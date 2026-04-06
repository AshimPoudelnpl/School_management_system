import React from "react";
import principalImage from "../../assets/principal image.jpg";

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="M12 3l2.47 5 5.53.8-4 3.9.94 5.5L12 15.9 7.06 18.2 8 12.7 4 8.8 9.53 8 12 3Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChairmanMessageSection = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
          <div className="relative mx-auto w-full max-w-[500px] lg:self-end">
            <div className="absolute -left-6 -top-6 h-44 w-44 rounded-full bg-sky-200/70 blur-3xl"></div>
            <div className="absolute -bottom-10 right-2 h-40 w-40 rounded-full bg-indigo-200/70 blur-3xl"></div>

            <div className="relative overflow-hidden border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70">
              <img
                src={principalImage}
                alt="Western School principal"
                className="h-[360px] w-full object-cover object-center sm:h-[400px] lg:h-[450px]"
              />

              <div className="absolute bottom-6 right-6 border border-slate-200 bg-white/95 px-5 py-4 shadow-lg shadow-slate-200/60 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-color text-white">
                    <AwardIcon />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">
                      20+ Years
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Educational Journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <span className="inline-flex border border-secondary-color/20 bg-secondary-color/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-secondary-color">
              Message From Principal
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Principal&apos;s Message
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p className="text-base text-slate-700 sm:text-lg">
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
              <p>
                Our continued progress is possible because of the trust of
                parents, the dedication of teachers, and the sincere effort of
                our students. Together, we are building a school culture that
                values excellence, respect, and meaningful participation.
              </p>
              <p className="font-medium italic text-slate-800">
                &quot;We remain devoted to guiding every student toward a
                brighter, stronger, and more capable future.&quot;
              </p>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xl font-bold text-slate-900">Kuber Basnet</p>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">
                Principal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessageSection;
