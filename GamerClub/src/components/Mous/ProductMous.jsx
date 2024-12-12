import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../routes/product/productSlice"; 
import s from "./Mous.module.css";

const products = [
    {
        id: 1,
        image: "/images/i (3)-no-bg-preview (carve.photos) 1.png",
        title: "Чёрно-синяя мышка spider",
        sell: "1000₽",
        description: "Эргономичная и стильная мышка.",
    },
    {
        id: 2,
        image: "/images/i (4)-no-bg-preview (carve.photos) 1.png",
        title: "Чёрно-голубая Мышка rider",
        sell: "1300₽",
        description: "Подходит для игр и офисных задач.",
    },
    {
        id: 3,
        image: "/images/6145971477-no-bg-preview (carve.photos) 1.png",
        title: "Чёрно-зелёная мышка freeWolf",
        sell: "1450₽",
        description: "Мышка с высокой точностью и прочностью.",
    },
];

export const ProductMous = () => {
    const { id } = useParams();
    const dispatch = useDispatch(); 

    const product = products.find(prod => prod.id === Number(id));

    if (!product) {
        return <p>Продукт не найден</p>;
    }

    const handleBuy = () => {
        dispatch(add({ title: product.title, image: product.image, sell: product.sell }));
        alert("Добавлено в корзину");
    };


    return (
        <div className={s.prodFlex}>
            <div className={s.prodImg}>
                <img src={product.image} alt={product.title} />
            </div>
            <div className={s.prod}>
                <div className={s.prodTi}>
                    <span>{product.title}</span>
                </div>
                <div className={s.prodDes}>
                    <span>{product.description}</span>
                </div>
                <div className={s.prodPr}>
                    <span>{product.sell}</span>
                </div>
                <div className={s.prodBtn}>
                    <button className={s.prodBtn} onClick={handleBuy}>Купить</button>
                </div>
            </div>
        </div>
    );
};
