import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


const API_URL = 'http://localhost:8080/ticket/'


const deleteTicket = async (id) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.delete(API_URL + id, { headers: { Authorization: header}})
    return response
}

export function useDeleteTicket(id){
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: () => deleteTicket(id),
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['tickets'])
            queryClient.invalidateQueries(['ticket'])
            queryClient.invalidateQueries(['messages'])
        }
    })
    
    return mutate
}
