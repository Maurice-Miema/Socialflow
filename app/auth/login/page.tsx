"use client"

import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';


function Loginpage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        // delete error
        setErrors({...errors, [e.target.name]: ""});
        setIsLoading(false); 
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);
        setServerError("");

        const newErrors: typeof errors = {
            email: "",
            password: "",
        }

        if(!formData.email.trim()) newErrors.email = "Le email est requis";
        if(!formData.password.trim()) newErrors.password = "Le mot de passe est requis";

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((errors) => errors !== "");
        if(hasErrors) {
            setIsLoading(false);
            return;
        };

        try {
            const res = await axios.post("/api/auth/login", formData, {
                withCredentials: true,
            });
            if (res.status === 200) {
                router.push("/dashboard");
            }else {
                setServerError(" Email ou mot de passe incorrect ");
            }
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            if (axios.isAxiosError(error) && error.response) {
                const status = error.response.status;

                if (status === 401) {
                    setServerError("Email ou mot de passe incorrect.");
                } else {
                    const message = (error.response.data as any)?.message || "Une erreur est survenue.";
                    setServerError("Erreur serveur : " + message);
                }
            } else {
                setServerError("Connexion impossible. Vérifiez votre réseau.");
            }
        }finally {
            setIsLoading(false);
        }
    }
    return (
        <main className="flex justify-center h-screen items-center bg-slate-50 ">
            <div className="border border-gray-400 rounded-lg sm:px-10 sm:py-5 px-2 py-5 sm:w-lg bg-transparent 2xl:w-2xl 2xl:rounded-2xl ">
                <form 
                    action=""
                    onSubmit={handleSubmit}
                >
                    <div className='pb-4 font-semibold text-2xl'>
                        <h1 className='flex justify-center'>Se connecter</h1>
                    </div>

                    {serverError && (
                        <p className="text-red-500 text-xl mb-2 text-center">{serverError}</p>
                    )}
                    
                    {/* item */}
                    <div className='mb-5'>
                        <label htmlFor="email" className='block pb-2'>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder='Votre Adresse email' 
                            className='w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-[#10b981]'
                        />
                        {errors.email && <p className='text-red-400'>{errors.email}</p>}
                    </div>
                    {/* end */}

                    {/* item */}
                    <div className='mb-2'>
                        <label htmlFor="password" className='block pb-1'>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={handleChange}
                            value={formData.password}
                            placeholder='Votre Adresse password' 
                            className='w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-[#10b981]'
                        />
                        {errors.password && <p className='text-red-400'>{errors.password}</p>}
                    </div>
                    {/* end */}

                    <div className="flex justify-end w-full mb-4">
                        <Link 
                            href="/dashboard"
                            className='text-[#059669] cursor-pointer'
                        >
                            Mot de passe oublier ?
                        </Link>
                    </div>

                    {/* btn */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-2 cursor-pointer font-medium text-xl border-none bg-[#047857] text-white rounded-lg flex justify-center items-center"
                        >
                            {isLoading ? (
                                <>
                                    <span className="inline-block w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
                                </>
                            ) : (
                                "Se connecter"
                            )}
                        </button>
                    </div>

                    <div className="flex mb-6 justify-center">
                        <h1>Vous n'avez pas un compte ?</h1>
                        <Link
                            href="/auth/register"
                            className='ml-4 text-[#059669] cursor-pointer'
                        >
                            S'inscrire
                        </Link>
                    </div>

                    {/* separateur */}
                    <div className="flex justify-center mb-2">
                        <p>Ou</p>
                    </div>

                    {/* google */}
                    <div>
                        <button 
                            type="button" 
                            className='w-full py-2 text-md flex items-center justify-center rounded-lg bg-black text-white cursor-pointer'
                            onClick={()=> signIn('google')}
                        >
                            <FcGoogle size={30} className='mx-2' />
                            Se connecter avec google
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Loginpage;
