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
      <div className="w-full bg-slate-50">
        <section className="px-4 py-12 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <Skeleton variant="card" count={4} />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50">
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
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
      </section>
    </div>
  );
};

export default Vacancy;
