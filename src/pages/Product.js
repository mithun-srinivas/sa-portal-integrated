import React from "react";
import { Header } from "../components/Header";

import { Helmet } from "react-helmet";

export function Product() {
  return (
    <>
      <Helmet>
        <title>Success Analytics | Product</title>
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
      <section className="py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl  text-center">
            <div className="isolate flex justify-center -space-x-2">
              <img
                className="relative z-30 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
              />
              <img
                className="relative z-20 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
                alt="Guillermo_Rauch"
              />
              <img
                className="relative z-10 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                alt="Lee_Robinson"
              />
              <img
                className="relative z-0 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                alt="Delba"
              />
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
              Coming <span className="border-b-8 border-yellow-300">Soon</span>{" "}
              .
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>

            <button
              type="button"
              className="mt-8 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join WaitList
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
