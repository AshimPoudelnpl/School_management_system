import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutStats from "../components/about/AboutStats";
import AboutWhoWeAre from "../components/about/AboutWhoWeAre";
import AboutFoundation from "../components/about/AboutFoundation";
import AboutStudentLife from "../components/about/AboutStudentLife";
import AboutWhyChoose from "../components/about/AboutWhyChoose";

const AboutUs = () => (
  <div className="bg-slate-50">
    <AboutHero />
    <AboutStats />
    <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-10">
      <AboutWhoWeAre />
      <AboutFoundation />
      <AboutStudentLife />
      <AboutWhyChoose />
    </div>
  </div>
);

export default AboutUs;
