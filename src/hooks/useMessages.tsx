'use client'

import { api } from "@/services/api"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080/message/'

interface Message {
    id: number,
    text: string,
    created_at: string,
    user_id: number,
    ticket_id: number
}

const fetcher = async (ticketId : string) => {
    const response = await api.get(API_URL + ticketId)

    return response
}

export function useMessages(ticketId: string){

    const { data } = useQuery({
        queryFn: () => fetcher(ticketId),
        queryKey: ['messages']
    })
    
    return {
        data: data?.data
    }

}