import React from "react";
import studentLearningArt from "../../assets/svg/Whyrai-2020021203361769.png";
import digitalLearningArt from "../../assets/svg/Whyrai-20200212033651236.png";
import progressTrackingArt from "../../assets/svg/Whyrai-2020021203373537.png";
import academicFoundationArt from "../../assets/svg/Whyrai-20220120045628872.jpeg";

const items = [
  {
    title: "Student-Centered Learning",
    description:
      "Daily teaching encourages focus, participation, and guided activity so students stay involved in the learning process.",
    image: studentLearningArt,
    imageAlt: "Student-centered learning illustration",
  },
  {
    title: "Technology-Friendly Classrooms",
    description:
      "Digital tools and computer-based learning help students build confidence with modern classroom skills from an early stage.",
    image: digitalLearningArt,
    imageAlt: "Technology-friendly classroom illustration",
  },
  {
    title: "Regular Progress Tracking",
    description:
      "Consistent assessment and teacher feedback make it easier to notice growth, support improvement, and guide each learner well.",
    image: progressTrackingArt,
    imageAlt: "Regular progress tracking illustration",
  },
  {
    title: "Strong Academic Foundation",
    description:
      "Western School blends discipline, care, and academic guidance to help students grow with confidence and purpose.",
    image: academicFoundationArt,
    imageAlt: "Strong academic foundation illustration",
  },
];

const WhyWesternSection = () => (
  <section className="relative overflow-hidden bg-gradient-cool px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
    {/* Background decoration */}
    <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-secondary-color/10 blur-3xl" />
    <div className="pointer-events-none absolute right-0 top-20 hidden h-72 w-72 rounded-full bg-primary-color/10 blur-3xl lg:block" />

    <div className="relative mx-auto max-w-screen-xl">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-label bg-primary-color/10 text-primary-color ring-1 ring-primary-color/30">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-color" />
          Why Western School
        </span>
        <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
          A school community built on{" "}
          <span className="text-secondary-color">care, participation & progress</span>
        </h2>
        <p className="mt-5 text-base leading-7 text-slate-600">
          Western School focuses on strong academic progress while blending
          tradition with a forward-looking approach to education.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map(({ title, description, image, imageAlt }) => (
          <article
            key={title}
            className="card-hover glass-card group relative overflow-hidden rounded-3xl p-6 text-center shadow-lg shadow-secondary-color/10 sm:p-7"
          >
            {/* Gradient accent top bar */}
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-secondary-color to-primary-color" />

            <div className="mb-6 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-4 shadow-inner shadow-primary-color/5">
              <div className="rounded-[1.25rem] bg-gradient-to-br from-primary-color/10 via-white to-secondary-color/10 p-3">
                <img
                  src={image}
                  alt={imageAlt}
                  className="mx-auto h-36 w-full max-w-[220px] object-contain sm:h-40"
                />
              </div>
            </div>

            <h3 className="text-lg font-bold leading-snug text-slate-900">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyWesternSection;
