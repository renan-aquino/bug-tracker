import { TicketCard } from '../ticket-card/ticket-card'
import s from './ticket-grid.module.css'

export function TicketGrid(){
    return (
        <div className={s.container}>
            <div className={s.column}>
                <h3 className={s.category}>Suporte</h3>
                <ul className={s.list}>
                    <TicketCard/>
                    <TicketCard/>

                </ul>
            </div>
            <div className={s.column}>
                <h3 className={s.category}>Atualização</h3>
                <ul className={s.list}>
                    <TicketCard/>
                </ul>
            </div>
        </div>
    )
}