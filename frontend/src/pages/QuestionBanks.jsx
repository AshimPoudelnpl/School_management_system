import React from "react";
import schoolBuilding from "../assets/school_image.jpeg";

const questionBankGroups = [
  {
    title: "Primary Level",
    description:
      "Practice materials and subject-based question sets for foundational learning and revision.",
  },
  {
    title: "Lower Secondary",
    description:
      "Structured question banks to support class preparation, homework practice, and test readiness.",
  },
  {
    title: "Secondary Level",
    description:
      "Focused preparation resources for subject revision, exam confidence, and stronger academic performance.",
  },
];

const QuestionBanks = () => {
  return (
    <div className="bg-slate-50">
      <section className="bg-[linear-gradient(135deg,#0f2f57,var(--color-secondary-color))] px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
            Academics
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">
            Question Banks
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base">
            Access organized question-bank support for revision, practice, and
            stronger preparation across different levels of study.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
          <div className="grid gap-6">
            {questionBankGroups.map((item) => (
              <article
                key={item.title}
                className="border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/60"
              >
                <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
            <img
              src={schoolBuilding}
              alt="Western School building"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionBanks;
