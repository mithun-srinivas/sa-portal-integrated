import React, { useMemo } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "./getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import CourseCard from "./CourseCard";

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
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </>
  );
};

export default LiveCourseSection;
