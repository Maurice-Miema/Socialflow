import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePublic } from "react-icons/md";
import { GiEngagementRing } from "react-icons/gi";
import { IoAddSharp } from "react-icons/io5";
// import Historiquepage from './historique/page';

function Dashboardpage() {
    return (
        <>
            <div className='mb-2 flex items-center'>
                <h1 className='text-2xl'>Dashboard</h1>
                <div className="flex justify-end w-full">
                    <button 
                        type="button"
                        className='px-3 py-2 rounded-md bg-black text-white flex items-center gap-2 cursor-pointer'
                    >
                        < IoAddSharp size={20} />
                        Creer un Post
                    </button>
                </div>
            </div>

            <section className='lg:flex lg:gap-2'>
                {/* left */}
                <section className='lg:w-[70%]'>
                    <div className="sm:flex gap-4 w-full mb-3">
                        {/* item */}
                        <div className="px-4 py-3 rounded-xl w-full bg-[#047857] text-white md:mb-0 mb-2">
                            <div className='mb-8'>
                                <h1 className='text-md'>Total de Post</h1>
                            </div>

                            <div className="flex items-end-safe">
                                <div className="w-1/2">
                                    <h1 className='font-bold text-4xl'>203</h1>
                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <MdOutlinePublic size={20}/>
                                </div>
                            </div>
                        </div>
                        {/* end */}

                        {/* item */}
                        <div className="px-4 py-3 rounded-xl w-full bg-black text-white md:mb-0 mb-2">
                            <div className='mb-8'>
                                <h1 className='text-md'>Total de Post Facebook</h1>
                            </div>

                            <div className="flex items-end-safe">
                                <div className="w-1/2">
                                    <h1 className='font-bold text-4xl'>100</h1>
                                </div>

                                <div className="w-1/2 flex justify-end">
                                    <FaFacebook size={20}/>
                                </div>
                            </div>
                        </div>
                        {/* end */}

                        {/* item */}
                        <div className="px-4 py-3 rounded-xl w-full bg-white md:mb-0 mb-2">
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
                        </div>
                        {/* end */}

                        {/* item */}
                        <div className="px-4 py-3 rounded-xl w-full bg-white md:mb-0 mb-2">
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
                        </div>
                        {/* end */}
                    </div>

                    <div className="sm:flex gap-2 lg:mb-0 mb-3">
                        <div className="bg-white rounded-xl p-4 h-[52vh] overflow-auto sm:w-1/2 sm:mb-0 mb-3">
                            <div className='pb-2'>
                                <h1 className='font-semibold'>Engagement Overview</h1>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-4 h-[52vh] overflow-auto sm:w-1/2">
                            <div className='pb-2'>
                                <h1 className='font-semibold'>Facebook, LinkedIn Overview</h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* rigth */}
                <section className='lg:w-[30%]'>
                    <div className='bg-white rounded-xl p-4 h-[72vh] overflow-auto'>
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
                    </div>
                </section>
            </section>
        </>
    )
}

export default Dashboardpage;
