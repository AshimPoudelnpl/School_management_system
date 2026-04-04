const publicPages = [
  { path: '/', label: 'Home', lazy: () => import('../pages/Homepage') },
  { path: '/about', label: 'About Us', lazy: () => import('../pages/AboutUs') },
  { path: '/academics', label: 'Academics', lazy: () => import('../pages/Academics') },
  { path: '/academics/events', label: 'Events', lazy: () => import('../pages/AcademicEvents') },
  { path: '/academics/exams', label: 'Exams', lazy: () => import('../pages/AcademicsExams') },
  { path: '/academics/achievements', label: 'Achievements', lazy: () => import('../pages/Achievements') },
  { path: '/academics/question-banks', label: 'Question Banks', lazy: () => import('../pages/QuestionBanks') },
  { path: '/blog', label: 'Blog', lazy: () => import('../pages/Blog') },
  { path: '/blog/:id', label: 'Blog Detail', lazy: () => import('../pages/BlogDetail') },
  { path: '/contact', label: 'Contact', lazy: () => import('../pages/Contact') },
  { path: '/gallery', label: 'Gallery', lazy: () => import('../pages/Gallery') },
  { path: '/notice', label: 'Notice', lazy: () => import('../pages/Notice') },
  { path: '/our-team', label: 'Our Team', lazy: () => import('../pages/OurTeam') },
  { path: '/vacancy', label: 'Vacancy', lazy: () => import('../pages/Vacancy') },
]

const PublicRoutes = publicPages.map(({ path, lazy }) => ({
  path,
  lazy: async () => {
    const module = await lazy()

    return {
      Component: module.default,
    }
  },
}))

export default PublicRoutes
