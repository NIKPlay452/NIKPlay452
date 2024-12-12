import s from "./Keyboard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add } from "../../routes/product/productSlice";

const products = [
    {
        id: 1,
        image: "/images/52cab8fd49999ee577006ea65c0c-no-bg-preview (carve.photos) 1.png",
        title: "чёрно-зелёная клавиатура Experaza",
        sell: "1500₽",
        description: "Клавиатура с механическими переключателями.",
    },
    {
        id: 2,
        image: "/images/i (3)-no-bg-preview (carve.photos) 2.png",
        title: "Механическая Бело-розовая клавиатура",
        sell: "1550₽",
        description: "Эргономичная клавиатура для геймеров.",
    },
    {
        id: 3,
        image: "/images/i (4)-no-bg-preview (carve.photos) 2.png",
        title: "Механическая Чёрно-белая клавиатура",
        sell: "1600₽",
        description: "Прочная и точная клавиатура для работы и игр.",
    },
];

export const Keyboard = () => {
    const dispatch = useDispatch();

    const handleBuy = (image, title, sell) => {
        dispatch(add({ title, image, sell }));
        alert("Добавлено в корзину");
    };

    return (
        <div className={s.mainDiv}>
            <div className={s.cardM}>
                <img src="/images/1020038061-no-bg-preview (carve.photos) 1 (1).png" alt="" />
                <span>Клавиатуры</span>
            </div>
            <div>
                {products.map((product) => (
                    <div key={product.id} className={s.divProd}>
                        <img src={product.image} alt={product.title} />
                        <Link to={`product/${product.id}`}>{product.title}</Link>
                        <div className={s.btn}>
                            <span>{product.sell}</span>
                            <button
                                className={s.btnClick}
                                onClick={() => handleBuy(product.image, product.title, product.sell)}
                            >
                                Купить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
