import React from "react";
import eventImage from "../../assets/news_events/images.jpeg";

const AboutStudentLife = () => (
  <section className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,0.8fr)]">
    <div className="border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/70">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-color">Student Life</span>
      <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Learning that grows beyond the classroom.</h2>
      <p className="mt-5 text-base leading-8 text-slate-600">
        At Western School, students are encouraged to participate in events, group activities, workshops, and shared school experiences. These moments help build confidence, teamwork, and practical understanding alongside academic learning.
      </p>
    </div>
    <div className="overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
      <img src={eventImage} alt="Western School event" className="h-[360px] w-full object-cover" />
    </div>
  </section>
);

export default AboutStudentLife;
