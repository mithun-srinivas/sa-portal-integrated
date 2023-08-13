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
      <div className="bg-green-300 p-2 rounded-lg mb-0 m-2">
        <h5 className="text-center font-semibold">
          🎓 This Independence Day, Use promo code "SA010" for a 15% discount on all our courses 📈
        </h5>
      </div>
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
