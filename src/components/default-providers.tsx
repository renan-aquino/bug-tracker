'use client'

import { AuthProvider } from "@/contexts/AuthContext";
import { FilterContextProvider } from "@/contexts/FilterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface DefaultProvidersProps {
    children: ReactNode
}

export function DefaultProviders({children} : DefaultProvidersProps){
    const client = new QueryClient()
    return(
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}