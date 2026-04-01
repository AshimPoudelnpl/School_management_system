import React from "react";
import { Link } from "react-router-dom";
import schoolBuilding from "../assets/school_image.jpeg";
import admissionImage from "../assets/news_events/Addmission open.jpeg";
import campusFieldImage from "../assets/news_events/download.jpeg";
import studentMomentImage from "../assets/news_events/download (1).jpeg";
import assemblyImage from "../assets/news_events/images.jpeg";
import marchPassImage from "../assets/news_events/march pass.jpeg";
import tripImage from "../assets/news_events/490101178_1145653737574206_2205984292387668726_n.jpg";
import workshopImage from "../assets/news_events/workshop.jpeg";
import partnerMunicipality from "../assets/partners/107321270_167503368160709_5753721289914704343_n.jpg";
import partnerSaharaTv from "../assets/partners/354231841_670828305056570_7164644747234303052_n.jpg";
import partnerNextInfosys from "../assets/partners/448509679_122114354312326917_2060365356564464953_n.jpg";
import partnerBankeNews from "../assets/partners/470192495_122209223216194664_4387841422780816684_n.jpg";
import playgroundIcon from "../assets/why-western-playground.svg";
import labIcon from "../assets/why-western-lab.svg";
import evaluationIcon from "../assets/why-western-evaluation.svg";
import HeroSection from "../ui/HeroSection";

const whyWesternItems = [
  {
    title: "Spacious Playground & well-ventilated classrooms",
    description:
      "Students learn in a comfortable environment with open space for movement, activities, and focused classroom learning.",
    icon: playgroundIcon,
  },
  {
    title: "Excellent well-equipped Labs",
    description:
      "Well-equipped labs support practical learning and help students understand concepts through hands-on experience.",
    icon: labIcon,
  },
  {
    title: "Continuous & Comprehensive Evaluation (C.C.E)",
    description:
      "Regular evaluation and guidance help teachers monitor progress and support every student more effectively.",
    icon: evaluationIcon,
  },
];

const newsItems = [
  {
    label: "Admissions",
    title: "Admission open for new students",
    description:
      "Enrollment information is available for families looking for a supportive and academically focused school environment.",
    image: admissionImage,
    imagePosition: "center",
  },
  {
    label: "Events",
    title: "Sports meet and student celebration moments",
    description:
      "Students take part in events that encourage participation, school spirit, and healthy competition across the campus.",
    image: assemblyImage,
    imagePosition: "center",
  },
  {
    label: "Activities",
    title: "Educational tours and group learning experiences",
    description:
      "Beyond the classroom, students engage in supervised outings and activities that make learning more practical and memorable.",
    image: tripImage,
    imagePosition: "center",
  },
];

const galleryItems = [
  {
    title: "Campus Building",
    image: schoolBuilding,
    imagePosition: "center",
  },
  {
    title: "Campus Grounds",
    image: campusFieldImage,
    imagePosition: "center",
  },
  {
    title: "Student Highlights",
    image: studentMomentImage,
    imagePosition: "center",
  },
  {
    title: "Activity Day",
    image: marchPassImage,
    imagePosition: "center",
  },
  {
    title: "School Event",
    image: assemblyImage,
    imagePosition: "center",
  },
  {
    title: "Workshop Session",
    image: workshopImage,
    imagePosition: "center",
  },
];

const partnerItems = [
  {
    title: "Kohalpur Municipality",
    image: partnerMunicipality,
  },
  {
    title: "Sahara TV Khabar",
    image: partnerSaharaTv,
  },
  {
    title: "Next Infosys",
    image: partnerNextInfosys,
  },
  {
    title: "Banke News",
    image: partnerBankeNews,
  },
];

