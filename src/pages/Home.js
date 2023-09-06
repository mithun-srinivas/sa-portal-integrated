import React from "react";
import { Header } from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import { Offerings } from "../components/Offerings";
import Testimonials from "../components/Testimonials";
import { Footer } from "../components/Footer";
import LiveCourseSection from "../components/LiveCourseSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Success Analytics | Home</title>
        <link rel="icon" href={"../assests/SALOGO.png"} />

        <meta name="keywords" content="Best courses for data science" />
        <meta name="description" content="Most affordable data science courses at success analytics" />

        <meta name="keywords" content="Best courses for data science" />
        <meta name="description" content="Uncover top data science programs here!" />

        <meta name="keywords" content="Most affordable courses for data science" />
        <meta name="description" content="Affordable courses to kickstart your career!" />

        <meta name="keywords" content="AI" />
        <meta name="description" content="Explore AI with top courses and projects!" />

        <meta name="keywords" content="ML" />
        <meta name="description" content="Learn Machine Learning from experts!" />

        <meta name="keywords" content="Success Analytics" />
        <meta name="description" content="Drive success with data-driven insights!" />

        <meta name="keywords" content="Most affordable courses" />
        <meta name="description" content="Quality education doesn't have to be pricey!" />

        <meta name="keywords" content="Best Courses" />
        <meta name="description" content="Unlock your potential with top-notch courses!" />

        <meta name="keywords" content="Best prices" />
        <meta name="description" content="Don't miss out on our unbeatable offers!" />

        <meta name="keywords" content="Ultimate Course Bundle + Live Classes" />
        <meta name="description" content="Grab the ultimate bundle with live sessions!" />

        <meta name="keywords" content="Ultimate Course Bundle Data Science Projects" />
        <meta name="description" content="Access a goldmine of data science projects!" />

        <meta name="keywords" content="Mastery in Python Modular Coding Zero to Hero" />
        <meta name="description" content="Transform into a Python pro with our course!" />

        <meta name="keywords" content="Building an Online Retailer Segmentation Project" />
        <meta name="description" content="Boost your skills with a hands-on project!" />

        <meta name="keywords" content="Building Your Own Text to Speech System: Hands-On Project" />
        <meta name="description" content="Create your own Text to Speech system now!" />

        <meta name="keywords" content="Building Intelligent Systems Using Visdum AI" />
        <meta name="description" content="Explore AI intelligence with Visdum courses!" />

        <meta name="keywords" content="Fine-tuned Text Summarization Using PyTorch" />
        <meta name="description" content="Master text summarization with PyTorch!" />


      </Helmet>
      <div className="bg-green-300 p-2 rounded-lg mb-0 m-2">
        <h5 className="text-center font-semibold">
          Unlock 10% instant savings on course bundles with code 'SA100'! 📈
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
