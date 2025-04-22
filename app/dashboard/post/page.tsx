import Link from 'next/link';
import React from 'react'
import { IoAddSharp } from 'react-icons/io5';

function Postpage() {
    return (
        <>
            <div className='mb-2 flex items-center'>
                <h1 className='text-2xl'>Poster</h1>
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

                        <Link 
                            href="/dashboard"
                            type="button"
                            className='sm:px-3 sm:py-2 px-2 py-1 rounded-md bg-black text-white max-sm:text-md flex items-center gap-2 cursor-pointer'
                        >
                            < IoAddSharp size={20} />
                            Creer un Post
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Postpage;
