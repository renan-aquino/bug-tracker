'use client'

import s from './navbar.module.css'
import { FilterByStatus } from '../filter-by-status/filter-by-status'



export function Navbar(){

    return (
        <div className={s.container}>
            <h2>Tickets</h2>
            <FilterByStatus/>
            <a href='/tickets/new' className={s.a_button}>New ticket</a>
        </div>
    )
}