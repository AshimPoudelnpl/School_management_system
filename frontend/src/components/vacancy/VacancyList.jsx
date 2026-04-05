import React from "react";
import VacancyApplyInfo from "./VacancyApplyInfo";
import VacancyCard from "./VacancyCard";
import VacancyEmptyState from "./VacancyEmptyState";
import VacancyImportantNotice from "./VacancyImportantNotice";

const VacancyList = ({
  vacancies,
  categories,
  searchQuery,
  onResetSearch,
}) => {
  if (vacancies.length === 0) {
    return (
      <VacancyEmptyState
        searchQuery={searchQuery}
        onResetSearch={onResetSearch}
      />
    );
  }

  return (
    <>
      <div className="mt-10 space-y-8">
        {vacancies.map((job) => {
          const categoryName =
            categories.find((category) => category.category_id === job.category_id)
              ?.category_name ?? null;

          return (
            <VacancyCard
              key={job.id}
              job={job}
              categoryName={categoryName}
            />
          );
        })}
      </div>

      <VacancyApplyInfo />
      <VacancyImportantNotice />
    </>
  );
};

export default VacancyList;
