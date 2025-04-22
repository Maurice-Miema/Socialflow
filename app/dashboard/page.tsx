'use client'

import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePublic } from "react-icons/md";
import { GiEngagementRing } from "react-icons/gi";
import { IoAddSharp } from "react-icons/io5";
import EngagementOverview from "../components/EngagementOverview"
import Overview from '../components/Overview';
import { motion } from 'framer-motion';
import Link from 'next/link'

function Dashboardpage() {


    // animation
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 * i,
                duration: 0.4,
                ease: "easeOut"
            }
        }),
    };

    return (
        <>
            <div className='mb-2 flex items-center'>
                <h1 className='text-2xl'>Dashboard</h1>
                <div className="flex justify-end w-full">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className='sm:px-3 sm:py-2 px-2 py-1 rounded-md bg-black text-white max-sm:text-md flex items-center gap-2 cursor-pointer'
                        >
                            Facebook
                        </button>

                        <button
                            type="button"
                            className='sm:px-3 sm:py-2 px-2 py-1 rounded-md bg-black text-white max-sm:text-md flex items-center gap-2 cursor-pointer'
                        >
                            LinkedIn
                        </button>

                        {/* <Link 
                            href="/dashboard"
                            type="button"
                            className='sm:px-3 sm:py-2 px-2 py-1 rounded-md bg-black text-white max-sm:text-md flex items-center gap-2 cursor-pointer'
                        >
                            < IoAddSharp size={20} />
                            Creer un Post
                        </Link> */}
                    </div>
                </div>
            </div>

            <section className='lg:flex lg:gap-2'>
                {/* left */}
                <section className='lg:w-[70%]'>
                    <div className="sm:flex gap-4 w-full mb-3">
                        {/* item 1*/}
                        <motion.div
                            custom={0}
                            className="px-4 py-3 rounded-xl w-full bg-[#10b981] text-white md:mb-0 mb-2"
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                        >
                            <div className='mb-8'>
                                <h1 className='text-md'>Total de Posts</h1>
                            </div>

                            <div className="flex items-end-safe">
                                <div className="w-1/2">
                                    <h1 className='font-bold text-4xl'>203</h1>
                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <MdOutlinePublic size={20}/>
                                </div>
                            </div>
                        </motion.div>
                        {/* end */}

                        {/* item 2*/}
                        <motion.div 
                            className="px-4 py-3 rounded-xl w-full bg-black text-white md:mb-0 mb-2"
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            custom={1}
                        >
                            <div className='mb-8'>
                                <h1 className='text-md'>Facebook Post</h1>
                            </div>

                            <div className="flex items-end-safe">
                                <div className="w-1/2">
                                    <h1 className='font-bold text-4xl'>100</h1>
                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <FaFacebook size={20}/>
                                </div>
                            </div>
                        </motion.div>
                        {/* end */}

                        {/* item 3*/}
                        <motion.div 
                            className="px-4 py-3 rounded-xl w-full bg-white md:mb-0 mb-2"
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            custom={3}
                        >
                            <div className='mb-8'>
                                <h1 className='text-md'>LinkedIn Post</h1>
                            </div>

                            <div className="flex items-end-safe">
                                <div className="w-1/2">
                                    <h1 className='font-bold text-4xl'>103</h1>
                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <FaLinkedin size={20}/>
                                </div>
                            </div>
                        </motion.div>
                        {/* end */}

                        {/* item 4*/}
                        <motion.div
                            className="px-4 py-3 rounded-xl w-full bg-white md:mb-0 mb-2"
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            custom={4}
                        >
                            <div className='mb-8'>
                                <h1 className='text-md'>Total Engagement</h1>
                            </div>

                            <div className="flex items-end-safe">
                                <div className="w-1/2">
                                    <h1 className='font-bold text-4xl'>103</h1>
                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <GiEngagementRing size={20}/>
                                </div>
                            </div>
                        </motion.div>
                        {/* end */}
                    </div>

                    <div className="sm:flex gap-2 lg:mb-0 mb-3">
                        <motion.div
                            className="bg-white rounded-xl p-4 sm:h-[52vh] h-[60vh] overflow-auto sm:w-1/2 sm:mb-0 mb-3"
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            custom={0}
                        >
                            <div className='pb-2'>
                                <h1 className='font-semibold'>Engagement Overview</h1>
                            </div>
                            {/* engagementOverview */}
                            < EngagementOverview /> 
                        </motion.div>

                        <motion.div
                            className="bg-white rounded-xl p-4 sm:h-[52vh] h-[60vh] overflow-auto sm:w-1/2"
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            custom={3}
                        >
                            <div className='pb-2'>
                                <h1 className='font-semibold'>Facebook, LinkedIn Overview</h1>
                            </div>

                            {/* facebook et linkedIn */}
                            < Overview />
                        </motion.div>
                    </div>
                </section>

                {/* rigth */}
                <section className='lg:w-[30%]'>
                    <motion.div 
                        className='bg-white rounded-xl p-4 h-[72vh] overflow-auto'
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                        custom={5}
                    >
                        <div className='pb-2'>
                            <h1 className='font-semibold'>Post Recent </h1>
                        </div>

                        <div className="border border-gray-200 px-3 py-2 rounded-lg mb-2">
                            <p className='font-semibold pb-2 text-sm'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae error veritatis reprehenderit.
                            </p>

                            <div className="flex items-center">
                                <h1 className='text-gray-500'>Aujourd'hui</h1>
                                <div className="flex justify-end w-full">
                                    <FaLinkedin size={20}/>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 px-3 py-2 rounded-lg mb-2">
                            <p className='font-semibold pb-2 text-sm'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae error veritatis reprehenderit.
                            </p>

                            <div className="flex items-center">
                                <h1 className='text-gray-500'>Aujourd'hui</h1>
                                <div className="flex justify-end w-full">
                                    <FaFacebook size={20}/>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 px-3 py-2 rounded-lg mb-2">
                            <p className='font-semibold pb-2 text-sm'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae error veritatis reprehenderit.
                            </p>

                            <div className="flex items-center">
                                <h1 className='text-gray-500'>Aujourd'hui</h1>
                                <div className="flex justify-end w-full">
                                    <FaLinkedin size={20}/>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </section>
        </>
    )
}

export default Dashboardpage;
