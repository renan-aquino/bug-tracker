import { BackButton } from '../back-button/back-button'
import s from './ticket-title.module.css'

interface TicketProps {
    id: string,
    title: string,
    date: string,
    status: string

}

export function TicketTitle(props: TicketProps){

    const getStatusColorClass = (status: string) => {
        switch (status) {
          case 'OPEN':
            return s.greenText;
          case 'CLOSED':
            return s.redText; 
          default:
            return ''; 
        }
      };

      const statusColorClass = getStatusColorClass(props.status);

    return(
        <div className={s.container}>
            <div className={s.back_button}><BackButton/></div>
            <div className={s.ticket_info}>
                <p>Ticket #{props.id}</p>
                <p>{props.date}</p>
                <p className={`${statusColorClass}`}>{props.status}</p>
            </div>
            <h3>{props.title}</h3>
        </div>
    )
}