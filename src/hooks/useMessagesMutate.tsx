'use client'

import { api } from "@/services/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = 'http://localhost:8080/message'

export interface MessageData {
    text: string,
    ticketId: number
}

const postData = async (data : MessageData) => {
    const response = await api.post(API_URL, data)

    return response
}

export function useMessagesMutate(){
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['messages'])
        }
    })
    
    return mutate

}