'use client'

import { FilterContext } from "@/contexts/FilterContext"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useContext } from "react"

const API_URL = 'http://localhost:8080/ticket'

interface Ticket {
    id: number,
    title: string,
    created_at: string,
    status: string
}

const fetcher = async (status: string) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.get(API_URL + '/status/' + status, { headers: { Authorization: header}})

    return response
}

export function useTickets(){
    const { status } = useContext(FilterContext)
    const { data } = useQuery({
        queryFn: () => fetcher(status.toString()),
        queryKey: ['tickets', status]
    })
    
    return {
        data: data?.data
    }

}