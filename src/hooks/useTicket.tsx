
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetcher = async (id: string) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ticket/${id}`, { headers: { Authorization: header}})

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
