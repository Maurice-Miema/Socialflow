'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import LoginOut from "./LoginOut";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname()
    const [isMenu, setIsMenu] = useState(false);

    const links = [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Poster', href: '/dashboard/post' },
        { name: 'Planification', href: '/dashboard/planification'},
        { name: 'Historique', href: '/dashboard/historique'}
    ]

    const handleMenu = ()=> {
        setIsMenu(!isMenu);
    }

    // Variants pour le menu mobile
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };
    
    // Variants pour chaque lien
    const linkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.05 },
        }),
    };

    return (
        <>
            <nav className="w-full bg-white sm:px-4 sm:py-3 py-2 px-3 flex justify-between items-center sm:rounded-lg mb-2 max-sm:fixed max-md:z-10">
                
                <div className="flex items-center">
                    <img src="../assets/logo.png" alt="picture user" className='size-10 cursor-pointer' />
                </div>

                <div className="gap-2 sm:flex hidden">
                    {links.map(link => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`${
                                pathname === link.href ? 'text-black bg-slate-100 px-4 py-1 rounded-lg' : 'text-gray-700 px-4 py-1'
                            } transition`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="sm:flex justify-center items-center cursor-pointer hidden relative">
                    <div>
                        <IoNotificationsCircleOutline size={30} />
                    </div>
                    <div className='flex justify-center items-center gap-1'>
                        <img src="../assets/avatar.png" alt="picture user" className='size-12' />
                        <span className='hidden lg:block'>Miema Maurice</span>
                    </div>

                    <div className="absolute mt-24 bg-red-500 text-white p-4 rounded-md hidden">
                        < LoginOut />
                    </div>
                </div>

                <div className="sm:hidden block">
                    <motion.button
                        type="button"
                        onClick={handleMenu}
                        initial={false}
                        animate={{ rotate: isMenu ? 180 : 0, scale: isMenu ? 1.1 : 1 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {isMenu ? <MdClose size={30} /> : <IoMdMenu size={30} />}
                    </motion.button>
                </div>


                {/* la nav responsive */}
                <div
                    className={`fixed inset-0 bg-black/30 backdrop-blur-md mt-14 pt-10 px-2 transition-all duration-300 ease-in-out ${
                        isMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    >
                    <div className="flex justify-center text-center">
                        <div className="flex flex-col">
                            {links.map((link) => (
                                <Link
                                key={link.name}
                                href={link.href}
                                onClick={handleMenu}
                                className={`${
                                    pathname === link.href
                                    ? 'text-gray-100 px-4 py-1 my-2 rounded-lg text-2xl'
                                    : 'text-gray-100 px-4 py-1 my-2 text-2xl'
                                } transition duration-200`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                
            </nav>
        </>
    )
}
