import React from "react";
import { Link } from "react-router-dom";
import { schoolBuilding } from "../assets";
import { academicsDropdownItems } from "../router/publicNavConfig";

const academicsDescriptions = {
  "/academics/events":
    "Explore school programs, competitions, educational tours, and student events.",
  "/academics/achievements":
    "See how Western School recognizes progress, participation, and student growth.",
  "/academics/question-banks":
    "Support revision and preparation with structured question-bank resources.",
};

const Academics = () => {
  return (
    <div className="bg-slate-50">
      <section className="bg-[linear-gradient(135deg,var(--color-secondary-color),#0f2f57)] px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
            Western School
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Academics</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
            Discover the academic areas of Western School, from school events
            and achievements to question-bank support for students.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
          <div className="grid gap-6">
            {academicsDropdownItems.map((item) => (
              <article
                key={item.path}
                className="border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60"
              >
                <h2 className="text-2xl font-bold text-slate-900">{item.label}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {academicsDescriptions[item.path]}
                </p>
                <Link
                  to={item.path}
                  className="mt-6 inline-flex rounded-full bg-secondary-color px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-primary-color"
                >
                  Open Section
                </Link>
              </article>
            ))}
          </div>

          <div className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
            <img
              src={schoolBuilding}
              alt="Western School campus"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
