import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma"; // ou ton chemin correct

export async function POST(req: Request) {
    const body = await req.json();
    const { userId, accessToken } = body;

    try {
        await prisma.user.update({
        where: { id: userId },
        data: {
            facebookConnected: true,
            facebookAccessToken: accessToken,
        },
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Erreur lors de la mise à jour Facebook :", err);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
