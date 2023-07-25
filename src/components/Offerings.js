import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "./getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { useNavigate } from "react-router-dom";

import { ArrowRight, Check } from "lucide-react";

import freeCourseImage from "../assests/freecourseimage.png";
import proCourseImage from "../assests/proCourseImage.png";
import bundleCourseImage from "../assests/bundleImage.png";

export const Offerings = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const navigate = useNavigate();
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              What We Offer ?
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              We also understand that the world of education is constantly
              evolving, and we are committed to keeping up with the latest
              trends and technologies to ensure that we provide cutting-edge
              solutions to our students.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-2">
            <ScrollAnimationWrapper className="flex justify-center text-xs">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0">
                  <img
                    src={freeCourseImage}
                    alt="Premium Plan"
                    className="rounded-full w-40 h-40"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2">
                  Free Courses
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Expert-Led Hybrid High Quality Recorded Classes.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Wide Range Of Topics.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Flexible Learning.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Interactive Learning Experience.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Certification of completion.
                  </li>
                </ul>
                <div className="py-3 w-[100%]">
                  <button
                    type="button"
                    onClick={() => navigate("/free-courses")}
                    className="w-[100%] inline-flex justify-center items-center rounded-md bg-[#001732] px-3 py-2 text-sm font-semibold text-[#fff] hover:bg-[#001732]/80"
                  >
                    View Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center text-xs">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0">
                  <img
                    src={proCourseImage}
                    alt="Premium Plan"
                    className="rounded-full w-40 h-40"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2">
                  Pro Courses{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Expert-Led Hybrid [ Live + Recorded ] Classes.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Free Mentoring Sessions.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Comprehensive End-To-End Curriculum.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Hands-On Practical Training.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Access To Exclusive Resources and Tools.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Certification and Recognition.{" "}
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Resume Building & Referrals.{" "}
                  </li>
                </ul>
                <div className="py-3 w-[100%]">
                  <button
                    type="button"
                    onClick={() => navigate("/pro-courses")}
                    className="w-[100%] inline-flex justify-center items-center rounded-md bg-[#001732] px-3 py-2 text-sm font-semibold text-[#fff] hover:bg-[#001732]/80"
                  >
                    View Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center text-xs">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0">
                  <img
                    src={bundleCourseImage}
                    alt="Premium Plan"
                    className="rounded-full w-40 h-40"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2">
                  Course Bundles{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Expert-Led Hybrid [ Live + Recorded ] Classes.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Free Mentoring Sessions.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Curated Learning Paths.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Cost-Effective Pricing.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Diverse Range of Topics.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    New Projects Every Month.
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Certification and Recognition.{" "}
                  </li>
                  <li className="relative check custom-list my-2 flex gap-2 items-center">
                    <Check color="#28d025" />
                    Resume Building & Referrals.{" "}
                  </li>
                </ul>
                <div className="py-3 w-[100%]">
                  <button
                    type="button"
                    onClick={() => navigate("/course-bundles")}
                    className="w-[100%] inline-flex justify-center items-center rounded-md bg-[#001732] px-3 py-2 text-sm font-semibold text-[#fff] hover:bg-[#001732]/80"
                  >
                    View Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};
