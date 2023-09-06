import React, { useMemo, useState, useEffect } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "../components/getScrollAnimation";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import CourseCard from "../components/CourseCard";
import { Header } from "../components/Header";

import comingSoon from "../assests/comingSoon.png";

import { Helmet } from "react-helmet";

import useGoogleSheets from 'use-google-sheets';
import { Bars } from 'react-loader-spinner'

const CourseBundles = () => {
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
        setAllCourses(data[2].data)
      }
    }
    getData()
  }, [data])

  return (
    <>
      <Helmet>
        <title>Success Analytics | Course Bundles</title>
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
            {/* <CourseCard
              image="https://dz8fbjd9gwp2s.cloudfront.net/courses/64f5e9b4e4b0942b12d3b507/cover/2023-09-05T05:36:09.129Z.jpg"
              title="Ultimate Course Bundle + Live Classes"
              desc="Average salary of an employee who knows Data Science is ₹13lakhs."
              resLink="https://www.glassdoor.co.in/Salaries/data-scientist-salary-SRCH_KO0,14.htm"
              currPrice="Rs. 5999"
              actPrice="Rs. 12000"
              off="50"
              link="https://courses.successanalytics.in/courses/Course-Bundle--Live-Classes-64f5e9b4e4b0942b12d3b507"
            ></CourseCard>
            <CourseCard
              image="https://courses.successanalytics.in/_next/image?url=https%3A%2F%2Fdz8fbjd9gwp2s.cloudfront.net%2Fcourses%2F64c78b99e4b0537c222335f2%2Fcover%2F2023-07-31T10%3A23%3A39.828Z.jpg&w=1920&q=75"
              title="Ultimate Course Bundle Data Science Projects"
              desc="Average salary of an employee who knows Data Science is ₹13lakhs."
              resLink="https://www.glassdoor.co.in/Salaries/data-scientist-salary-SRCH_KO0,14.htm"
              currPrice="Rs. 3999"
              actPrice="Rs. 5000"
              off="20"
              link="https://courses.successanalytics.in/courses/Ultimate-Course-Bundle-Data-Science-Projects-64c78b99e4b0537c222335f2-64c78b99e4b0537c222335f2"
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
