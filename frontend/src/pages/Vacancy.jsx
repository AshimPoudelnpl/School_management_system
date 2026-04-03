import React, { useMemo, useState } from "react";
import { useGetVacancyQuery, useGetVacancyCategoriesQuery } from "../redux/features/contentSlice";

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path
      d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path
      d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path
      d="M12 20s6-5.7 6-10a6 6 0 1 0-12 0c0 4.3 6 10 6 10Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const FileTextIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M8 3h5l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M13 3v4h4M9 12h6M9 16h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M16 19a4 4 0 0 0-8 0m12 0a8 8 0 0 0-16 0m12-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M4 21V7a1 1 0 0 1 1-1h7v15M13 21V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v17M8 10h2m-2 4h2m-2 4h2m7-8h2m-2 4h2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-11 3h16v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8Zm0 0V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M10 13h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const formatDate = (dateString) => {
  if (!dateString) return "Not specified";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Vacancy = () => {
  const { data: vacancyData, isLoading: vacancyLoading } = useGetVacancyQuery();
  const { data: categoriesData, isLoading: categoriesLoading } = useGetVacancyCategoriesQuery();
  
  const [searchQuery, setSearchQuery] = useState("");

  const vacancies = vacancyData?.data ?? [];
  const categories = categoriesData?.data ?? [];

  const filteredVacancies = useMemo(() => {
    return vacancies.filter((job) => {
      const isOpen = job.status.toLowerCase() === "open";
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query);

      return isOpen && matchesSearch;
    });
  }, [vacancies, searchQuery]);

  if (vacancyLoading || categoriesLoading) {
    return (
      <div className="w-full bg-slate-50">
        <section className="px-4 py-12 sm:px-6 lg:px-10">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50">
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-color">
              Career Opportunities
            </p>
            <h1 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              Join Our Team at Western School
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore open positions and become part of our dedicated educational community.
            </p>
          </div>

          {/* Search */}
          <div className="mt-10 mx-auto max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search positions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-secondary-color focus:border-transparent"
              />
            </div>
          </div>

          {filteredVacancies.length > 0 ? (
            <>
              <div className="mt-10 space-y-8">
                {filteredVacancies.map((job) => {
                  const category = categories.find(cat => cat.category_id === job.category_id);
                  const isExpired = new Date(job.application_deadline) < new Date();

                  return (
                    <article
                      key={job.id}
                      className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:shadow-xl"
                    >
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
                                  <span className={`inline-flex px-4 py-1 text-sm font-semibold ${
                                    isExpired 
                                      ? "bg-red-100 text-red-800" 
                                      : "bg-emerald-100 text-emerald-800"
                                  }`}>
                                    {isExpired ? "Application Closed" : "Open Position"}
                                  </span>
                                  {category && (
                                    <span className="inline-flex rounded-full bg-primary-color/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-color">
                                      {category.category_name}
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
                                <strong>Posted:</strong> {formatDate(job.posted_date)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={isExpired ? "text-red-500" : "text-primary-color"}>
                                <ClockIcon />
                              </span>
                              <span>
                                <strong>Deadline:</strong> {formatDate(job.application_deadline)}
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
                                <span className={`h-2 w-2 rounded-full ${
                                  job.status === 'open' ? 'bg-emerald-500' : 'bg-red-500'
                                }`}></span>
                                <span className="font-medium">
                                  Status: {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                                </span>
                              </div>
                              <div className="text-slate-600">
                                <p>Posted: {formatDate(job.posted_date)}</p>
                                <p>Deadline: {formatDate(job.application_deadline)}</p>
                                <p className="mt-2 text-xs">
                                  {isExpired 
                                    ? "Application period has ended" 
                                    : "Applications are currently being accepted"
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-10 border border-blue-200 bg-blue-50 p-6">
                <h4 className="flex items-center gap-2 text-lg font-bold text-blue-900">
                  <FileTextIcon />
                  How to Apply
                </h4>
                <div className="mt-4 space-y-2 text-blue-800">
                  <p className="font-semibold">
                    Applications must be submitted in person only.
                  </p>
                  <ul className="space-y-2 text-sm leading-7">
                    <li>Bring your updated CV or resume.</li>
                    <li>Include original and photocopies of certificates.</li>
                    <li>Carry two recent passport-size photographs.</li>
                    <li>Bring a citizenship certificate and experience letters if available.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-16 border border-amber-200 bg-[linear-gradient(135deg,#fff7ed,#fef3c7)] p-8">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center bg-amber-100 text-amber-600">
                    <FileTextIcon />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-amber-900">
                    Important Application Notice
                  </h3>
                  <div className="mx-auto mt-4 max-w-3xl space-y-3 text-amber-800">
                    <p className="text-lg font-semibold">
                      All job applications must be submitted physically at our office.
                    </p>
                    <p>
                      We do not accept online applications or email submissions.
                      Please visit the school office during working hours with
                      all required documents.
                    </p>
                    <p className="text-sm">
                      Incomplete applications or submissions through other
                      channels may not be considered.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-12 border border-slate-200 bg-white px-6 py-20 text-center shadow-lg shadow-slate-200/60">
              <div className="mx-auto flex h-20 w-20 items-center justify-center bg-slate-100 text-slate-400">
                <BriefcaseIcon />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-700">
                {searchQuery ? "No Matching Positions" : "No Open Positions"}
              </h3>
              <p className="mx-auto mt-4 max-w-md text-slate-500">
                {searchQuery
                  ? "No open positions match your search. Try different keywords."
                  : "There are no open positions right now. Please check back later for new opportunities."}
              </p>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-6 bg-secondary-color px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-primary-color"
                >
                  View All Open Positions
                </button>
              )}
            </div>
          )}

          
        </div>
      </section>
    </div>
  );
};

export default Vacancy;