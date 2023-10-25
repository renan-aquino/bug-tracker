'use client'

import { FilterContext } from "@/contexts/FilterContext"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useContext } from "react"

const API_URL = 'http://localhost:8080/ticket'


const fetcher = async (status: string) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.get(API_URL + '/status/' + status, { headers: { Authorization: header}})

    return response
}

export function useTickets(){
    const { status } = useContext(FilterContext)
    const { data } = useQuery({
        queryFn: () => fetcher(status.toString()),
        queryKey: ['tickets', status]
    })

    const orderedData = data?.data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    
    return {
        data: orderedData
    }

}