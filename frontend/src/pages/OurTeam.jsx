import React, { useMemo, useState } from "react";
import { schoolBuilding } from "../assets";
import admissionImage from "../assets/news_events/Addmission open.jpeg";
import campusImage from "../assets/news_events/download.jpeg";
import studentMomentImage from "../assets/news_events/download (1).jpeg";
import eventImage from "../assets/news_events/images.jpeg";
import marchPassImage from "../assets/news_events/march pass.jpeg";
import tripImage from "../assets/news_events/490101178_1145653737574206_2205984292387668726_n.jpg";
import workshopImage from "../assets/news_events/workshop.jpeg";

const teamCategories = [
  { id: "leadership", name: "Leadership" },
  { id: "academics", name: "Academics" },
  { id: "operations", name: "Operations" },
  { id: "student-support", name: "Student Support" },
];

const teamMembers = [
  {
    id: 1,
    name: "Principal's Office",
    position: "School Leadership",
    categoryId: "leadership",
    image: schoolBuilding,
    description:
      "Leads the academic direction of Western School while guiding discipline, growth, and the overall learning environment.",
  },
  {
    id: 2,
    name: "Academic Coordinator",
    position: "Curriculum And Teaching Support",
    categoryId: "academics",
    image: workshopImage,
    description:
      "Supports teaching quality, learning plans, and classroom coordination so students progress with clarity and consistency.",
  },
  {
    id: 3,
    name: "Admission And Front Desk",
    position: "School Administration",
    categoryId: "operations",
    image: admissionImage,
    description:
      "Assists families with admissions, school information, and day-to-day communication with the school office.",
  },
  {
    id: 4,
    name: "Student Guidance Team",
    position: "Student Wellbeing",
    categoryId: "student-support",
    image: studentMomentImage,
    description:
      "Helps students stay supported in their school journey through guidance, care, and everyday encouragement.",
  },
  {
    id: 5,
    name: "Activity And Events Team",
    position: "Co-Curricular Coordination",
    categoryId: "student-support",
    image: eventImage,
    description:
      "Plans student programs and school events that build confidence, participation, and a stronger sense of school life.",
  },
  {
    id: 6,
    name: "Sports And Discipline Unit",
    position: "Physical Development",
    categoryId: "student-support",
    image: marchPassImage,
    description:
      "Encourages teamwork, fitness, discipline, and healthy participation through sports and structured activities.",
  },
  {
    id: 7,
    name: "Campus Operations Team",
    position: "Facilities And Coordination",
    categoryId: "operations",
    image: campusImage,
    description:
      "Maintains a safe, organized, and welcoming school environment that supports learning across the campus.",
  },
  {
    id: 8,
    name: "Learning Experience Team",
    position: "Student Engagement",
    categoryId: "academics",
    image: tripImage,
    description:
      "Strengthens learning through practical activities, educational visits, and experiences beyond the classroom.",
  },
];

const TeamPlaceholderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="mx-auto h-14 w-14 text-secondary-color"
    aria-hidden="true"
  >
    <path
      d="M16 19a4 4 0 0 0-8 0m12 0a8 8 0 0 0-16 0m12-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OurTeam = () => {
  const [selectedCategory, setSelectedCategory] = useState(teamCategories[0].id);

  const filteredTeam = useMemo(() => {
    if (selectedCategory === null) {
      return [];
    }

    return teamMembers.filter((member) => member.categoryId === selectedCategory);
  }, [selectedCategory]);

  const activeCategoryName =
    teamCategories.find((category) => category.id === selectedCategory)?.name ??
    null;

  return (
    <div className="w-full">
      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">
              Our Team
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Western School is supported by committed teams who guide
              academics, operations, student wellbeing, and school activities
              with care and professionalism.
            </p>
          </div>

          <div className="mb-10">
            <div className="flex flex-wrap justify-center gap-3 px-2">
              {teamCategories.map((category) => {
                const isActive = selectedCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(isActive ? null : category.id)
                    }
                    className={`px-4 py-3 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${
                      isActive
                        ? "bg-[linear-gradient(135deg,var(--color-secondary-color),var(--color-primary-color))] text-white shadow-lg shadow-sky-200/70"
                        : "border border-slate-200 bg-white text-slate-600 shadow-sm hover:border-secondary-color hover:text-secondary-color"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-8 text-center">
            <p className="text-sm text-slate-600 sm:text-base">
              {activeCategoryName ? (
                <>
                  Showing team members in{" "}
                  <span className="font-semibold text-secondary-color">
                    {activeCategoryName}
                  </span>
                </>
              ) : (
                "Choose a category above to view team members"
              )}
            </p>
          </div>

          {selectedCategory !== null && filteredTeam.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTeam.map((member) => {
                const categoryName =
                  teamCategories.find(
                    (category) => category.id === member.categoryId,
                  )?.name ?? member.categoryId;

                return (
                  <article
                    key={member.id}
                    className="group overflow-hidden border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden sm:h-60 lg:h-64">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-secondary-color sm:text-base">
                        {member.position}
                      </p>
                      <span className="mt-4 inline-flex bg-secondary-color/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-color">
                        {categoryName}
                      </span>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {member.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : selectedCategory === null ? (
            <div className="px-4 py-16 text-center sm:py-24">
              <TeamPlaceholderIcon />
              <h3 className="mt-5 text-2xl font-bold text-slate-700">
                Select a Category
              </h3>
              <p className="mt-3 text-sm text-slate-500 sm:text-base">
                Choose a category above to view the team section.
              </p>
            </div>
          ) : (
            <div className="px-4 py-16 text-center sm:py-24">
              <TeamPlaceholderIcon />
              <h3 className="mt-5 text-2xl font-bold text-slate-700">
                No team members found
              </h3>
              <p className="mt-3 text-sm text-slate-500 sm:text-base">
                No team members are available in this category right now.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
