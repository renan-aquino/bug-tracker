'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const API_URL = 'http://localhost:8080/message'

export interface MessageData {
    text: string,
    ticketId: number
}

const postData = async (data : MessageData) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.post(API_URL + data, { headers: { Authorization: header}})

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