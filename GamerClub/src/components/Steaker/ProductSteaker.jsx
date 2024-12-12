import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../routes/product/productSlice"; 
import s from "./Steaker.module.css";

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

export const ProductSteaker = () => {
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
