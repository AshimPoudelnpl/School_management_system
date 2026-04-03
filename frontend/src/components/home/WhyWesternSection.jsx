import React from "react";
import playgroundIcon from "../../assets/why-western-playground.svg";
import labIcon from "../../assets/why-western-lab.svg";
import evaluationIcon from "../../assets/why-western-evaluation.svg";

const items = [
  {
    title: "Spacious Playground & well-ventilated classrooms",
    description:
      "Students learn in a comfortable environment with open space for movement, activities, and focused classroom learning.",
    icon: playgroundIcon,
  },
  {
    title: "Excellent well-equipped Labs",
    description:
      "Well-equipped labs support practical learning and help students understand concepts through hands-on experience.",
    icon: labIcon,
  },
  {
    title: "Continuous & Comprehensive Evaluation (C.C.E)",
    description:
      "Regular evaluation and guidance help teachers monitor progress and support every student more effectively.",
    icon: evaluationIcon,
  },
];

const WhyWesternSection = () => (
  <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
    <div className="mx-auto max-w-screen-xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">
          Why Western School
        </p>
        <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
          A school community built on care, participation, and progress.
        </h2>
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          Western School focuses on strong academic progress while blending
          tradition with a forward-looking approach to education. We aim to meet
          the needs of children as they grow into confident, capable, and
          responsible young adults in an increasingly complex world.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {items.map(({ title, description, icon }) => (
          <article
            key={title}
            className="border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mx-auto flex h-24 w-24 items-center justify-center border border-slate-200 bg-slate-50">
              <img src={icon} alt="" className="h-16 w-16 object-contain" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyWesternSection;
