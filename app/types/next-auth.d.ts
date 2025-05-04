import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        facebookAccessToken?: string;
        facebookConnected?: boolean;
        linkingUserId?: string;
    }

    interface User extends DefaultUser {
        facebookAccessToken?: string;
        facebookConnected?: boolean;
        linkingUserId?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        facebookAccessToken?: string;
        facebookConnected?: boolean;
        linkingUserId?: string;
    }
}
