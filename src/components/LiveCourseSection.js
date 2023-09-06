import React, { useMemo, useEffect, useState } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "./getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import CourseCard from "./CourseCard";
import useGoogleSheets from 'use-google-sheets';
import comingSoon from "../assests/comingSoon.png";

const LiveCourseSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [allCourses, setAllCourses] = useState([])

  const { data, loading, error } = useGoogleSheets({
    apiKey: 'AIzaSyBb4-zdnRTJyJIcXKh8sdkFK-HX7uSL3P0',
    sheetId: '1LW0ltz_brJTuvJLjKCt-W23qJboxrHd8_8Yd1gwBOBs',
  });

  useEffect(() => {
    console.log(data);
    async function getData() {
      if (data[3]) {
        setAllCourses(data[3].data)
      }
    }
    getData()
  }, [data])

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
            {/* <CourseCard
              image="https://successanalytics.graphy.com/_next/image?url=https%3A%2F%2Fdz8fbjd9gwp2s.cloudfront.net%2Fcourses%2F64d4829ee4b076174b19a519%2Fcover%2F2023-09-01T13%3A10%3A55.743Z.jpg&w=1920&q=75"
              title="Machine Learning Project Bootcamp [ Live Coding ]"
              desc="Employees who knows Machine Learning earn an average of ₹36.4lakhs."
              resLink="https://6figr.com/in/salary/machine-learning-engineer--t"
              currPrice="Rs. 2500"
              actPrice="Rs. 5000"
              off="50"
              link="https://courses.successanalytics.in/courses/Machine-Learning-Project-Bootcamp--Live-Coding--64d4829ee4b076174b19a519"
            ></CourseCard>
            <CourseCard
              image="https://dz8fbjd9gwp2s.cloudfront.net/courses/64c237a5e4b03fc7fc323a8a/cover/2023-08-03T14:37:55.533Z.jpg"
              title="NLP (Natural Language Processing) Bootcamp"
              desc="Average salary of an employee who knows NLP is ₹8lakhs."
              resLink="https://www.ambitionbox.com/profile/nlp-engineer-salary"
              currPrice="Rs. 3999"
              actPrice="Rs. 5000"
              off="20"
              link="https://courses.successanalytics.in/courses/NLP-Natural-Language-Processing-Bootcamp-64c237a5e4b03fc7fc323a8a-64c237a5e4b03fc7fc323a8a"
            ></CourseCard> */}

            {
              allCourses.map(data => <CourseCard
                image={data.thumbnail}
                title={data.course_name}
                desc={data.info_text}
                resLink={data.info_link}
                currPrice={`Rs. ${data.selling_price}`}
                actPrice={data.actual_price}
                off={data.discount}
                link={data.graphy_link}
              ></CourseCard>)
            }

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
