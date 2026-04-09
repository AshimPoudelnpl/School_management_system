import React, { useMemo } from "react";
import { useGetCategoryExamQuery } from "../redux/features/categorySlice";
import Skeleton from "../shared/Skeleton";

const formatExamDate = (value) => {
  if (!value) return "Date not shared yet";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Invalid date";
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
};

const statusColor = (type) => {
  const map = {
    terminal: { bg: "bg-blue-50", text: "text-blue-700", ring: "ring-blue-200" },
    midterm: { bg: "bg-amber-50", text: "text-amber-700", ring: "ring-amber-200" },
    final: { bg: "bg-emerald-50", text: "text-emerald-700", ring: "ring-emerald-200" },
  };
  return map[(type ?? "").toLowerCase()] ?? { bg: "bg-slate-50", text: "text-slate-600", ring: "ring-slate-200" };
};

const AcademicsExams = () => {
  const { data, isLoading, isError } = useGetCategoryExamQuery();
  const exams = useMemo(() => data?.data ?? data ?? [], [data]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-soft">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative px-4 py-16 sm:px-6 lg:px-10">
        {/* Page header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-label bg-blue-50 text-blue-700 ring-1 ring-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Examination Calendar
          </span>
          <h1 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
            Benchmarks &amp;{" "}
            <span className="text-blue-600">Terminal Exams</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            All upcoming and past terminal exams are catalogued here. Hover on any card
            to get the official date and metadata.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 max-w-5xl">
          {isLoading ? (
            <Skeleton variant="card" count={3} />
          ) : isError ? (
            <div className="text-center py-20">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
                <svg className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="mt-4 text-red-500 font-medium">Failed to load exams. Please try again.</p>
            </div>
          ) : exams.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No exams found.</p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {exams.map((exam) => {
                const colors = statusColor(exam.exam_type);
                return (
                  <article
                    key={exam.id}
                    className="card-hover glass-card flex flex-col rounded-2xl p-6 shadow-lg shadow-slate-200/60"
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-black text-slate-900 leading-snug">{exam.exam_name}</h2>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ring-1 ${colors.bg} ${colors.text} ${colors.ring}`}
                      >
                        {exam.exam_type ?? "Exam"}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      Year {exam.exam_year ?? "—"}
                    </p>

                    <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                      {exam.description ?? exam.message ?? "Terminal assessment schedule."}
                    </p>

                    {/* Date badge */}
                    <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                      <span className="text-xs text-slate-500">Scheduled on</span>
                      <span className="text-sm font-bold text-slate-900">{formatExamDate(exam.exam_date)}</span>
                    </div>

                    <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Created {formatExamDate(exam.created_at)}
                    </p>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademicsExams;
