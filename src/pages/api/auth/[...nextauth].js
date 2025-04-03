import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],

  // Add these configurations
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt(token, user, account) {
      // Only add accessToken if account exists
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },

    async session(session, token) {
      // Safely add accessToken if it exists
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },

  // Optional debug mode for development
  debug: process.env.NODE_ENV === "development",
});
