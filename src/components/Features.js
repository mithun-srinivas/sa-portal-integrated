import React, { useMemo } from "react";
import { motion } from "framer-motion";

import getScrollAnimation from "./getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Immersive Project-Based Learning Curriculum.",
  "Expert and Experienced Faculty.",
  "Flexible Learning from Anywhere.",
  "Industry-Grade Online Certifications.",
  "Real-World Application and Skills Development.",
];

const Features = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2">
        <ScrollAnimationWrapper className="flex w-full justify-end animate-wiggle animate-infinite animate-normal p-10">
          <motion.div className="w-[100%]" variants={scrollAnimation}>
            <img
              src="https://sa-web-portal.vercel.app/_next/image?url=%2Fassets%2Fcustom%2Ffeatures.png&w=2048&q=100"
              alt="VPN Illustrasi"
              className="w-[100%]"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col items-start justify-center w-full p-10"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium text-black-600">
              Next-Level Learning Solutions
            </h3>
            <p className="my-2 text-black-500">
              We believe that we are the best fit for your EdTech website
              because we offer tailored solutions that cater to the specific
              needs of learners.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8 ">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list my-3"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <p className="flex gap-3">
                    <CheckCircle2 color="#28d025" /> {feature}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Features;
