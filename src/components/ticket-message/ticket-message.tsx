import { api } from '@/services/api'
import s from './ticket-message.module.css'
import { useUser } from '@/hooks/useUser'

interface propsTicketMessage{
    text: string,
    user_id: string,
    date: string
}

interface User {
    name: string
}


export function TicketMessage(props: propsTicketMessage){
    const { data } = useUser(props.user_id)
    
    return (
        <div className={s.container}>
            <div className={s.info}>
                <p>{data?.name}</p>
                <p>{props.date}</p>
            </div>
            <p>{props.text}</p>
        </div>
    )
}