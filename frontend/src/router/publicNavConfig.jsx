export const academicsDropdownItems = [
  { path: "/academics/events", label: "Events" },
  { path: "/academics/achievements", label: "Achievements" },
  { path: "/academics/question-banks", label: "Question Banks" },
  { path: "/academics/exams", label: "Exams" },
];

export const publicNavItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  {
    path: "/academics",
    label: "Academics",
    children: academicsDropdownItems,
  },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
  { path: "/gallery", label: "Gallery" },
  { path: "/notice", label: "Notice" },
  { path: "/our-team", label: "Our Team" },
  { path: "/vacancy", label: "Vacancy" },
];
