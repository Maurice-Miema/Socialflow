// // app/api/custom-callback/facebook/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
// import { AuthOptions } from "@/app/lib/AuthOptions"; // chemin vers authOptions.ts
// import { prisma } from "@/app/lib/prisma";

// export async function GET(request: NextRequest) {
//     // 1) Lire le cookie linkingUserId
//     const linkingCookie = request.cookies.get("linkingUserId");
//     if (!linkingCookie) {
//         return new NextResponse("Lien de liaison invalide.", { status: 400 });
//     }
//     const linkingUserId = linkingCookie.value;

//     // 2) Récupérer le token NextAuth (JWT) côté serveur
//     const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
//     if (!token || !token.facebookAccessToken) {
//         return new NextResponse("Authentification Facebook non valide.", { status: 401 });
//     }
//     const facebookAccessToken = token.facebookAccessToken as string;

//     // 3) Mettre à jour l’utilisateur dans la base de données
//     try {
//         await prisma.user.update({
//             where: { id: linkingUserId },
//             data: {
//                 facebookConnected: true,
//                 facebookAccessToken: facebookAccessToken,
//             },
//         });
//     } catch (error) {
//         return new NextResponse("Erreur lors de la mise à jour de l'utilisateur.", { status: 500 });
//     }

//     // 4) Supprimer le cookie et rediriger
//     const response = NextResponse.redirect(new URL("/dashboard", request.url));
//     response.cookies.delete("linkingUserId");
//     return response;
// }
