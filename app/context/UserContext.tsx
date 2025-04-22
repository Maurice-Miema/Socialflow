'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type User = {
    id: string
    name: string
    firstname: string
    email: string
}

type UserContextType = {
    user: User | null
    loading: boolean
}

const UserContext = createContext<UserContextType>({
    user: null,
    loading: true,
})

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('/api/auth/me',
                    { withCredentials: true }
                );
                setUser(res.data.user);
            } catch (error) {
                setUser(null);
                router.push('/auth/login'); 
            } finally {
                setLoading(false);
            }
        }

        fetchUser()
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
}
