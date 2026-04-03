import React, { useState } from "react";
import { useGetFaqsQuery } from "../../redux/features/siteSlice";

const FAQsSection = () => {
  const { data: faqsData, isLoading, error } = useGetFaqsQuery();
  const faqs = faqsData?.data || [];
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (isLoading) {
    return (
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-color border-t-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || faqs.length === 0) {
    return null;
  }

  // Sort FAQs by display_order
  const sortedFaqs = [...faqs].sort((a, b) => a.display_order - b.display_order);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">
            Support
          </p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Find answers to common questions about Western School.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {sortedFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-slate-200 bg-slate-50 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-100"
                aria-expanded={openFaq === index}
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`h-5 w-5 text-primary-color transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-slate-200 bg-white p-6">
                  <p className="text-sm leading-6 text-slate-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {faqs.length > 6 && (
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-600">
              Showing all {faqs.length} frequently asked questions
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQsSection;