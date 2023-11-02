// 'use client'

import TicketPage from "@/components/ticket-page/ticket.page"
import { notFound } from "next/navigation"

// import s from './page.module.css'

// import { TicketMessageForm } from '@/components/ticket-message-form.tsx/ticket-message-form';
// import { TicketMessageList } from '@/components/ticket-message-list/ticket-message-list';
// import { TicketTitle } from '@/components/ticket-title/ticket-title';
// import { useDeleteTicket } from '@/hooks/useDelete';
// import { useTicket } from '@/hooks/useTicket';
// import { useTicketStatus } from '@/hooks/useTicketStatus';
// import { fetchBlogPost } from '@/services/fetchTicket';
// import axios from 'axios';
// import { notFound } from 'next/navigation';
// import { useEffect } from 'react'



// interface Ticket {
//     id: number,
//     title: string,
//     created_at: string
// }

// const API_URL = 'http://localhost:8080/ticket/'



export default async function Ticket({ params : { id }}: { params: { id: string } }){

    const ticketExists = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ticket/check/${id}`, { cache: 'no-store'})

    if(ticketExists?.status == 200) {
        return (
            <TicketPage ticketId={id.toString()}/>
        )
        } else {
            notFound()
        }
    // }

    // console.log(ticket)
    // if(ticket.status != 200) {
    //     notFound()
    }

    // return (
    //     // <TicketPage ticketId={id2}/>
    //     <div>
    //         <h1>hi, guys</h1>
    //     </div>
    // )



    // const { data } = useTicket(id)
    // const { mutate: mutateStatus} = useTicketStatus(id)
    // const { mutate: mutateDelete} = useDeleteTicket(id)

    // const submit = () => {
    //     mutateStatus()
    // }

    // const deleteTicket = () => {
    //     mutateDelete()
    // }
    
    // return(
    //     <main className={s.container}>
    //         <TicketTitle id={data?.id} date={new Date(data?.created_at).toLocaleDateString()} title={data?.title} status={data?.status}/>
    //         <div className={s.buttons}>
    //             <button onClick={submit}>Change status</button>
    //             <button className={s.delete_btn} onClick={deleteTicket}>Delete ticket</button>
    //         </div>
    //         {data?.status == "OPEN" && <TicketMessageForm ticketId={id}/>}
    //         <TicketMessageList id={id}/>
    //     </main>
    // )
// }