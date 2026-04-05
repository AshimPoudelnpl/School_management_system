import React from "react";
import { SearchIcon } from "./VacancyIcons";

const VacancyHeader = ({ searchQuery, onSearchChange }) => {
  return (
    <>
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

      <div className="mx-auto mt-10 max-w-md">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search positions..."
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full rounded-lg border border-slate-200 py-3 pl-10 pr-4 focus:border-transparent focus:ring-2 focus:ring-secondary-color"
          />
        </div>
      </div>
    </>
  );
};

export default VacancyHeader;
