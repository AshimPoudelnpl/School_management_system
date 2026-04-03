import React, { useMemo } from "react";
import { useGetCategoryExamQuery } from "../redux/features/categorySlice";

const formatExamDate = (value) => {
  if (!value) return "Date not shared yet";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Invalid date";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const AcademicsExams = () => {
  const { data, isLoading, isError } = useGetCategoryExamQuery();
  const exams = useMemo(() => data?.data ?? data ?? [], [data]);

  return (
    <div className="bg-slate-50 min-h-screen px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">
          Examination calendar
        </p>
        <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
          Benchmarks & terminal exams
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          All upcoming and past terminal exams are catalogued here. Tap or hover on any card
          to get the official date and metadata.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl">
        {isLoading ? (
          <p className="text-center text-sm text-slate-500">Loading exams…</p>
        ) : isError ? (
          <p className="text-center text-sm text-red-500">Failed to load exams.</p>
        ) : (
          <div className="flex flex-wrap gap-4 overflow-x-auto pb-2">
            {exams.map((exam) => (
              <article
                key={exam.id}
                className="flex min-w-[280px] flex-1 flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:border-secondary-color"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black text-slate-900">
                    {exam.exam_name}
                  </h2>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-color">
                    {exam.exam_type ?? "Exam"}
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  Year {exam.exam_year ?? "—"}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{exam.description ?? exam.message ?? "Terminal assessment schedule."}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <span>Scheduled on</span>
                  <span className="font-semibold text-slate-900">{formatExamDate(exam.exam_date)}</span>
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-400">
                  Created {formatExamDate(exam.created_at)}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AcademicsExams;
