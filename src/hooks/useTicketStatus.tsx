'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"


const patchData = async (id : string) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/ticket/${id}/status`, undefined, { headers : { Authorization: header}})

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