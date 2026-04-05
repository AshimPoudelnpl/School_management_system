import React from "react";
import HeroSection from "../ui/HeroSection";
import AboutSection from "../components/home/AboutSection";
import WhyWesternSection from "../components/home/WhyWesternSection";
import NewsEventsSection from "../components/home/NewsEventsSection";
import GallerySection from "../components/home/GallerySection";
import ReviewsSection from "../components/home/ReviewsSection";
import FAQsSection from "../components/home/FAQsSection";
import MapSection from "../components/home/MapSection";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyWesternSection />
      <NewsEventsSection />
      <GallerySection />
      <ReviewsSection />
      <FAQsSection />
      <MapSection />
    </>
  );
};

export default Homepage;