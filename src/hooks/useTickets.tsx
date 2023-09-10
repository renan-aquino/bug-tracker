'use client'

import { api } from "@/services/api"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080/ticket'

interface Ticket {
    id: number,
    title: string,
    created_at: string,
}

const fetcher = async () => {
    const response = await api.get(API_URL)

    return response
}

export function useTickets(){

    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['tickets']
    })
    
    return {
        data: data?.data
    }

}