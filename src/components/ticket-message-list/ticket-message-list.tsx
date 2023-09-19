import s from './ticket-message-list.module.css'
import { useMessages } from "@/hooks/useMessages"
import { TicketMessage } from "../ticket-message/ticket-message"

interface ListProps {
    id: string
}


export function TicketMessageList(props: ListProps){
    const { data } = useMessages(props.id)

    return (
        <div className={s.container}>
            {data?.map((message) => <TicketMessage text={message.text} user_id={message.user_id} date={new Date(message.created_at).toLocaleDateString()} key={message.id}/>)}
        </div>
    )
}