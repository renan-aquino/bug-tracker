import { BackButton } from '../back-button/back-button'
import s from './ticket-title.module.css'

interface TicketProps {
    id: string,
    title: string,
    date: string,
    status: string

}

export function TicketTitle(props: TicketProps){
    return(
        <div className={s.container}>
            <div className={s.back_button}><BackButton/></div>
            <div className={s.ticket_info}>
                <p>Ticket #{props.id}</p>
                <p>{props.date}</p>
                <p>{props.status}</p>
            </div>
            <h3>{props.title}</h3>
        
        </div>
    )
}