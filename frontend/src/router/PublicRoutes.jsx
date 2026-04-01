import Homepage from '../pages/Homepage'
import AboutUs from '../pages/AboutUs'
import Academics from '../pages/Academics'
import AcademicEvents from '../pages/AcademicEvents'
import Achievements from '../pages/Achievements'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Notice from '../pages/Notice'
import OurTeam from '../pages/OurTeam'
import QuestionBanks from '../pages/QuestionBanks'
import Vacancy from '../pages/Vacancy'

const publicPages = [
  { path: '/', label: 'Home', element: <Homepage /> },
  { path: '/about', label: 'About Us', element: <AboutUs /> },
  { path: '/academics', label: 'Academics', element: <Academics /> },
  { path: '/academics/events', label: 'Events', element: <AcademicEvents /> },
  { path: '/academics/achievements', label: 'Achievements', element: <Achievements /> },
  { path: '/academics/question-banks', label: 'Question Banks', element: <QuestionBanks /> },
  { path: '/blog', label: 'Blog', element: <Blog /> },
  { path: '/contact', label: 'Contact', element: <Contact /> },
  { path: '/gallery', label: 'Gallery', element: <Gallery /> },
  { path: '/notice', label: 'Notice', element: <Notice /> },
  { path: '/our-team', label: 'Our Team', element: <OurTeam /> },
  { path: '/vacancy', label: 'Vacancy', element: <Vacancy /> },
]

const PublicRoutes = publicPages.map(({ path, element }) => ({
  path,
  element,
}))

export default PublicRoutes
