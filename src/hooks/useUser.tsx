'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetcher = async (user_id : string) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/${user_id}`, { headers: { Authorization: header}})
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