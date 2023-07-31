import React, { useMemo } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "../components/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import CourseCard from "../components/CourseCard";
import { Header } from "../components/Header";

import comingSoon from "../assests/comingSoon.png";

const CourseBundles = () => {
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
          Powerful Course Bundles, Unbeatable Value
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="leading-normal mx-auto mb-2 mt-4 text-center sm:w-7/12 lg:w-6/12"
        >
          Maximize Your Learning Potential with Our Course Bundles - Save Big on
          Knowledge!
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="w-full flex flex-col py-4 pb-20">
        <motion.div variants={scrollAnimation}>
          <div className="flex justify-center gap-5 flex-wrap">
            {/* <CourseCard />
            <CourseCard />
            <CourseCard /> */}
            {/* <h1 className="text-3xl font-bold">Coming Soon....</h1> */}
            <CourseCard
              image="https://courses.successanalytics.in/_next/image?url=https%3A%2F%2Fdz8fbjd9gwp2s.cloudfront.net%2Fcourses%2F64c78b99e4b0537c222335f2%2Fcover%2F2023-07-31T10%3A23%3A39.828Z.jpg&w=1920&q=75"
              title="Ultimate Course Bundle Data Science Projects"
              desc="Average salary of an employee who knows Data Science is ₹13lakhs."
              resLink="https://www.glassdoor.co.in/Salaries/data-scientist-salary-SRCH_KO0,14.htm"
              currPrice="Rs. 3999"
              actPrice="Rs. 8000"
              off="50"
              link="https://courses.successanalytics.in/courses/Ultimate-Course-Bundle-Data-Science-Projects-64c78b99e4b0537c222335f2-64c78b99e4b0537c222335f2"
            ></CourseCard>
          </div>
          {/* <div className="flex justify-center">
            <img src={comingSoon} alt="coming soon" />
          </div> */}
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
};

export default CourseBundles;
