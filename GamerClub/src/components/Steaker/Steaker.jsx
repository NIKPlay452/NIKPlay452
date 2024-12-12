import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../routes/product/productSlice";
import s from "./Steaker.module.css";

export const Steaker = () => {
    const dispatch = useDispatch();

    const handleBuy = (image, title, sell) => {
        dispatch(add({ title, image, sell }));
        alert("Добавлено в корзину");
    };

    const products = [
        {
            id: 1,
            image: "/images/i (6)-edited-free (carve.photos) (1) 1.png",
            title: "Наклейка “Вода и пламя”",
            sell: "100₽",
            description: "Эта наклейка символизирует гармонию воды и огня.",
        },
        {
            id: 2,
            image: "/images/i (7)-edited-free (carve.photos) 1.png",
            title: "Наклейка “Монстр”",
            sell: "100₽",
            description: "Яркая наклейка с изображением монстра.",
        },
        {
            id: 3,
            image: "/images/1647116838118851083-edited-free (carve.photos) 1.png",
            title: "Наклейка “Дракон”",
            sell: "80₽",
            description: "Эпичная наклейка с изображением дракона.",
        },
    ];

    return (
        <div className={s.mainDiv}>
            <div className={s.cardM}>
                <img src="/images/i (2)-edited-free (carve.photos) 1 (1).png" alt="" />
                <span>Наклейки</span>
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
                                onClick={() =>
                                    handleBuy(product.image, product.title, product.sell)
                                }
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
