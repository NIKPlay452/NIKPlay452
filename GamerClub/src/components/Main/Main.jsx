import { Link } from "react-router-dom"
import s from "./Main.module.css"

export const Main = () => {
    return (
        <div className={s.mainDiv}>
            <div className={s.mainPage}>
                <img src="/images/Home Page (1).png" alt="" />
                <span>Главная</span>
            </div>
            <div className={s.divL}>
                <div className={s.divB}>
                    <Link to={"Mous"} className={s.l}>
                        <img src="/images/orig-no-bg-preview (carve.photos) 1.png" alt="" />
                        <span>Мышки</span>
                    </Link>
                    <Link to={"Keyboard"} className={s.l}>
                        <img src="/images/1020038061-no-bg-preview (carve.photos) 1.png" alt="" />
                        <span>Клавиатуры</span>
                    </Link>
                    <Link to={"Head"} className={s.l}>
                        <img src="/images/i-no-bg-preview (carve.photos) 1.png" alt="" />
                        <span>Наушники</span>
                    </Link>
                </div>
                <div className={s.divB}>
                    <Link to={"Microfone"} className={s.l}>
                        <img src="/images/i (1)-no-bg-preview (carve.photos) 1.png" alt="" />
                        <span>Микрофоны</span>
                    </Link>
                    <Link to={"Steaker"} className={s.l}>
                        <img className={s.img} src="/images/i (2)-edited-free (carve.photos) 1.png" alt="" />
                        <span>Наклейки</span>
                    </Link>
                    <Link to={"Contac"} className={s.l}>
                        <img src="/images/Incoming Call (1).png" alt="" />
                        <span>Контакты</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}