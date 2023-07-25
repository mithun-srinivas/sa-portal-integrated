import React from "react";
import "../typewriter.css";

import { UserCheck2, School, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImage from "../assests/heroImage.png";

const listUser = [
  {
    name: "Students Enrolled",
    number: "2350",
    icon: <UserCheck2 />,
  },
  {
    name: "Courses",
    number: "20",
    icon: <School />,
  },
  {
    name: "Projects",
    number: "50",
    icon: <Briefcase />,
  },
];

const Hero = () => {
  return (
    <div className="mx-auto flex-col max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <div className="md:grid grid-cols-2 gap-5 py-5 px-5">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <div className="type-container lg:py-10 lg:pt-10">
            <span id="typewriter" className="type sm:text-5xl text-2xl">
              Revolutionizing the way we Learn.
            </span>
          </div>
          <p className="text-black-500 mb-10">
            Our edtech website is dedicated to revolutionizing the way we learn.
            With the help of innovative technologies, we are transforming
            traditional teaching methods and creating personalized learning
            experiences for all. Our platform offers interactive tools, social
            learning features, and the flexibility to learn at your own pace,
            making education accessible to everyone.
          </p>
          <div className="animate-bounce animate-infinite animate-normal animate-fill-forwards">
            <Link to={"https://nas.io/success-analytics"} target="_blank">
              <button
                type="button"
                className="rounded-md bg-[#001732] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Start Learning
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-full p-10 animate-wiggle animate-infinite">
          <img src={HeroImage} alt="Hero Image" className="w-[100%]" />
        </div>
      </div>

      <div className="md:grid grid-cols-3 md:py-16 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100">
        {listUser.map((listUsers, index) => (
          <div className="flex mx-auto sm:w-auto p-5">
            <div className="flex items-center justify-center bg-gray-300 w-12 h-12 mr-6 rounded-full ">
              {listUsers.icon}
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-black-600 font-bold">
                {listUsers.number}+
              </p>
              <p className="text-lg text-black-500">{listUsers.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
