import { useState } from 'react'
import s from './ticket-message-form.module.css'
import { MessageData, useMessagesMutate } from '@/hooks/useMessagesMutate'

interface TicketMessageProps {
    ticketId : string
}

export function TicketMessageForm(props: TicketMessageProps){
    const [ text, setText ] = useState(null)
    const ticketId = parseInt(props.ticketId)
    const { mutate } = useMessagesMutate()

    const submit = () => {
        const messageData : MessageData = {
            text,
            ticketId
        }
        mutate(messageData)
    }

    return (
        <form className={s.container} onSubmit={(e) => e.preventDefault()}>
            <textarea onChange={e => setText(e.target.value)} cols={30} rows={10}></textarea>
            <button onClick={submit}>Publish</button>
        </form>
    )
}