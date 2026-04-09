import React from "react"

const VacancyHeader = ({ searchQuery, onSearchChange }) => {
  return (
    <>
      <div className="text-center">
       
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
            
          </div>
         
        </div>
      </div>
    </>
  );
};

export default VacancyHeader;
