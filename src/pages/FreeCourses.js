import React, { useMemo, useState, useEffect } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "../components/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import CourseCard from "../components/CourseCard";
import { Header } from "../components/Header";

import useGoogleSheets from 'use-google-sheets';
import { Bars } from 'react-loader-spinner'

const FreeCourseSection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [allCourses, setAllCourses] = useState([])

  const { data, loading, error } = useGoogleSheets({
    apiKey: 'AIzaSyBb4-zdnRTJyJIcXKh8sdkFK-HX7uSL3P0',
    sheetId: '1LW0ltz_brJTuvJLjKCt-W23qJboxrHd8_8Yd1gwBOBs',
  });

  useEffect(() => {
    console.log(data);
    async function getData() {
      if (data[1]) {
        setAllCourses(data[1].data)
      }
    }
    getData()
  }, [data])


  return (
    <>
      <div className="bg-green-300 p-2 rounded-lg mb-0 m-2">
        <h5 className="text-center font-semibold">
          Unlock 10% instant savings on course bundles with code 'SA100'! 📈
        </h5>
      </div>
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
      <div className="flex justify-center gap-5 flex-wrap">
        {/* <CourseCard
          image="https://courses.successanalytics.in/_next/image?url=https%3A%2F%2Fdz8fbjd9gwp2s.cloudfront.net%2Fcourses%2F64d5b3ffe4b09357eb8863d5%2Fcover%2F2023-08-13T04%3A29%3A54.924Z.jpg&w=1920&q=75"
          title="Job Search Program ( Data Science / Data Analytics / Big Data )"
          desc="Complete Job Search Program"
          resLink="https://successanalytics.graphy.com/courses/Job-Search-Program--Data-Science--Data-Analytics--Big-Data--64d5b3ffe4b09357eb8863d5-64d5b3ffe4b09357eb8863d5"
          currPrice="FREE"
          actPrice="Rs. 2000"
          off="100"
          link="https://successanalytics.graphy.com/courses/Job-Search-Program--Data-Science--Data-Analytics--Big-Data--64d5b3ffe4b09357eb8863d5-64d5b3ffe4b09357eb8863d5"
        ></CourseCard>
        <CourseCard
          image="https://dz8fbjd9gwp2s.cloudfront.net/courses/64bff7c8e4b0c90453dc8ab2/64bff7c8e4b0c90453dc8ab2_scaled_cover.jpg?v=2"
          title="Complete Book Recommendation System Project"
          desc="Average salary of an employee who knows Recommendation System is ₹18.8lakhs."
          resLink="https://6figr.com/in/salary/recommendation-system--s"
          currPrice="FREE"
          actPrice="Rs. 2000"
          off="100"
          link="https://courses.successanalytics.in/courses/Complete-Book-Recommendation-System-Project-64bff7c8e4b0c90453dc8ab2"
        ></CourseCard>
        <CourseCard
          image="https://dz8fbjd9gwp2s.cloudfront.net/courses/64c095fce4b0ead932e6670e/64c095fce4b0ead932e6670e_scaled_cover.jpg?v=1"
          title="Real-World Machine Learning Project."
          desc="Average salary of Machine Learning Engineer in India is ₹6.2 lakhs."
          resLink="https://www.ambitionbox.com/profile/machine-learning-engineer-salary"
          currPrice="FREE"
          actPrice="Rs. 2000"
          off="100"
          link="https://successanalytics.graphy.com/courses/Machine-Learning-Project-64c095fce4b0ead932e6670e"
        ></CourseCard> */}

        {
          loading ?

            <Bars
              height="80"
              width="80"
              color="#001732"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /> : <></>
        }

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
        {/* <h1 className="text-3xl font-bold">Coming Soon....</h1> */}
      </div>
    </>
  );
};

export default FreeCourseSection;
