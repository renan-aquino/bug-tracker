'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const API_URL = 'http://localhost:8080/message/'


const fetcher = async (ticketId : string) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.get(API_URL + ticketId, { headers: { Authorization: header}})

    return response
}

export function useMessages(ticketId: string){

    const { data } = useQuery({
        queryFn: () => fetcher(ticketId),
        queryKey: ['messages']
    })

    const orderedData = data?.data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

    return {
        data: orderedData
    }

}