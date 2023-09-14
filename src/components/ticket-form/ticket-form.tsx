'use client'

import { TicketRequestDTO, TicketResponseDTO, useTicketMutate } from "@/hooks/useTicketMutate"
import { useRouter } from "next/navigation"
import { useState } from 'react'


export function TicketForm(){
    const [ title, setTitle ] = useState(null)
    const [ text, setText ] = useState(null)
    const router = useRouter()

    const { mutate, data } = useTicketMutate()

    const submit = async () => {
        const ticketData : TicketRequestDTO = {
            title,
            text
        }
        mutate(ticketData)

    }

    return (
        <form action="" onSubmit={(e) => {e.preventDefault()}}>
            <input type="text" onChange={e => setTitle(e.target.value)} />
            <textarea onChange={e => setText(e.target.value)} cols={30} rows={10}></textarea>
            <button onClick={submit}>Publish</button>
        </form>
    )
}