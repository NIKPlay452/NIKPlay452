// Microfon component
import { useDispatch } from "react-redux";
import { add } from "../../routes/product/productSlice";
import { Link } from "react-router-dom";
import s from "./Microfon.module.css";

const products = [
    {
        id: 1,
        image: "/images/3fc8b5fb-767d-4fb1-884f-066fe11c4c78default-no-bg-preview (carve.photos) 1.png",
        title: "Микрофон ASR",
        sell: "3000₽",
        description: "Высококачественный микрофон для студий.",
    },
    {
        id: 2,
        image: "/images/890085_mikrofon-provodnoy-vivanco-it-mic1-black-36-no-bg-preview (carve.photos) 1.png",
        title: "Микрофон Villiams",
        sell: "3200₽",
        description: "Профессиональный микрофон для записи.",
    },
    {
        id: 3,
        image: "/images/5KemL_pWBegccLx5oB_6-g-edited-free (carve.photos) 1.png",
        title: "Микрон HyperX",
        sell: "3500₽",
        description: "Микрофон для стримеров и профессионалов.",
    },
];

export const Microfon = () => {
    const dispatch = useDispatch();

    const handleBuy = (image, title, sell) => {
        dispatch(add({ title, image, sell }));
        alert("Добавлено в корзину");
    };

    return (
        <div className={s.mainDiv}>
            <div className={s.cardM}>
                <img src="/images/i (1)-no-bg-preview (carve.photos) 1 (1).png" alt="" />
                <span>Микрофоны</span>
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
