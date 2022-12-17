import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

const facebookClientID = process.env.FACEBOOK_CLIENT_ID ?? "";
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET ?? "";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: facebookClientID,
            clientSecret: facebookClientSecret,
        }),
    ],
};

export default NextAuth(authOptions);
