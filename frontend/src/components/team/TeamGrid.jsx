import React, { useMemo, useState } from "react";
import { useGetTeamQuery, useGetTeamCategoriesQuery } from "../../redux/features/teamSlice";

const PlaceholderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="mx-auto h-14 w-14 text-secondary-color" aria-hidden="true">
    <path d="M16 19a4 4 0 0 0-8 0m12 0a8 8 0 0 0-16 0m12-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TeamGrid = () => {
  const { data: teamData, isLoading: teamLoading } = useGetTeamQuery();
  const { data: categoriesData, isLoading: categoriesLoading } = useGetTeamCategoriesQuery();
  
  const [selectedCategory, setSelectedCategory] = useState("all");

  const teamMembers = teamData?.data ?? [];
  const categories = categoriesData?.data ?? [];

  // Create category options with "All" option
  const teamCategories = useMemo(() => {
    const categoryOptions = [{ id: "all", category_name: "All Team" }];
    return [...categoryOptions, ...categories];
  }, [categories]);

  // Filter team members by category and prioritize is_main members
  const filteredTeam = useMemo(() => {
    let filtered = selectedCategory === "all" 
      ? teamMembers 
      : teamMembers.filter(member => member.category_id === selectedCategory);
    
    // Sort by is_main (main members first), then by name
    return [...filtered].sort((a, b) => {
      if (a.is_main !== b.is_main) {
        return b.is_main - a.is_main; // is_main = 1 comes first
      }
      return a.name.localeCompare(b.name);
    });
  }, [teamMembers, selectedCategory]);

  const activeCategoryName = teamCategories.find(c => c.id === selectedCategory)?.category_name ?? null;

  if (teamLoading || categoriesLoading) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">Our Team</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            Western School is supported by committed teams who guide academics, operations, student wellbeing, and school activities with care and professionalism.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3 px-2">
          {teamCategories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button 
                key={category.id} 
                type="button" 
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${
                  isActive 
                    ? "bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] text-white shadow-lg shadow-sky-200/70" 
                    : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-secondary-color hover:text-secondary-color"
                }`}
              >
                {category.category_name}
              </button>
            );
          })}
        </div>

        <div className="mb-8 text-center">
          <p className="text-sm text-slate-600 sm:text-base">
            Showing <span className="font-semibold text-secondary-color">{filteredTeam.length}</span> team {filteredTeam.length === 1 ? "member" : "members"}
            {activeCategoryName && selectedCategory !== "all" && (
              <> in <span className="font-semibold text-secondary-color">{activeCategoryName}</span></>
            )}
          </p>
        </div>

        {filteredTeam.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTeam.map((member) => {
              return (
                <article 
                  key={member.id} 
                  className={`group overflow-hidden border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    member.is_main ? 'ring-2 ring-secondary-color/20' : ''
                  }`}
                >
                  <div className="relative h-56 overflow-hidden sm:h-60 lg:h-64">
                    {member.image ? (
                      <img 
                        src={`${import.meta.env.VITE_IMG_URL}${member.image}`} 
                        alt={member.name} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="h-full w-full bg-slate-100 flex items-center justify-center">
                        <PlaceholderIcon />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {member.is_main === 1 && (
                      <div className="absolute top-3 right-3 bg-secondary-color text-white px-2 py-1 text-xs font-semibold rounded">
                        Key Member
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-secondary-color sm:text-base">{member.position}</p>
                    <span className="mt-4 inline-flex bg-secondary-color/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-color">
                      {member.category_name}
                    </span>
                    
                    {/* Contact Information */}
                    <div className="mt-4 space-y-2">
                      {member.number && member.number !== "0000" && member.number !== "00" && (
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <PhoneIcon />
                          <span>{member.number}</span>
                        </div>
                      )}
                      {member.email && (
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <EmailIcon />
                          <span className="truncate">{member.email}</span>
                        </div>
                      )}
                    </div>

                    {member.description && (
                      <p className="mt-4 text-sm leading-7 text-slate-600">{member.description}</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="px-4 py-16 text-center sm:py-24">
            <PlaceholderIcon />
            <h3 className="mt-5 text-2xl font-bold text-slate-700">No team members found</h3>
            <p className="mt-3 text-sm text-slate-500 sm:text-base">
              No team members are available in this category right now.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamGrid;