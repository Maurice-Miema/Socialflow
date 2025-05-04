import { getServerSession } from "next-auth";
import { AuthOptions } from "@/app/lib/AuthOptions";
import { prisma } from "@/app/lib/prisma";

export async function POST(req: Request) {
    const session = await getServerSession(AuthOptions);
    console.log("REQUÊTE REÇUE DANS /api/link/facebook");
    console.log("SESSION >>>", session);

    if (!session || !session.user?.email) {
        console.warn("Aucune session utilisateur trouvée.");
        return new Response("Unauthorized", { status: 401 });
    }

    const userEmail = session.user.email;

    // log de l'email récupéré
    console.log("Email de session:", userEmail);

    // Trouver l'utilisateur dans la base
    const user = await prisma.user.findUnique({
        where: { email: userEmail },
    });

    // log utilisateur trouvé ou non
    console.log("Utilisateur trouvé dans la base :", user);

    if (!user) {
        console.warn("Utilisateur introuvable dans la base.");
        return new Response("User not found", { status: 404 });
    }

    const linkingUserId = user.id;

    // log de l'ID à mettre à jour
    console.log("ID utilisateur à mettre à jour :", linkingUserId);

    // Exemple de token fictif pour le test
    const fbToken = "FAUX_TOKEN_FACEBOOK_TEST";

    try {
        const updated = await prisma.user.update({
        where: { id: linkingUserId },
        data: {
            facebookConnected: true,
            facebookAccessToken: fbToken,
        },
        });

        console.log("Utilisateur mis à jour :", updated);
        return new Response("Facebook linked", { status: 200 });
    } catch (e) {
        console.error("Erreur lors de la mise à jour Prisma :", e);
        return new Response("Erreur serveur", { status: 500 });
    }
}
