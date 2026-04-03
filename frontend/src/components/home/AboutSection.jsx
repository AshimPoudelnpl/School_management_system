import React from "react";
import { Link } from "react-router-dom";
import { schoolBuilding } from "../../assets";
import campusFieldImage from "../../assets/news_events/download.jpeg";
import studentMomentImage from "../../assets/news_events/download (1).jpeg";

const AboutSection = () => (
  <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
    <div className="mx-auto grid max-w-screen-xl items-center gap-8 lg:grid-cols-[minmax(340px,0.95fr)_minmax(0,1.05fr)]">
      <div className="grid gap-4 sm:grid-cols-[1.25fr_0.75fr]">
        <div className="overflow-hidden border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/60">
          <img
            src={schoolBuilding}
            alt="Western School building"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/60">
            <img
              src={campusFieldImage}
              alt="Western School campus grounds"
              className="h-52 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/60">
            <img
              src={studentMomentImage}
              alt="Western School students"
              className="h-52 w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl inline-block border-b-4 bg-white px-4 py-2 shadow-lg shadow-slate-200/60">
        <div className="inline-block bg-white px-4 py-2 border-b-4 border-secondary-color">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary-color">
            since 2002
          </p>
        </div>
        <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
          A vibrant school environment shaped around learning and student life.
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          Western School brings together a welcoming campus, committed teachers,
          and a strong academic routine. The school building and surrounding
          spaces reflect a place where students can learn, participate, and grow
          with confidence every day.
        </p>
        <div className="mt-8">
          <Link
            to="/about"
            className="inline-flex rounded-full bg-secondary-color px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase transition hover:bg-primary-color"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
