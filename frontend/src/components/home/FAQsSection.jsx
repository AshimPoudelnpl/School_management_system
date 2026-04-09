import React, { useState } from "react";
import { useGetFaqsQuery } from "../../redux/features/siteSlice";
import Skeleton from "../../shared/Skeleton";

const FAQsSection = () => {
  const { data: faqsData, isLoading, error } = useGetFaqsQuery();
  const faqs = faqsData?.data || [];
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (isLoading) {
    return (
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <Skeleton variant="text" count={8} />
        </div>
      </section>
    );
  }

  if (error || faqs.length === 0) return null;

  const sortedFaqs = [...faqs].sort((a, b) => a.display_order - b.display_order);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-secondary-color/20 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-60 w-60 rounded-full bg-primary-color/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <span className="section-label bg-secondary-color/10 text-secondary-color ring-1 ring-secondary-color/30">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-color" />
            Support
          </span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Frequently Asked{" "}
            <span className="text-secondary-color">Questions</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Find answers to common questions about Western School.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-3">
          {sortedFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                openFaq === index
                  ? "border-secondary-color/30 shadow-lg shadow-secondary-color/10"
                  : "border-slate-100 shadow-sm hover:border-slate-200 hover:shadow-md"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                  openFaq === index ? "bg-secondary-color/5" : "bg-white hover:bg-slate-50"
                }`}
                aria-expanded={openFaq === index}
              >
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                    openFaq === index
                      ? "bg-secondary-color text-white rotate-180"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-slate-100 bg-white px-6 py-5">
                  <p className="text-sm leading-7 text-slate-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
