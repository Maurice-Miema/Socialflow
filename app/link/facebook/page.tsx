'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useUser } from '../../context/UserContext';
import axios from 'axios'

export default function FacebookLinkingPage() {
    const { data: session, status } = useSession()
    const { user, loading } = useUser();
    const userId = user?.id;
    const router = useRouter()
    const [message, setMessage] = useState("Connexion en cours...")

    useEffect(() => {
        const linkAccount = async () => {
        if (status !== "authenticated" || loading || !user) return

        try {
            setMessage("Liaison du compte Facebook...")
            
            await axios.post('/api/link/facebook', {
                accessToken: session.facebookAccessToken,
                userId: userId,
            })

            setMessage("Liaison réussie ! Redirection en cours...")
            setTimeout(() => {
            router.push('/dashboard')
            }, 1500)
        } catch (err) {
            console.error("Erreur lors de la liaison :", err)
            setMessage("Une erreur est survenue. Redirection...")
            setTimeout(() => {
            router.push('/error')
            }, 2000)
        }
        }

        linkAccount()
    }, [status, loading, session, user])

    return (
        <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold animate-pulse">{message}</p>
        </div>
    )
}
