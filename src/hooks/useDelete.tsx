import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


const deleteTicket = async (id) => {
    const token =  await fetch('/login', { method: 'GET'})
    const header = token.headers.get('Authorization')
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/ticket/${id}`, { headers: { Authorization: header}})
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
