import React, { useMemo, useState } from "react";

const noticeItems = [
  {
    id: 1,
    title: "Admission open for new students at Western School",
    createdAt: "2026-03-28",
    category: "Admissions",
    description:
      "Applications are now open for new students. Families can contact the school office for admission details, class availability, and the enrollment process.",
    ctaLabel: "Contact School",
    ctaLink: "/contact",
  },
  {
    id: 2,
    title: "Orientation and academic preparation session for new families",
    createdAt: "2026-03-22",
    category: "Academics",
    description:
      "An orientation session will be held to introduce school routines, academic support, and expectations for the upcoming session.",
    ctaLabel: "Explore Academics",
    ctaLink: "/academics",
  },
  {
    id: 3,
    title: "Parents and teachers meeting scheduled for this month",
    createdAt: "2026-03-16",
    category: "School Notice",
    description:
      "Parents are encouraged to attend the upcoming meeting to review student progress, discuss learning habits, and strengthen school-home coordination.",
    ctaLabel: "Read About Us",
    ctaLink: "/about",
  },
  {
    id: 4,
    title:
      "Inter-school activities and student participation program announced",
    createdAt: "2026-03-10",
    category: "Events",
    description:
      "Students will take part in activities that promote teamwork, confidence, discipline, and active school participation throughout the term.",
    ctaLabel: "View Events",
    ctaLink: "/academics/events",
  },
  {
    id: 5,
    title: "Question bank support available for exam preparation",
    createdAt: "2026-03-04",
    category: "Learning Support",
    description:
      "Question banks and guided preparation resources are available to help students revise more effectively and prepare with confidence.",
    ctaLabel: "Open Question Banks",
    ctaLink: "/academics/question-banks",
  },
  {
    id: 6,
    title: "Student achievement recognition and appreciation notice",
    createdAt: "2026-02-26",
    category: "Achievements",
    description:
      "Western School continues to recognize student effort, discipline, and academic progress through school-level appreciation and participation programs.",
    ctaLabel: "See Achievements",
    ctaLink: "/academics/achievements",
  },
];

const CaretRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="m9 6 7 6-7 6V6Z" />
  </svg>
);

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const Notice = () => {
  const sortedNotices = useMemo(
    () =>
      [...noticeItems].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      ),
    [],
  );

  const [selectedNotice, setSelectedNotice] = useState(
    sortedNotices[0] ?? null,
  );

  return (
    <div className="w-full bg-slate-50">
      <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mt-8 border border-slate-200 bg-white px-4 py-6 shadow-lg shadow-slate-200/60 sm:px-6 sm:py-8">
            <div className="mb-6 flex flex-col gap-2 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary-color">
                  Latest Updates
                </p>
                <h3 className="mt-3 text-2xl font-black text-slate-900">
                  School notice list
                </h3>
              </div>
              <p className="text-sm text-slate-500">
                {sortedNotices.length}{" "}
                {sortedNotices.length === 1 ? "notice" : "notices"}
              </p>
            </div>

            <div className="flex flex-col divide-y divide-slate-200">
              {sortedNotices.length > 0 ? (
                sortedNotices.map((notice) => {
                  const isActive = selectedNotice?.id === notice.id;

                  return (
                    <button
                      key={notice.id}
                      type="button"
                      onClick={() => setSelectedNotice(notice)}
                      className={`flex w-full flex-col items-start justify-between gap-3 px-3 py-4 text-left transition sm:flex-row sm:items-center ${
                        isActive ? "bg-slate-50" : "hover:bg-slate-50"
                      }`}
                    >
                      <p
                        className={`flex items-start text-sm sm:text-base ${
                          isActive ? "text-secondary-color" : "text-slate-900"
                        }`}
                      >
                        <span
                          className={`mr-2 mt-1 flex-shrink-0 ${
                            isActive ? "text-secondary-color" : "text-slate-700"
                          }`}
                        >
                          <CaretRightIcon />
                        </span>
                        <span>{notice.title}</span>
                      </p>

                      <span className="ml-6 text-sm text-slate-500 sm:ml-0">
                        {formatDate(notice.createdAt)}
                      </span>
                    </button>
                  );
                })
              ) : (
                <p className="py-8 text-slate-500">No notices found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notice;
