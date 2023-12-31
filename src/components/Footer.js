import React from "react";

import logo from "../assests/SALOGO.png";

export function Footer() {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <img src={logo} alt="Logo" className="w-20" />
              </div>
              <div>
                <p>Our platform offers interactive tools, social learning features, and the flexibility to learn at your own pace, making education accessible to everyone.</p>
              </div>
              <div>
                <p className="mb-4  text-base font-medium">Success Analytics</p>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2023. All Rights Reserved by Success
                  Analytics.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="/product"
                  >
                    Product
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="https://webinar.successanalytics.in/"
                    target="_blank"
                  >
                    Webinar
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Social
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    YouTube
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Whatsapp Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                About
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    target="_blank"
                    href="https://courses.successanalytics.in/termsofuse"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    target="_blank"
                    href="https://courses.successanalytics.in/privacypolicy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    target="_blank"
                    href="https://courses.successanalytics.in/refundpolicy"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
