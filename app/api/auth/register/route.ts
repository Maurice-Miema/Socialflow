import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, firstname, email, password } = body;

        if (!name || !firstname || !email || !password) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis.' },
                { status: 400 }
            );
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json(
                { error: 'Cet email est déjà utilisé.' },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                firstname,
                email,
                password: hashedPassword,
            },
        });

        // Création du token JWT
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name,
            },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        // Stocker le token dans un cookie HTTPOnly
        const cookie = serialize('token', token, {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24 * 7, 
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        });

        const response = NextResponse.json(
            {
                message: 'Utilisateur enregistré !',
                user: {
                    id: user.id,
                    name: user.name,
                    firstname: user.firstname,
                    email: user.email,
                },
            },
            { status: 201 }
        );

        response.headers.set('Set-Cookie', cookie);

        return response;
    } catch (error) {
        console.error('Erreur serveur:', error);
        return NextResponse.json(
            { error: 'Erreur interne du serveur.' },
            { status: 500 }
        );
    }
}
