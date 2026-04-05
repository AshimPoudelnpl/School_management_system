export const formatVacancyDate = (dateString) => {
  if (!dateString) return "Not specified";

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getVacancyStatusValue = (job) =>
  (job?.status ?? "").toString().trim().toLowerCase();

export const isVacancyExpired = (applicationDeadline) => {
  if (!applicationDeadline) return false;
  return new Date(applicationDeadline) < new Date();
};

export const isVacancyOpen = (job) => getVacancyStatusValue(job) === "open";

export const getVacancyStatusLabel = (job) =>
  isVacancyOpen(job) ? "Open" : "Closed";

export const getVacancyStatusClasses = (job) =>
  isVacancyOpen(job)
    ? "bg-emerald-100 text-emerald-800"
    : "bg-red-100 text-red-800";
