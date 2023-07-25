import React, { useMemo } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "../components/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import CourseCard from "../components/CourseCard";
import { Header } from "../components/Header";

const FreeCourseSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <>
      <Header />
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal text-center mx-auto"
        >
          Unlock Knowledge for Free{" "}
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="leading-normal mx-auto mb-2 mt-4 text-center sm:w-7/12 lg:w-6/12"
        >
          Expand Your Horizons with Our Complimentary Courses - Learn without
          Limits!
        </motion.p>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="w-full flex flex-col py-4 pb-20">
        <motion.div variants={scrollAnimation}>
          <div className="flex justify-center gap-5 flex-wrap">
            <CourseCard
              image="https://courses.successanalytics.in/_next/image?url=https%3A%2F%2Fdz8fbjd9gwp2s.cloudfront.net%2Fcourses%2F64bff7c8e4b0c90453dc8ab2%2Fcover%2F2023-07-25T16%3A28%3A53.768Z.jpg&w=1920&q=75"
              title="Complete Book Recommendation System Project"
              desc="Average salary of an employee who knows Recommendation System is ₹18.8lakhs."
              resLink="https://6figr.com/in/salary/recommendation-system--s"
              currPrice="FREE"
              actPrice="Rs. 2000"
              off="100"
              link="https://courses.successanalytics.in/courses/Complete-Book-Recommendation-System-Project-64bff7c8e4b0c90453dc8ab2"
            ></CourseCard>
            {/* <h1 className="text-3xl font-bold">Coming Soon....</h1> */}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
};

export default FreeCourseSection;
