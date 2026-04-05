import React from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "./VacancyIcons";
import {
  formatVacancyDate,
  getVacancyStatusClasses,
  getVacancyStatusLabel,
  getVacancyStatusValue,
  isVacancyExpired,
  isVacancyOpen,
} from "./vacancyUtils";

const VacancyCard = ({ job, categoryName }) => {
  const isExpired = isVacancyExpired(job.application_deadline);
  const isOpen = isVacancyOpen(job);
  const statusValue = getVacancyStatusValue(job);

  return (
    <article className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:shadow-xl">
      <div className="p-8">
        <div className="mb-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center bg-secondary-color/10 text-secondary-color">
                <BriefcaseIcon />
              </div>
              <div>
                <h3 className="text-2xl font-black capitalize text-slate-900">
                  {job.title}
                </h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className={`inline-flex px-4 py-1 text-sm font-semibold ${getVacancyStatusClasses(job)}`}>
                    {getVacancyStatusLabel(job)}
                  </span>
                  {categoryName && (
                    <span className="inline-flex rounded-full bg-primary-color/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-color">
                      {categoryName}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <span className="inline-flex border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-600">
              Full Time
            </span>
          </div>

          <div className="mt-5 grid gap-4 text-sm text-slate-600 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex items-center gap-2">
              <span className="text-secondary-color">
                <CalendarIcon />
              </span>
              <span>
                <strong>Posted:</strong> {formatVacancyDate(job.posted_date)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={!isOpen && isExpired ? "text-red-500" : "text-primary-color"}>
                <ClockIcon />
              </span>
              <span>
                <strong>Deadline:</strong> {formatVacancyDate(job.application_deadline)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">
                <MapPinIcon />
              </span>
              <span>
                <strong>Location:</strong> Kohalpur, Banke
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Position Description
            </h4>
            <p className="mt-3 text-base leading-8 text-slate-700">
              {job.description}
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 p-5">
            <h4 className="text-lg font-bold text-slate-900">
              Application Status
            </h4>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    isOpen ? "bg-emerald-500" : "bg-red-500"
                  }`}
                ></span>
                <span className="font-medium">
                  Status: {statusValue ? statusValue.charAt(0).toUpperCase() + statusValue.slice(1) : "Unknown"}
                </span>
              </div>
              <div className="text-slate-600">
                <p>Posted: {formatVacancyDate(job.posted_date)}</p>
                <p>Deadline: {formatVacancyDate(job.application_deadline)}</p>
                <p className="mt-2 text-xs">
                  {isOpen
                    ? "Applications are currently being accepted"
                    : "This position is currently closed"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VacancyCard;
