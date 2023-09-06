import React from "react";
import { MapPin } from "lucide-react";

import { Header } from "../components/Header";

import logo from "../assests/SALOGO.png";

import { Helmet } from "react-helmet";

const locations = [
  {
    title: "Bengaluru office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
  },
  {
    title: "Head office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN",
  },
  {
    title: "Karnataka office",
    timings: "Mon-Sat 9am to 5pm.",
    address:
      "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
  },
];

const users = [
  // {
  //   name: "Gabrielle Fernandez",
  //   image:
  //     "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  //   position: "Marketing Lead",
  // },
];

export function About() {
  return (
    <>  <Helmet>
      <title>Success Analytics | About</title>
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
      <div className="-mt-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Hero Map */}
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                About the company
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              Made with love, right here in India
            </p>
            <div className="flex justify-center py-4">
              <img src={logo} alt="Logo" className="w-[300px]" />
            </div>
            <p className="text-base text-gray-600 md:text-xl">
              Welcome to Success Analytics, where we are dedicated to
              revolutionizing the way we learn. As a leading edtech company, we
              strive to bring a transformative shift in traditional teaching
              methods by harnessing the power of innovative technologies. Our
              mission is to create personalized learning experiences that
              empower individuals of all ages and backgrounds to reach their
              full potential.
              <br />
              <br />
              At Success Analytics, we believe that education should be
              accessible to everyone, regardless of their circumstances. Our
              platform is designed to break down barriers and provide an
              inclusive learning environment where students can thrive. Through
              cutting-edge tools and features, we have reimagined the learning
              process, making it interactive, engaging, and tailored to each
              learner's needs.
            </p>
          </div>
          <div className="w-full space-y-4">
            <img
              className="h-[200px] w-full rounded-xl object-cover md:h-full"
              src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
              alt=""
            />
          </div>
          {/* locations */}
          {/* <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
            {locations.map((location) => (
              <div
                key={location.title}
                className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5"
              >
                <MapPin className="h-5 w-5" />
                <p className="w-full text-xl font-semibold  text-gray-900">
                  {location.title}
                </p>
                <p className="w-full text-base text-gray-700">
                  {location.timings}
                </p>
                <p className="text-sm font-medium">{location.address}</p>
              </div>
            ))}
          </div> */}
          <hr className="mt-20" />
          {/* greetings */}
          <div className="mt-16 flex items-center">
            <div className="space-y-6 md:w-3/4">
              <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
                <p className="text-xs font-semibold leading-normal md:text-sm">
                  Join Us &rarr;
                </p>
              </div>
              <p className="text-3xl font-bold text-gray-900 md:text-4xl">
                Meet our team
              </p>
              <p className=" md:text-xl">
                Our team consists of passionate educators, skilled
                technologists, and visionary leaders dedicated to transforming
                the future of education. Together, we work tirelessly to create
                an inclusive learning ecosystem that empowers individuals to
                excel and embrace a lifelong love for learning.
              </p>
              <div></div>
            </div>
          </div>
          {/* TEAM */}
          <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
            {users.map((user) => (
              <div className="rounded-md border" key={user.name}>
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-[300px] w-full rounded-lg object-cover "
                />
                <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
                  {user.name}
                </p>
                <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                  {user.position}
                </p>
              </div>
            ))}
          </div>
          {/* Hiring Banner */}
          {/* <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
            <div className="space-y-6">
              <p className="text-sm font-semibold md:text-base">
                Join our team &rarr;
              </p>
              <p className="text-3xl font-bold md:text-4xl">
                We&apos;re just getting started
              </p>
              <p className="text-base text-gray-600 md:text-lg">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Join Now
              </button>
            </div>
            <div className="md:mt-o mt-10 w-full">
              <img
                src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt="Getting Started"
                className="rounded-lg"
              />
            </div>
          </div> */}
        </div>
        <hr className="mt-6" />
      </div>
    </>
  );
}
