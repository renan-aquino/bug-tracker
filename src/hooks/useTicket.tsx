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

interface TicketResponse {
    tickets: Ticket[]
}


const fetcher = async () : AxiosPromise<Ticket[]> => {
    const response = await api.get(API_URL)

    return response
}

export function useTicket(){

    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['messages']
    })
    
    return {
        data: data?.data
    }

}


// export async function useTicket() : TicketResponse{
//     try {
//       const response = await api.get<TicketResponse>(API_URL);
//       const tickets = response.data.tickets
//       return { tickets }


//     } catch (error) {
//       console.log(error);
//     }
// }