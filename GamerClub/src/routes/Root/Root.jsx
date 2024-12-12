import { NavLink, Outlet } from "react-router-dom"
import s from "./Root.module.css"

export const Root = () => {
    return (
        <>
            <section className={s.sec}>
                <nav className={s.Nav}>
                    <NavLink to={"/"}><img src="/images/Логотип.png" alt="" /></NavLink>
                    <ul className={s.list}>
                        <li className={s.itemTop}>
                            <NavLink to={"/"} className={s.item}><img src="/images/Home Page.png" alt="" />Главная</NavLink>
                        </li>
                        <li className={s.itemTop}>
                            <NavLink to={"Mous"} className={s.item}><img src="/images/Computer Mouse.png" alt="" />Мышки</NavLink>
                        </li>
                        <li className={s.itemTop}>
                            <NavLink to={"Keyboard"} className={s.item}><img src="/images/Keyboard.png" alt="" />Клавиатуры</NavLink>
                        </li>
                        <li className={s.itemTop}>
                            <NavLink to={"Head"} className={s.item}><img src="/images/Headphones.png" alt="" />Наушники</NavLink>
                        </li>
                        <li className={s.itemTop}>
                            <NavLink to={"Microfone"} className={s.item}><img src="/images/Microphone.png" alt="" />Микрофоны</NavLink>
                        </li>
                        <li className={s.itemTop}>
                            <NavLink to={"Steaker"} className={s.item}><img src="/images/Smiling.png" alt="" />Наклейки</NavLink>
                        </li>
                        <li className={s.itemTop}>
                            <NavLink to={"Contac"} className={s.item}><img src="/images/Incoming Call.png" alt="" />Контакты</NavLink>
                        </li>
                    </ul>
                    <NavLink to={"Kor"}><img src="/images/Shopping Cart.png" alt="" /></NavLink>
                </nav>
            </section>
            <div className={s.container}>
                <Outlet />
            </div>
        </>
    )
}