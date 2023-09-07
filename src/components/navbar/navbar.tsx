import s from './navbar.module.css'

export function Navbar(){
    return (
        <div className={s.container}>
            <h2>Tickets</h2>
            <button>Novo ticket</button>
        </div>
    )
}