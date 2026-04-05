import React from "react";
import { BriefcaseIcon } from "./VacancyIcons";

const VacancyEmptyState = ({ searchQuery, onResetSearch }) => {
  return (
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
          onClick={onResetSearch}
          className="mt-6 bg-secondary-color px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-primary-color"
        >
          View All Open Positions
        </button>
      )}
    </div>
  );
};

export default VacancyEmptyState;
