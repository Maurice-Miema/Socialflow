import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function Logout() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async ()=> {
        setIsLoading(true);
        try {
            await axios('api/auth/logout',{
                method: "POST"
            });

            setTimeout(() => {
                router.push("/auth/login");
            }, 800);
        } catch (error) {
            console.error("Erruer lors de la deconexion")
        }finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="">
                <button 
                    type="button"
                    onClick={handleLogout}
                    disabled={isLoading}
                    className='border bg-red-400 px-2 py-1 cursor-pointer rounded-lg text-white'
                >
                    {isLoading ? (
                        <>
                            <span className="inline-block w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
                        </>
                    ) : (
                        "Se Déconnecter"
                    )}
                </button>
            </div>
        </>
    );
}

export default Logout;
