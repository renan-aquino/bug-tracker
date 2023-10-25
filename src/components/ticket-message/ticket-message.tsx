import UserNameFetcher from '../user-name-fetcher/user-name-fetcher'
import s from './ticket-message.module.css'
import { useUser } from '@/hooks/useUser'

interface propsTicketMessage{
    text: string,
    user_id: string,
    date: string,
}

interface User {
    name: string
}


export function TicketMessage(props: propsTicketMessage){
    // let { data } = useUser(props.user_id)
    
    return (
        <div className={s.container}>
            <div className={s.info}>
                {/* <p>{props.name}</p> */}
                <UserNameFetcher userId={props.user_id}/>
                <p>{props.date}</p>
            </div>
            <p>{props.text}</p>
        </div>
    )
}