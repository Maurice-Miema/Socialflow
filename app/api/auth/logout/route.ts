import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
    // Supprimer le cookie en le mettant vide avec une expiration immédiate
    const cookie = serialize('token', '', {
        httpOnly: true,
        path: '/',
        expires: new Date(0), // expiration dans le passé
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
    });

    const response = NextResponse.json({ message: 'Déconnexion réussie' });
    response.headers.set('Set-Cookie', cookie);

    return response;
}
