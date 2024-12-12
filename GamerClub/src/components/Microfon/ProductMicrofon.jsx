import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../routes/product/productSlice"; 
import s from "./Microfon.module.css"

const products = [
    {
        id: 1,
        image: "/images/3fc8b5fb-767d-4fb1-884f-066fe11c4c78default-no-bg-preview (carve.photos) 1.png",
        title: "Микрофон aSR",
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

export const ProductMicrofon = () => {
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
