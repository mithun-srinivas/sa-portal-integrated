import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  image,
  title,
  desc,
  resLink,
  currPrice,
  actPrice,
  off,
  link,
}) => {
  return (
    <div className="px-3 flex items-stretch">
      <div className="w-full px-5 max-w-[350px] rounded-md border">
        <img src={image} alt="Laptop" className=" w-full rounded-md py-3" />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {title}
          </h1>
          <p className="mt-3 text-xs text-gray-600 text-start">
            {desc}&nbsp;
            <a href={resLink} target="_blank" className="text-[#2827CC]">
              Know more
            </a>
          </p>

          <div className="mt-4">
            <h1 className="text-xl">
              {currPrice} <del>{actPrice}</del> /-{" "}
              <span className="text-sm bg-orange-500 p-1 rounded-md">
                {off}% off
              </span>
            </h1>
          </div>
          <Link to={link}>
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
