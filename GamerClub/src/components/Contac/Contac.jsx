import s from "./Contac.module.css"

export const Contac = () => {
    return (
        <div className={s.container}>
            <div className={s.h2Box}>
                <span>Наши контактные данные</span>
            </div>
            <div className={s.flex}>
                <div className={s.textPo}>
                    <div>
                        <span className={s.textF}>Почта <br /></span>
                        <span className={s.TextS}>GamerClub@yandex.ru</span>
                    </div>
                    <div>
                        <span className={s.textF}>Телефон <br /></span>
                        <span className={s.TextS}>+7(888)5553535</span>
                    </div>
                </div>
                <div className={s.TextBot}>
                    <span className={s.textF}>Адрес</span>
                    <span className={s.TextS}>Москва, ул. Пушкина, д. <br /> Колотушкина</span>
                </div>
            </div>
        </div>
    )
}