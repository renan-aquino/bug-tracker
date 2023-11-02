'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const fetcher = async (ticketId : string) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/message/${ticketId}`, { headers: { Authorization: header}})

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