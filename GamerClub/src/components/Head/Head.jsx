import s from "./Head.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add } from "../../routes/product/productSlice";

const products = [
    {
        id: 1,
        image: "/images/c945f1fbb564d0e4178b186222aa379c-no-bg-preview (carve.photos) 1.png",
        title: "наушники Street",
        sell: "2000₽",
        description: "Модные и удобные наушники для любого повседневного использования.",
    },
    {
        id: 2,
        image: "/images/naushniki_pioneer_se_mj722t_r_1-no-bg-preview (carve.photos) 1.png",
        title: "Наушники Pioner",
        sell: "2300₽",
        description: "Наушники с отличным качеством звука для музыки и игр.",
    },
    {
        id: 3,
        image: "/images/i (5)-no-bg-preview (carve.photos) 1.png",
        title: "Наушники “Ушки”",
        sell: "2500₽",
        description: "Удобные наушники с мягкими амбушюрами для долгого прослушивания.",
    },
];

export const Head = () => {
    const dispatch = useDispatch();

    const handleBuy = (image, title, sell) => {
        dispatch(add({ title, image, sell }));
        alert("Добавлено в корзину");
    };

    return (
        <div className={s.mainDiv}>
            <div className={s.cardM}>
                <img src="/images/i-no-bg-preview (carve.photos) 1 (1).png" alt="" />
                <span>Наушники</span>
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
