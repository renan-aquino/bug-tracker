import s from './header.module.css'

export default function Header(){
    return (
        <header className={s.header_tag}>
            <div className={s.container}>
                <a className={s.logo}><span>Bug</span> Tracker</a>
                
                <div className={s.login}>
                    <p>Username</p>
                    <p>|</p>
                    <a>Log out</a>
                </div>
            </div>

        </header>
    )
}