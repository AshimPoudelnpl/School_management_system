import React from "react";
import { useGetQuestionBankQuery } from "../../redux/features/academicSlice";
import Skeleton from "../../shared/Skeleton";

const QuestionBanksList = () => {
  const { data: questionBanksData, isLoading, error } = useGetQuestionBankQuery();
  const questionBanks = questionBanksData?.data || [];

  if (isLoading) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <Skeleton variant="card" count={6} />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center py-20">
            <p className="text-slate-600">Failed to load question banks. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  if (questionBanks.length === 0) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center py-20">
            <p className="text-slate-600">No question banks available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {questionBanks.map((questionBank) => (
            <article key={questionBank.id} className="border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block rounded-full bg-primary-color/10 px-3 py-1 text-xs font-semibold text-primary-color">
                    Class {questionBank.class_level}
                  </span>
                  <span className="inline-block rounded-full bg-secondary-color/10 px-3 py-1 text-xs font-semibold text-secondary-color">
                    {questionBank.year}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{questionBank.title}</h2>
                <p className="text-sm font-medium text-slate-700 mb-3">{questionBank.subject}</p>
              </div>
              
              <p className="text-sm leading-6 text-slate-600 mb-4">
                {questionBank.description.length > 120 
                  ? `${questionBank.description.substring(0, 120)}...` 
                  : questionBank.description
                }
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  {new Date(questionBank.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                
                <a
                  href={`${import.meta.env.VITE_IMG_URL}${questionBank.file_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-color px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-color/90"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionBanksList;
