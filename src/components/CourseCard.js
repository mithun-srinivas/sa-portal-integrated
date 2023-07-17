import React from "react";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <div className="px-3 flex items-stretch">
      <div className="w-[300px] rounded-md border">
        <img
          src="https://mithun-srinivas.github.io/Edtech_Assests/ML_Project.jpg"
          alt="Laptop"
          className=" w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            Handson Machine Learning Projects Bootcamp
          </h1>
          <p className="mt-3 text-xs text-gray-600 text-start">
            Successful completion of this course could land you an average
            placement offering Rs. 6.2 LPA.{" "}
            <a target="_blank" className="text-[#2827CC]">
              Read more.
            </a>
          </p>

          <div className="mt-4">
            <h1 className="text-xl">
              Rs. 3500 <del>5000</del> /-{" "}
              <span className="text-sm bg-orange-500 p-1 rounded-md">
                50% off
              </span>
            </h1>
          </div>
          <Link to="https://sa3051.graphy.com/courses/Industry-Ready-Data-Analytics-Bootcamp-64b559dae4b0ebf3ebc67aa4">
            <button
              type="button"
              // onClick={() => router.push("/courseDetails")}
              className="mt-4 w-full rounded-sm bg-[#000] px-2 py-1.5 text-sm font-semibold text-[#fff] shadow-sm hover:bg-[#000]/80"
            >
              View Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
