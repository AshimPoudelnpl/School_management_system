import React from "react";
import { Link } from "react-router-dom";
import schoolBuilding from "../assets/school_image.jpeg";
import admissionImage from "../assets/news_events/Addmission open.jpeg";
import tripImage from "../assets/news_events/490101178_1145653737574206_2205984292387668726_n.jpg";
import studentMomentImage from "../assets/news_events/download (1).jpeg";
import eventImage from "../assets/news_events/images.jpeg";
import marchPassImage from "../assets/news_events/march pass.jpeg";
import workshopImage from "../assets/news_events/workshop.jpeg";

const featuredPost = {
  category: "School Life",
  title: "How Western School builds learning beyond the classroom",
  description:
    "From student events to guided activities and school programs, Western School creates an environment where children learn with confidence, discipline, and participation.",
  image: tripImage,
};

const blogPosts = [
  {
    category: "Admissions",
    title: "What families should know before joining Western School",
    description:
      "A short look at our school environment, academic care, and the values we focus on for every student.",
    image: admissionImage,
    cta: "/contact",
    ctaLabel: "Contact School",
  },
  {
    category: "Student Events",
    title: "Why school events matter in a student's growth",
    description:
      "Events help children build teamwork, confidence, communication, and stronger school connection.",
    image: eventImage,
    cta: "/academics/events",
    ctaLabel: "View Events",
  },
  {
    category: "Campus",
    title: "A welcoming campus shapes everyday learning habits",
    description:
      "The school environment plays a strong role in helping students stay focused, active, and engaged.",
    image: schoolBuilding,
    cta: "/about",
    ctaLabel: "Read About Us",
  },
  {
    category: "Achievements",
    title: "Recognizing progress through participation and discipline",
    description:
      "Academic success grows stronger when student effort, discipline, and everyday progress are encouraged.",
    image: marchPassImage,
    cta: "/academics/achievements",
    ctaLabel: "See Achievements",
  },
  {
    category: "Learning Support",
    title: "How practice materials strengthen student preparation",
    description:
      "Question banks and guided study support help learners prepare with more clarity and confidence.",
    image: workshopImage,
    cta: "/academics/question-banks",
    ctaLabel: "Open Question Banks",
  },
  {
    category: "Students",
    title: "Building confidence through school participation",
    description:
      "When students take part in activities, they grow academically as well as socially and personally.",
    image: studentMomentImage,
    cta: "/gallery",
    ctaLabel: "See Gallery",
  },
];

const categories = [
  "Admissions",
  "Student Life",
  "Achievements",
  "Events",
  "Learning Support",
  "Campus",
];

const Blog = () => {
  return (
    <div className="bg-slate-50">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-color">
              Latest Posts
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              Articles from around Western School
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Browse recent blog topics covering student experiences, academic
              support, school culture, and campus updates.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden border border-slate-200 bg-slate-50 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-60 w-full object-cover"
                />
                <div className="p-7">
                  <span className="inline-flex rounded-full bg-primary-color/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-color">
                    {post.category}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold leading-snug text-slate-900">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {post.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={post.cta}
                      className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary-color transition hover:text-primary-color"
                    >
                      {post.ctaLabel}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-6xl border border-slate-200 bg-[linear-gradient(135deg,var(--color-secondary-color),#0f2f57)] p-10 text-white shadow-xl shadow-slate-300/60">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
              Stay Connected
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Follow the latest updates from Western School
            </h2>
            <p className="mt-5 text-sm leading-7 text-blue-100 sm:text-base">
              Keep exploring our school stories, student activities, and
              academic updates through the blog, notices, and gallery pages.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/notice"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-secondary-color transition hover:bg-blue-50"
              >
                Open Notices
              </Link>
              <Link
                to="/gallery"
                className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-secondary-color"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
