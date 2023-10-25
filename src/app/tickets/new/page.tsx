import { BackButton } from '@/components/back-button/back-button';
import s from './page.module.css'
import { TicketForm } from "@/components/ticket-form/ticket-form";

export default function New(){
    return (
        <main className={s.container}>
            <div className={s.back_button}><BackButton/></div>
            <h2>New Ticket</h2>
            <TicketForm/>
        </main>
    )
}