const Homepage = () => {
  return (
    <>
      <HeroSection />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-screen-xl items-center gap-8 lg:grid-cols-[minmax(340px,0.95fr)_minmax(0,1.05fr)]">
          <div className="grid gap-4 sm:grid-cols-[1.25fr_0.75fr]">
            <div className="overflow-hidden border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/60">
              <img
                src={schoolBuilding}
                alt="Western School building"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>

            <div className="grid gap-4">
              <div className="overflow-hidden border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/60">
                <img
                  src={campusFieldImage}
                  alt="Western School campus grounds"
                  className="h-52 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/60">
                <img
                  src={studentMomentImage}
                  alt="Western School students"
                  className="h-52 w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-2xl inline-block border-b-4 bg-white px-4 py-2 shadow-lg shadow-slate-200/60">
            {/* Date Badge */}
            <div className="inline-block bg-white px-4 py-2 border-b-4 border-secondary-color ">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary-color">
                since 2002
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              A vibrant school environment shaped around learning and student
              life.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Western School brings together a welcoming campus, committed
              teachers, and a strong academic routine. The school building and
              surrounding spaces reflect a place where students can learn,
              participate, and grow with confidence every day.
            </p>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex rounded-full bg-secondary-color px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase transition hover:bg-primary-color"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">
              Why Western School
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
              A school community built on care, participation, and progress.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Western School focuses on strong academic progress while blending
              tradition with a forward-looking approach to education. We aim to
              meet the needs of children as they grow into confident, capable,
              and responsible young adults in an increasingly complex world.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {whyWesternItems.map(({ title, description, icon }) => (
              <article
                key={title}
                className="border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center border border-slate-200 bg-slate-50">
                  <img src={icon} alt="" className="h-16 w-16 object-contain" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary-color">
                News And Events
              </p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
                Recent highlights from Western School.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Stay updated with admissions, student programs, and important
                school activities happening across Western School.
              </p>
            </div>

            <Link
              to="/notice"
              className="mt-4 block text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary-color transition hover:text-secondary-color md:absolute md:bottom-0 md:right-0 md:mt-0"
            >
              View All
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {newsItems.map(
              ({ label, title, description, image, imagePosition }) => (
                <article
                  key={title}
                  className="overflow-hidden border border-slate-200 bg-slate-50 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <img
                    src={image}
                    alt={title}
                    className="h-60 w-full object-cover"
                    style={{ objectPosition: imagePosition }}
                  />
                  <div className="p-7 text-center">
                    <span className="inline-flex rounded-full bg-secondary-color/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-color">
                      {label}
                    </span>
                    <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-color">
                Western&apos;s Gallery
              </p>
              <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
                Image moments from campus life, events, and student experiences.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Explore snapshots of our campus, student participation, and the
                vibrant learning environment at Western School.
              </p>
            </div>

            <Link
              to="/gallery"
              className="mt-4 block text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary-color transition hover:text-secondary-color md:absolute md:bottom-0 md:right-0 md:mt-0"
            >
              Explore Gallery
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map(({ title, image, imagePosition }) => (
              <article
                key={title}
                className="overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-72 w-full object-cover"
                  style={{ objectPosition: imagePosition }}
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center">
            <p className="text-3xl font-bold text-slate-700 sm:text-4xl">
              Our Partners
            </p>
            <div className="mx-auto mt-5 h-[3px] w-44 bg-slate-500/80" />
            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Our valuable partners
            </p>
          </div>

          <div className="mt-14 overflow-x-auto">
            <div className="flex min-w-max items-center justify-center gap-10 pb-2 sm:gap-14 lg:gap-20">
              {partnerItems.map(({ title, image }) => (
                <div
                  key={title}
                  className="flex h-28 w-52 shrink-0 items-center justify-center sm:h-32 sm:w-60"
                >
                  <img
                    src={image}
                    alt={title}
                    className="max-h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8">
            <span className="h-3.5 w-3.5 rounded-full bg-slate-400" />
            <span className="h-3.5 w-3.5 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          

          <div className="mt-10 overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/70">
            <iframe
              title="Western Secondary School Banke map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.52881514596!2d81.67101837528388!3d28.191241875908624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399865946865f2bb%3A0x937a73ab635d4a3e!2sWestern%20Secondary%20School%2C%20Kohalpur%205!5e0!3m2!1sen!2snp!4v1775056630927!5m2!1sen!2snp"
              className="h-[450px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
