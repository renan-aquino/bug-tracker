'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"


export interface MessageData {
    text: string,
    ticketId: number
}

const postData = async (data : MessageData) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/message`, data, { headers: { Authorization: header}})

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