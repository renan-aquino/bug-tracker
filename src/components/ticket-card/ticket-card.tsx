import s from './ticket-card.module.css'

interface CardProps {
    id: number,
    title: string,
    date: string,
}

export function TicketCard(props: CardProps){
 
    return(
        <a href={'/tickets/ticket/' + props.id} className={s.container}>
            <h4>{props.title}</h4>
            <p>{props.date}</p>
        </a>
    )
}