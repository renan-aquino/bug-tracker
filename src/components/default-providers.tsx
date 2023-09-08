'use client'

import { AuthProvider } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface DefaultProvidersProps {
    children: ReactNode
}

export function DefaultProviders({children} : DefaultProvidersProps){
    const client = new QueryClient()
    return(
        <QueryClientProvider client={client}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </QueryClientProvider>
    )
}