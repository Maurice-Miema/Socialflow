import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import bcrypt from 'bcryptjs';

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
            { status: 400 }
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

        return NextResponse.json({ message: 'Utilisateur enregistré !', user }, { status: 201 });
    } catch (error) {
        console.error('Erreur serveur:', error);
        return NextResponse.json(
        { error: 'Erreur interne du serveur.' },
        { status: 500 }
        );
    }
}
