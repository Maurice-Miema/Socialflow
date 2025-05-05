'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@/app/context/UserContext';
import ConnectAccounts from '../components/ConnectAccounts';
import Dashboard from './dashboard/page';

function MainPage() {
    const { user, loading, refreshUser } = useUser();

    const [refreshed, setRefreshed] = useState(false);

    useEffect(() => {
        if (!loading && user && !refreshed && (!user.facebookConnected || !user.linkedinConnected)) {
            refreshUser().then(() => setRefreshed(true));
        }
    }, [loading, user, refreshed, refreshUser]);

    if (loading) {
        return console.log("Chargement.....");
    }

    if (!user) {
        return console.log("User non authentifier !") // sécurité en cas de souci
    }

    const hasConnectedAccount = user.facebookConnected || user.linkedinConnected

    return (
        <>
            {hasConnectedAccount ? ( 
                <Dashboard user={user} />
            ) : (
                < ConnectAccounts />
            )}
        </>
    )
}

export default MainPage;
