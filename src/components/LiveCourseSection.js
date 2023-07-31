import React, { useMemo } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "./getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import CourseCard from "./CourseCard";

import comingSoon from "../assests/comingSoon.png";

const LiveCourseSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal text-center mx-auto"
        >
          Live Learning, Real-time Growth{" "}
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="leading-normal mx-auto mb-2 mt-4 text-center sm:w-7/12 lg:w-6/12"
        >
          Experience the Power of Interactive Education - Join Our Live Courses
          Today!
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
              image="https://dz8fbjd9gwp2s.cloudfront.net/courses/64c237a5e4b03fc7fc323a8a/64c237a5e4b03fc7fc323a8a_scaled_cover.jpg?v=1"
              title="NLP (Natural Language Processing) Bootcamp"
              desc="Average salary of an employee who knows NLP is ₹8lakhs."
              resLink="https://www.ambitionbox.com/profile/nlp-engineer-salary"
              currPrice="Rs. 4000"
              actPrice="Rs. 8000"
              off="50"
              link="https://courses.successanalytics.in/courses/NLP-Natural-Language-Processing-Bootcamp-64c237a5e4b03fc7fc323a8a-64c237a5e4b03fc7fc323a8a"
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

export default LiveCourseSection;
