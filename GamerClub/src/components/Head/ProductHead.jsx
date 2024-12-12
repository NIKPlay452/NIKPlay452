import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../routes/product/productSlice"; 
import s from "./Head.module.css";

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
        title: "Наушники pioner",
        sell: "2300₽",
        description: "Наушники с отличным качеством звука для музыки и игр.",
    },
    {
        id: 3,
        image: "/images/i (5)-no-bg-preview (carve.photos) 1.png",
        title: "Наушники “ушки”",
        sell: "2500₽",
        description: "Удобные наушники с мягкими амбушюрами для долгого прослушивания.",
    },
];

export const ProductHead = () => {
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
