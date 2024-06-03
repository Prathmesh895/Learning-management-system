"use client";
import { SessionProvider } from "next-auth/react"
import StoreProvider from "./storeProvider";

export const AuthProvider = ({ children }) => {
    return <StoreProvider>
        <SessionProvider>{children}</SessionProvider>
    </StoreProvider>
}