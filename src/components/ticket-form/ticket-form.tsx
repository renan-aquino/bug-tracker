'use client'

import s from './ticket-form.module.css'
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
        <form className={s.container} action="" onSubmit={(e) => {e.preventDefault()}}>
            <h3>Title</h3>
            <input id='title' type="text" onChange={e => setTitle(e.target.value)} />
            <h3>Message</h3>
            <textarea id='message' onChange={e => setText(e.target.value)} cols={30} rows={10}></textarea>
            <button onClick={submit}>Publish</button>
        </form>
    )
}