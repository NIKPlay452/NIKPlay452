import { useDispatch } from "react-redux";
import { add } from "../../routes/product/productSlice";
import { Link } from "react-router-dom";
import s from "./Mous.module.css";

const products = [
    {
        id: 1,
        image: "/images/i (3)-no-bg-preview (carve.photos) 1.png",
        title: "Чёрно-синяя мышка Spider",
        sell: "1000₽",
        description: "Эргономичная и стильная мышка.",
    },
    {
        id: 2,
        image: "/images/i (4)-no-bg-preview (carve.photos) 1.png",
        title: "Чёрно-голубая Мышка Rider",
        sell: "1300₽",
        description: "Подходит для игр и офисных задач.",
    },
    {
        id: 3,
        image: "/images/6145971477-no-bg-preview (carve.photos) 1.png",
        title: "Чёрно-зелёная мышка FreeWolf",
        sell: "1450₽",
        description: "Мышка с высокой точностью и прочностью.",
    },
];

export const Mous = () => {
    const dispatch = useDispatch();

    const handleBuy = (image, title, sell) => {
        dispatch(add({ title, image, sell }));
        alert("Добавлено в корзину");
    };

    return (
        <div className={s.mainDiv}>
            <div className={s.cardM}>
                <img src="/images/orig-no-bg-preview (carve.photos) 1 (1).png" alt="" />
                <span>Мышки</span>
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
