import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { connectMongoDB } from "@/lib/mongodb";
import  NextAuth  from "next-auth/next"; // Import from "next-auth/server" for Next.js
import User from "@/models/user";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });
                    if (!user || !bcrypt.compare(password, user.password)) {
                        return null;
                    }

                    // Assigning userRole based on email
                    let userRole = "student"; // Default role
                    if (email === "user1@gmail.com") {
                        userRole = "admin";
                    }

                    return { ...user._doc, role: userRole }; // Return user object with added userRole
                } catch (error) {
                    console.error("Error: ", error);
                    throw new Error("Failed to authenticate");
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",    
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            if (token?.role) session.user.role = token.role;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
