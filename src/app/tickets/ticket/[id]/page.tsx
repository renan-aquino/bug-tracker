'use client'

import s from './page.module.css'

import { Navbar } from "@/components/navbar/navbar";
import { TicketMessage } from '@/components/ticket-message/ticket-message';
import { TicketTitle } from '@/components/ticket-title/ticket-title';
import { useMessages } from '@/hooks/useMessages';
import { api } from "@/services/api";
import axios from "axios";


interface Ticket {
    id: number,
    title: string,
    created_at: string
}

export default function Ticket({ params : { id }}: { params: { id: string } }){
    const { data } = useMessages(id)

    return(
        <main className={s.container}>
            <TicketTitle/>

            <div>
                {data?.map((message) => <TicketMessage text={message.text}/>)}
            </div>

            <h1>Hi</h1>
        </main>
    )
}