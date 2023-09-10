
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosPromise } from "axios";

interface Ticket {
    id: number,
    title: string,
    created_at: string
}

const fetcher = async (id: string) => {
    const response = await api.get('http://localhost:8080/ticket/' + id)

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
