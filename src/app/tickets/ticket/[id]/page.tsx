import TicketPage from "@/components/ticket-page/ticket.page"
import { notFound } from "next/navigation"

export default async function Ticket({ params : { id }}: { params: { id: string } }){

    const ticketExists = await fetch(`${process.env.NEXT_PUBLIC_API_URL_SERVER}/ticket/check/${id}`, { cache: 'no-store'})

    if(ticketExists?.status == 200) {
        return (
            <TicketPage ticketId={id.toString()}/>
        )
        } else {
            notFound()
        }
    }