import React from "react";
import marchPassImage from "../assets/news_events/march pass.jpeg";
import eventImage from "../assets/news_events/images.jpeg";

const achievementItems = [
  {
    title: "Academic Progress",
    description:
      "Students are encouraged to achieve steady academic growth through focused teaching and continuous support.",
  },
  {
    title: "Participation & Confidence",
    description:
      "School events and activities help learners build confidence, leadership, and communication skills.",
  },
  {
    title: "Discipline & Values",
    description:
      "Achievements at Western School are measured not only in marks, but also in character, responsibility, and respect.",
  },
];

const Achievements = () => {
  return (
    <div className="bg-white">
      <section className="bg-[linear-gradient(135deg,var(--color-primary-color),var(--color-secondary-color))] px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-background-color">
            Academics
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Achievements</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
            Western School celebrates student progress in academics, activities,
            discipline, and the values that shape future-ready learners.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {achievementItems.map((item) => (
            <article
              key={item.title}
              className="border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/60"
            >
              <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
            <img
              src={marchPassImage}
              alt="Western School students"
              className="h-[360px] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
            <img
              src={eventImage}
              alt="Western School achievement event"
              className="h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
