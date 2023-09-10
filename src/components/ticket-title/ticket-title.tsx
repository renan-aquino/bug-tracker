import { BackButton } from '../back-button/back-button'
import s from './ticket-title.module.css'

export function TicketTitle(){
    return(
        <div className={s.container}>
            <div className={s.back_button}><BackButton/></div>
            <div className={s.ticket_info}>
                <p>Ticket #0123</p>
                <p>01/01/2023</p>
                <p>Closed</p>
            </div>
            <h4>Lotem impsum dolor sit amet lorem ipsum dolor sit amet</h4>
        
        </div>
    )
}