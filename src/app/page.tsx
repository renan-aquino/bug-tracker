import Image from 'next/image'
import styles from './page.module.css'
import { Navbar } from '@/components/navbar/navbar'
import { TicketGrid } from '@/components/ticket-grid/ticket-grid'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <TicketGrid/>
    </main>
  )
}
