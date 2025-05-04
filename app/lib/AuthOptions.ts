import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const AuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
            authorization: {
                params: {
                scope:
                    "email public_profile pages_show_list pages_read_engagement pages_manage_posts pages_read_user_content",
                },
            },
        }),
    ],

    callbacks: {
        async jwt({ token, account }) {
            // Si c'est la première connexion (account est défini)
            if (account?.provider === 'facebook') {
                token.facebookAccessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            // Injecter le token Facebook dans la session
            if (token?.facebookAccessToken) {
                session.facebookAccessToken = token.facebookAccessToken;
            }
            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
};