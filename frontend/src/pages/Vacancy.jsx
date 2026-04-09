import React, { useMemo, useState } from "react";
import VacancyHeader from "../components/vacancy/VacancyHeader";
import VacancyList from "../components/vacancy/VacancyList";
import { useGetVacancyQuery, useGetVacancyCategoriesQuery } from "../redux/features/contentSlice";
import Skeleton from "../shared/Skeleton";

const Vacancy = () => {
  const { data: vacancyData, isLoading: vacancyLoading } = useGetVacancyQuery();
  const { data: categoriesData, isLoading: categoriesLoading } = useGetVacancyCategoriesQuery();
  const [searchQuery, setSearchQuery] = useState("");

  const vacancies = vacancyData?.data ?? [];
  const categories = categoriesData?.data ?? [];

  const filteredVacancies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return vacancies.filter((job) => {
      const status = job.status?.toLowerCase();
      const title = job.title?.toLowerCase() ?? "";
      const description = job.description?.toLowerCase() ?? "";
      return status === "open" && (query === "" || title.includes(query) || description.includes(query));
    });
  }, [vacancies, searchQuery]);

  if (vacancyLoading || categoriesLoading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-soft">
        <div className="px-4 py-16 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <Skeleton variant="card" count={4} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-soft">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl" />

      <div className="relative px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          {/* Page header */}
          <div className="mb-10 text-center">
            <span className="section-label bg-amber-50 text-amber-700 ring-1 ring-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Careers at Western
            </span>
            
          </div>

          <VacancyHeader
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <VacancyList
            vacancies={filteredVacancies}
            categories={categories}
            searchQuery={searchQuery}
            onResetSearch={() => setSearchQuery("")}
          />
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
