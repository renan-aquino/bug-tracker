import { useState } from 'react'
import s from './ticket-message-form.module.css'
import { MessageData, useMessagesMutate } from '@/hooks/useMessagesMutate'

// interface inputProps {
//     value: string,
//     updateValue(value: string) : void
// }

export function TicketMessageForm(){
    const [ text, setText ] = useState(null)
    // const [ user_id, setUserId ] = useState(null)
    const { mutate } = useMessagesMutate()

    const submit = () => {
        const messageData : MessageData = {
            text
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