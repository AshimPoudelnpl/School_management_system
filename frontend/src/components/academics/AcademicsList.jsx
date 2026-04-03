import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useGetEventQuery, useGetAchivementQuery } from "../../redux/features/academicSlice";

const ITEMS_PER_PAGE = 9;

const AcademicsList = () => {
  const { data: eventsData, isLoading: eventsLoading } = useGetEventQuery();
  const { data: achievementsData, isLoading: achievementsLoading } = useGetAchivementQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const events = eventsData?.data || [];
  const achievements = achievementsData?.data || [];

  const isLoading = eventsLoading || achievementsLoading;

  // Combine events and achievements with type
  const allAcademicItems = useMemo(() => {
    const eventItems = events.map((item) => ({ ...item, type: "event", category: item.category }));
    const achievementItems = achievements.map((item) => ({ ...item, type: "achievement", category: "Achievement" }));

    return [...eventItems, ...achievementItems].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }, [events, achievements]);

  // Create category filter options
  const academicCategories = useMemo(() => {
    const categories = new Set();
    allAcademicItems.forEach((item) => categories.add(item.category));
    return ["All Categories", ...Array.from(categories)];
  }, [allAcademicItems]);

  // Filter items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All Categories") return allAcademicItems;
    return allAcademicItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, allAcademicItems]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredItems]);

  const handleCategoryChange = (category) => { 
    setSelectedCategory(category); 
    setCurrentPage(1); 
  };

  const getItemImage = (item) => {
    if (item.type === 'event' && item.pdf_url) {
      // Check if it's actually an image file, not a PDF
      const fileExtension = item.pdf_url.toLowerCase().split('.').pop();
      if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileExtension)) {
        return `${import.meta.env.VITE_IMG_URL}${item.pdf_url}`;
      }
      return null; // It's a PDF, don't show as image
    }
    if (item.type === 'achievement' && item.image_urls) {
      return `${import.meta.env.VITE_IMG_URL}${item.image_urls}`;
    }
    return null;
  };

  const isPdfFile = (item) => {
    if (item.type === 'event' && item.pdf_url) {
      const fileExtension = item.pdf_url.toLowerCase().split('.').pop();
      return fileExtension === 'pdf';
    }
    return false;
  };

  const getItemDate = (item) => {
    const dateField = item.type === 'event' ? item.event_date : item.achievement_date;
    return new Date(dateField).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getItemLink = (item) => {
    if (item.type === 'event') return '/academics/events';
    return '/academics/achievements';
  };

  const getTypeLabel = (type) => {
    if (type === 'event') return 'Event';
    return 'Achievement';
  };

  if (isLoading) {
    return (
      <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">Academic Resources</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Events & Achievements</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">Explore our academic activities and celebrate student achievements all in one place.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {academicCategories.map((category) => (
            <button 
              key={category} 
              type="button" 
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-3 text-sm font-semibold transition sm:px-6 ${
                selectedCategory === category 
                  ? "bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] text-white shadow-lg shadow-sky-200/60" 
                  : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-secondary-color hover:text-secondary-color"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600 sm:text-base">
            Showing <span className="font-semibold text-secondary-color">{filteredItems.length}</span> {filteredItems.length === 1 ? "item" : "items"}
            {selectedCategory !== "All Categories" && <> in <span className="font-semibold text-secondary-color">{selectedCategory}</span></>}
          </p>
        </div>

        {paginatedItems.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedItems.map((item, index) => {
              const itemImage = getItemImage(item);
              const itemDate = getItemDate(item);
              const itemLink = getItemLink(item);
              const typeLabel = getTypeLabel(item.type);

              return (
                <article 
                  key={`${item.type}-${item.id}`} 
                  className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl" 
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <Link to={itemLink} className="block w-full text-left">
                    {itemImage ? (
                      <div className="relative overflow-hidden">
                        <img 
                          src={itemImage} 
                          alt={item.title} 
                          className="h-48 w-full object-cover transition duration-500 hover:scale-105" 
                        />
                        <div className="absolute left-4 top-4 bg-white/95 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-color shadow">
                          {typeLabel}
                        </div>
                        <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                          {item.category}
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-48 bg-gradient-to-br from-primary-color/10 to-secondary-color/10 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 bg-primary-color/20 rounded-full flex items-center justify-center">
                            {isPdfFile(item) ? (
                              <svg className="w-8 h-8 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            ) : (
                              <svg className="w-8 h-8 text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="absolute left-4 top-4 bg-white/95 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-color shadow">
                          {typeLabel}
                        </div>
                        <div className="absolute bottom-4 right-4 bg-slate-900/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                          {item.category}
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold leading-snug text-slate-900 line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                        {item.description && item.description.length > 100 
                          ? `${item.description.substring(0, 100)}...` 
                          : item.description || 'No description available'
                        }
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-400">{itemDate}</p>
                        {isPdfFile(item) && (
                          <a
                            href={`${import.meta.env.VITE_IMG_URL}${item.pdf_url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary-color hover:text-secondary-color"
                          >
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download PDF
                          </a>
                        )}
                      </div>
                      <span className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-primary-color">View Details</span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 border border-slate-200 bg-white px-6 py-16 text-center shadow-lg shadow-slate-200/60">
            <h3 className="text-2xl font-bold text-slate-900">No items found</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">Try choosing a different category to explore more academic content.</p>
            <button 
              type="button" 
              onClick={() => handleCategoryChange("All Categories")} 
              className="mt-6 bg-secondary-color px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-primary-color"
            >
              Show All
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button 
              type="button" 
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} 
              disabled={currentPage === 1} 
              className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button 
                key={page} 
                type="button" 
                onClick={() => setCurrentPage(page)} 
                className={`min-w-11 px-4 py-3 text-sm font-semibold transition ${
                  currentPage === page 
                    ? "bg-secondary-color text-white shadow-lg shadow-sky-200/60" 
                    : "border border-slate-200 bg-white text-slate-700 hover:border-secondary-color hover:text-secondary-color"
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              type="button" 
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} 
              disabled={currentPage === totalPages} 
              className="border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-secondary-color hover:text-secondary-color disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AcademicsList;
