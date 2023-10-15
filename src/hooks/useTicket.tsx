
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'http://localhost:8080/ticket/'


const fetcher = async (id: string) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.get(API_URL + id, { headers: { Authorization: header}})

    return response
}

export function useTicket(id: string){
    
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['ticket']
    })
    
    return {
        data: data?.data
    }

}
