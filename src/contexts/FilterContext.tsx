'use client'

import { createContext, useState,  ReactNode } from "react"

export enum FilterType {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED'
}

export const FilterContext = createContext({
    status: FilterType.OPEN,
    setStatus: (value: FilterType) => {}
})

interface ProviderProps {
    children: ReactNode
}


export function FilterContextProvider({ children } : ProviderProps){
    const [status, setStatus] = useState(FilterType.OPEN)

    return(
        <FilterContext.Provider value={{status, setStatus}}>
            {children}
        </FilterContext.Provider>
    )
}