import React from 'react'

import { Header } from "../components/Header";
import { Helmet } from "react-helmet";

import { ArrowRight } from 'lucide-react'
import { Footer } from '../components/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Affiliate = () => {
    const notify = () => toast.success("Form Submitted Successfully !!");
    return (
        <>
            <div>
                <Helmet>
                    <title>Success Analytics | Affiliate</title>
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
                <ToastContainer />
                <section className='m-10 max-w-7xl flex justify-center mx-auto w-full'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 mx-10">
                        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full rounded-md object-cover object-top opacity-60"
                                    src="https://media.istockphoto.com/id/1440429425/vector/affiliate-marketing-concept.jpg?s=612x612&w=0&k=20&c=ySKU4N1eJYRa1-oHUah7O0bJV6mpzcgrDsiv1ZOUYnc="
                                    alt=""
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="relative">
                                <div className="w-full max-w-xl ">
                                    <h3 className="text-4xl font-bold text-white">
                                        Earn With Success Analytics..
                                    </h3>
                                    <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> Fill Up The Form & Get Onboard</span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> Recieve Coupon Code Within 24 Hrs </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> Share With Your Friends & Family. </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> Your Friends Get Instant 25% Discount On All Courses. </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> You Get 25% On Each Purchase. </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                                                <svg
                                                    className="h-3.5 w-3.5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <span className="text-lg font-medium text-white"> Recieve Payouts Every Wednesday's. </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Join Our Affiliate Program.</h2>

                                <form onSubmit={notify} action="https://api.sheetmonkey.io/form/uvcbL8tTSCozu8AhyaSeNx" method="POST" className="mt-8">
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                                {' '}
                                                Name{' '}
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="text"
                                                    name='Name'
                                                    placeholder="Enter Your Name"
                                                    required
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                                    {' '}
                                                    Email{' '}
                                                </label>

                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="email"
                                                    name='Email'
                                                    placeholder="Enter Your Email"
                                                    required
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="inline-flex w-full items-center justify-center rounded-md bg-[#001732] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#001732]/80"
                                            >
                                                Start Earning<ArrowRight className="ml-2" size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </section >
                <Footer />
            </div >
        </>
    )
}

export default Affiliate