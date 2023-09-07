import s from './ticket-grid.module.css'

export function TicketGrid(){
    return (
        <div className={s.container}>
            <div className={s.column}>
                <h3>Suporte</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className={s.column}>
                <h3>Atualização</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}