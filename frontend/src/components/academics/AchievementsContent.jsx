import React from "react";
import { useGetAchivementQuery } from "../../redux/features/academicSlice";

const AchievementsContent = () => {
  const { data: achievementsData, isLoading, error } = useGetAchivementQuery();
  const achievements = achievementsData?.data || [];

  if (isLoading) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-color border-t-transparent"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center py-20">
            <p className="text-slate-600">Failed to load achievements. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  if (achievements.length === 0) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center py-20">
            <p className="text-slate-600">No achievements available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <article key={achievement.id} className="border border-slate-200 bg-white shadow-lg shadow-slate-200/60 overflow-hidden">
              {achievement.image_urls && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`${import.meta.env.VITE_IMG_URL}${achievement.image_urls}`} 
                    alt={achievement.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-3">{achievement.title}</h2>
                <p className="text-sm leading-6 text-slate-600 mb-4">
                  {achievement.description.length > 150 
                    ? `${achievement.description.substring(0, 150)}...` 
                    : achievement.description
                  }
                </p>
                <div className="text-xs text-slate-500">
                  {new Date(achievement.achievement_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsContent;
