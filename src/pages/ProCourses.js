import React, { useMemo } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "../components/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import CourseCard from "../components/CourseCard";
import { Header } from "../components/Header";

// import comingSoon from "../assests/comingSoon.png";

const ProCourseSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <div className="bg-green-300 p-2 rounded-lg mb-0 m-2">
        <h5 className="text-center font-semibold">
          Ready, set, save! Get a massive 10% off with code 'SA100' on all our
          course bundles! ! 📈💯{" "}
        </h5>
      </div>
      <Header />
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal text-center mx-auto"
        >
          Elevate Your Expertise with Pro Courses{" "}
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="leading-normal mx-auto mb-2 mt-4 text-center sm:w-7/12 lg:w-6/12"
        >
          Master Your Craft with Proven Professionals - Take Your Skills to the
          Next Level!
        </motion.p>
      </ScrollAnimationWrapper>
      <div className="flex justify-center gap-5 flex-wrap">
        <CourseCard
          image="https://dz8fbjd9gwp2s.cloudfront.net/courses/64c67e14e4b0ec2585efb130/64c67e14e4b0ec2585efb130_scaled_cover.jpg?v=1"
          title="Building an Online Retailer Segmentation Project"
          desc="Employees who knows Market Segmentation earn an average of ₹21.8lakhs."
          resLink="https://6figr.com/in/salary/market-segmentation--s"
          currPrice="Rs. 499"
          actPrice="Rs. 2000"
          off="75"
          link="https://courses.successanalytics.in/courses/Machine-Learning-for-E-commerce-Building-an-Online-Retailer-Segmentation-Project-64c67e14e4b0ec2585efb130-64c67e14e4b0ec2585efb130"
        ></CourseCard>
        <CourseCard
          image="https://dz8fbjd9gwp2s.cloudfront.net/courses/64c67da8e4b0ec2585efb11f/64c67da8e4b0ec2585efb11f_scaled_cover.jpg?v=1"
          title="Building Your Own Text to Speech System: Hands-On Project"
          desc="Employees who knows TTS earn an average of ₹20lakhs."
          resLink="https://www.ambitionbox.com/profile/tts-employ-salary"
          currPrice="Rs. 499"
          actPrice="Rs. 2000"
          off="75"
          link="https://courses.successanalytics.in/courses/Building-Your-Own-Text-to-Speech-System-Hands-On-Project-64c67da8e4b0ec2585efb11f"
        ></CourseCard>
        <CourseCard
          image="https://dz8fbjd9gwp2s.cloudfront.net/courses/64c5198fe4b082a06d080761/64c5198fe4b082a06d080761_scaled_cover.jpg?v=1"
          title="Building Intelligent Systems Using Visdum AI"
          desc="Employees who knows Visdum AI earn an average of ₹11lakhs."
          resLink="https://www.glassdoor.co.in/Salaries/ai-engineer-salary-SRCH_KO0,11.htm"
          currPrice="Rs. 499"
          actPrice="Rs. 2000"
          off="75"
          link="https://courses.successanalytics.in/courses/Building-Intelligent-Systems-Using-Visdum-AI-64c5198fe4b082a06d080761-64c5198fe4b082a06d080761"
        ></CourseCard>
        <CourseCard
          image="https://dz8fbjd9gwp2s.cloudfront.net/courses/64c50ea7e4b029299830813a/64c50ea7e4b029299830813a_scaled_cover.jpg?v=1"
          title="Fine-tuned Text Summarization Using PyTorch"
          desc="Employees who knows PyTorch earn an average of ₹23.5lakhs."
          resLink="https://6figr.com/in/salary/pytorch--s"
          currPrice="Rs. 499"
          actPrice="Rs. 2000"
          off="75"
          link="https://courses.successanalytics.in/courses/Building-Intelligent-Systems-Using-Visdum-AI-64c5198fe4b082a06d080761-64c5198fe4b082a06d080761"
        ></CourseCard>
      </div>
      {/* <div className="flex justify-center">
            <img src={comingSoon} alt="coming soon" />
          </div> */}
    </>
  );
};

export default ProCourseSection;
