// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from 'bcryptjs';
// import { connectMongoDB } from "@/lib/mongodb";
// import  NextAuth  from "next-auth/next";
// import User from "@/models/user";

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "credentials",
//             credentials: {},

//             async authorize(credentials) {
//                 const { email, password } = credentials;
//                 console.log(email, password );
//                 try {
//                     await connectMongoDB();
//                     const user = await User.findOne({ email });
//                     if (!user || !bcrypt.compare(password, user.password)) { // Use compareSync for correct password comparison
//                         return null;
//                     }
//                     console.log(user);
//                     return user;
//                 } catch (error) {
//                     console.error("Error: ", error);
//                     throw new Error("Failed to authenticate");
//                 }
//             }
//         }),
//     ],
//     session: {
//         strategy: "jwt",    
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     pages: {
//         signIn: "/"
//     },
//     callbacks: {
//         async jwt({ token, user }) {
//             if (user) token.role = user.role;
//             return token;
//         },
//         async session({ session, token }) {
//             if (token?.role) session.user.role = token.role;
//             return session;
//         },
//     },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };


import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { connectMongoDB } from "@/lib/mongodb";
import NextAuth from "next-auth";
import User from "@/models/user";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                console.log("Credentials received:", email, password);
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });
                    if (!user) {
                        console.log("No user found with email:", email);
                        return null;
                    }

                    const isPasswordValid = await bcrypt.compare(password, user.password);
                    console.log("Password valid:", isPasswordValid);

                    if (!isPasswordValid) {
                        console.log("Invalid password for user:", email);
                        return null;
                    }

                    console.log("User authenticated:", user);
                    return user;
                } catch (error) {
                    console.error("Error during authentication:", error);
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
