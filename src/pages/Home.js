import React from "react";
import { Header } from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import { Offerings } from "../components/Offerings";
import Testimonials from "../components/Testimonials";
import { Footer } from "../components/Footer";
import LiveCourseSection from "../components/LiveCourseSection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Offerings />
      <LiveCourseSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
