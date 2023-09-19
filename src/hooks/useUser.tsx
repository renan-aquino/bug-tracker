'use client'

import { api } from "@/services/api"
import { useQuery } from "@tanstack/react-query"

const API_URL = 'http://localhost:8080/user/'


const fetcher = async (user_id : string) => {
    const response = await api.get(API_URL + user_id)
    return response
}

export function useUser(user_id: string){

    const { data } = useQuery({
        queryFn: () => fetcher(user_id),
        queryKey: ['user']
    })
    
    return {
        data: data?.data
    }

}