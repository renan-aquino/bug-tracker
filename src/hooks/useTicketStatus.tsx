'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const API_URL = 'http://localhost:8080/ticket/'

const patchData = async (id : string) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.patch(API_URL + id + '/status', undefined, { headers : { Authorization: header}})

    return response
}

export function useTicketStatus(id: string){
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: () => patchData(id),
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['ticket'])
        }
    })
    
    return mutate

}