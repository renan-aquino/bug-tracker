'use client'

import s from './filter-by-status.module.css'
import { useContext } from "react"
import { FilterType } from "@/contexts/FilterContext"
import { FilterContext } from "@/contexts/FilterContext";

export function FilterByStatus(){
    const { status, setStatus} = useContext(FilterContext);

    const handleChangeType = (value: FilterType) => {
        setStatus(value)
        console.log(status)
    }

    return(
        <div className={s.container}>
            <li className={`${s.filterItem} ${status === FilterType.OPEN ? s.selected : ''}`} onClick={() => handleChangeType(FilterType.OPEN)}>Open</li>
            <li className={`${s.filterItem} ${status === FilterType.CLOSED ? s.selected : ''}`} onClick={() => handleChangeType(FilterType.CLOSED)}>Closed</li>
        </div>
    )    
}