import React from "react";
import { FileTextIcon } from "./VacancyIcons";

const VacancyApplyInfo = () => {
  return (
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
  );
};

export default VacancyApplyInfo;
