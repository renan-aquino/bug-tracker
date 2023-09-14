'use client'

import { api } from "@/services/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

const API_URL = 'http://localhost:8080/ticket'

export interface TicketRequestDTO {
    title: string,
    text: string,
}

export interface TicketResponseDTO {
    id: number,
    title: string,
    created_at: string
}

const postData = async (data : TicketRequestDTO) => {
    const response = await api.post(API_URL, data)

    return response.data
}

export function useTicketMutate(){
    const queryClient = useQueryClient();
    const router = useRouter()


    return useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: (data: TicketResponseDTO) => { 
            router.push(`/tickets/ticket/${data.id}`);
            queryClient.invalidateQueries(['messages'])
        }
    })
    
    // return mutate

}