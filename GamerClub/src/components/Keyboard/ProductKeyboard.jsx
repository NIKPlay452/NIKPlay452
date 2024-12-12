import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../routes/product/productSlice"; 
import s from "./Keyboard.module.css";

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

export const ProductKeyboard = () => {
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
