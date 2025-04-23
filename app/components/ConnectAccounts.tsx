import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'

function ConnectAccounts() {
    return (
        <>
            <div className='flex justify-center items-center h-[82vh]'>
                <div className="flex flex-col md:gap-4 gap-4">
                    <div className="flex justify-center">
                        <img src="../assets/logo-text-botton.png" alt="" />
                    </div>

                    <div>
                        <h1 className='text-2xl font-bold text-center md:mb-4'>Bienvenue Chez Socialflow 👋</h1>

                        <p className='text-center md:text-xl'>
                            Pour profiter pleinement de toutes les fonctionnalités de notre application, veuillez d'abord connecter votre compte Facebook, LinkedIn, ou les deux.
                            Cela nous permet d’optimiser votre expérience et de mieux vous accompagner dans votre parcours. <br />

                            Connectez vos comptes pour commencer à explorer !
                        </p>
                    </div>

                    <div className="flex justify-center gap-2 max-sm:flex-col">
                        <button 
                            type="button"
                            className='flex items-center gap-2 py-3 sm:px-4 px-2 rounded-md bg-blue-500 text-white cursor-pointer max-sm:justify-center'
                        >
                            < FaFacebook size={25} />
                            Connecter mon compte Facebook
                        </button>

                        <button 
                            type="button"
                            className='flex items-center gap-2 py-3 sm:px-4 px-2 bg-black text-white rounded-md cursor-pointer max-sm:justify-center'
                        >
                            < FaLinkedin size={25} />
                            Connecter mon compte LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectAccounts
