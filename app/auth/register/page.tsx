"use client";

import { useState } from "react";
import Link from "next/link";
import { jwtDecode } from 'jwt-decode';
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useRef } from "react";

interface JwtPayload {
    id: string;
    name: string;
    firstname: string;
    email: string;
}

function Registerpage() {
    const router = useRouter();
    const [serverError, setServerError] = useState("");
    const abortControllerRef = useRef<AbortController | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        firstname: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        firstname: "",
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }

        setIsLoading(false); // Remettre le loading à false
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);
        setServerError("");

        const newErrors: typeof errors = {
            name: "",
            firstname: "",
            email: "",
            password: ""
        };

        if (!formData.name.trim()) newErrors.name = "Le nom est requis";
        if (!formData.firstname.trim()) newErrors.firstname = "Le prénom est requis";
        if (!formData.email.trim()) newErrors.email = "L'email est requis";
        if (!formData.password.trim()) {
            newErrors.password = "Le mot de passe est requis";
        } else if (formData.password.length < 6) {
            newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
        }

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some((error) => error !== "");
        if (hasErrors) {
            setIsLoading(false);
            return;
        }

        const controller = new AbortController();
        abortControllerRef.current = controller;

        try {
            const res = await axios.post("/api/auth/register", formData, {
                withCredentials: true,
                signal: controller.signal
            });

            if (res.status === 201) {
                // Rediriger l'utilisateur vers le tableau de bord
                router.push("/dashboard");
            }
        } catch (err: any) {
            if (axios.isCancel(err)) {
                console.log("Requête annulée");
            } else if (err.response) {
                // L'erreur vient du serveur et il a répondu
                const status = err.response.status;
        
                if (status === 409) {
                    setServerError("Cet email est déjà utilisé.");
                } else if (status === 500) {
                    setServerError("Erreur interne du serveur. Veuillez réessayer plus tard.");
                } else {
                    setServerError("Une erreur est survenue. Veuillez réessayer.");
                }
                console.error("Erreur avec réponse :", err.response.data);
            } else if (err.request) {
                // La requête a été faite mais aucune réponse n’a été reçue
                setServerError("Pas de réponse du serveur. Vérifiez votre connexion.");
                console.error("Erreur de requête :", err.request);
            } else {
                // Quelque chose d'autre a causé l'erreur
                setServerError("Une erreur inattendue est survenue.Veuillez réessayer");
                console.error("Erreur inconnue :", err.message);
            }
        } finally {
            setIsLoading(false);
            abortControllerRef.current = null;
        }
    };

    return (
        <main className="flex justify-center h-screen items-center bg-slate-50">
            <div className="border border-gray-400 rounded-lg sm:px-10 sm:py-5 px-2 py-5 sm:w-lg bg-transparent">
                <form action="" onSubmit={handleSubmit}>
                    <div className="pb-3 font-semibold text-2xl">
                        <h1 className="flex justify-center">S'inscrire</h1>
                    </div>

                    {serverError && (
                        <p className="text-red-500 text-xl mb-2 text-center">{serverError}</p>
                    )}

                    {/* item */}
                    <div className="mb-3">
                        <label htmlFor="nom" className="block pb-2">Nom</label>
                        <input
                            type="text"
                            name="name"
                            id="nom"
                            placeholder="Votre Nom"
                            onChange={handleChange}
                            value={formData.name}
                            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-[#10b981]"
                        />
                        {errors.name && <p className="text-red-400">{errors.name}</p>}
                    </div>
                    {/* end */}

                    {/* item */}
                    <div className="mb-3">
                        <label htmlFor="prenom" className="block pb-2">Prenom</label>
                        <input
                            type="text"
                            name="firstname"
                            id="prenom"
                            placeholder="Votre Prenom"
                            onChange={handleChange}
                            value={formData.firstname}
                            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-[#10b981]"
                        />
                        {errors.firstname && <p className="text-red-400">{errors.firstname}</p>}
                    </div>
                    {/* end */}

                    {/* item */}
                    <div className="mb-3">
                        <label htmlFor="email" className="block pb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Votre Adresse email"
                            onChange={handleChange}
                            value={formData.email}
                            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-[#10b981]"
                        />
                        {errors.email && <p className="text-red-400">{errors.email}</p>}
                    </div>
                    {/* end */}

                    {/* item */}
                    <div className="mb-3">
                        <label htmlFor="password" className="block pb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Votre Adresse password"
                            onChange={handleChange}
                            value={formData.password}
                            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-[#10b981]"
                        />
                        {errors.password && <p className="text-red-400">{errors.password}</p>}
                    </div>
                    {/* end */}

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
                                "S'inscrire"
                            )}
                        </button>
                    </div>

                    <div className="flex mb-3 justify-center">
                        <h1>Vous avez déjà un compte ?</h1>
                        <Link
                            href="/auth/login"
                            className="ml-4 text-[#059669] cursor-pointer"
                        >
                            Se connecter
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
                            className="w-full py-2 text-md flex items-center justify-center rounded-lg bg-black text-white cursor-pointer"
                            onClick={() => signIn("google")}
                        >
                            <FcGoogle size={30} className="mx-2" />
                            Se connecter avec Google
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Registerpage;
