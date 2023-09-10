import s from './ticket-message.module.css'

interface propsTicketMessage{
    text: string
}

export function TicketMessage(props: propsTicketMessage){
    return (
        <div className={s.container}>
            <div className={s.info}>
                <p>Username</p>
                <p>01/01/2023</p>
            </div>
            <p>{props.text}</p>
        </div>
    )
}