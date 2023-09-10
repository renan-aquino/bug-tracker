import s from './ticket-card.module.css'

interface CardProps {
    title: string,
    date: string,
    handleClick: () => void
}

export function TicketCard(props: CardProps){

    
 
    return(
        <div className={s.container} onClick={props.handleClick}>
            <h4>{props.title}</h4>
            <p>{props.date}</p>
        </div>
    )
}