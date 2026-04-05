import React from "react";
import { FileTextIcon } from "./VacancyIcons";

const VacancyImportantNotice = () => {
  return (
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
  );
};

export default VacancyImportantNotice;
