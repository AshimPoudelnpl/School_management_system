import React from "react";
import eventImage from "../assets/news_events/images.jpeg";
import tripImage from "../assets/news_events/490101178_1145653737574206_2205984292387668726_n.jpg";

const eventHighlights = [
  {
    title: "Academic Competitions",
    description:
      "Students take part in quiz contests, speech programs, and class-based competitions that strengthen confidence and knowledge.",
  },
  {
    title: "School Programs",
    description:
      "Regular assemblies, celebrations, and co-curricular activities help students build teamwork and school spirit.",
  },
  {
    title: "Educational Tours",
    description:
      "Planned visits and outdoor learning experiences give students practical exposure beyond the classroom.",
  },
];

const AcademicEvents = () => {
  return (
    <div className="bg-slate-50">
      <section className="bg-[linear-gradient(135deg,var(--color-secondary-color),#0f2f57)] px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
            Academics
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">Events</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
            Academic events at Western School encourage participation, teamwork,
            communication, and practical learning throughout the year.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
          <div className="grid gap-6 md:grid-cols-2">
            {eventHighlights.map((item) => (
              <article
                key={item.title}
                className="border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
            <img
              src={eventImage}
              alt="Western School event"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
          <img
            src={tripImage}
            alt="Western School educational trip"
            className="h-[320px] w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default AcademicEvents;
