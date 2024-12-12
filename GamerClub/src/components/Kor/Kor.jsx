import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../routes/product/productSlice';
import s from "./Kor.module.css"

export const Kor = () => {
    const dispatch = useDispatch();
    const products = useSelector((s) => s.product.value);

    const handleRemove = (id) => {
        dispatch(remove(id));
    };

    const Total = () => {
        let total = 0;
        products.forEach(product => {
            total += parseFloat(product.sell);
        });
        return total;
    };

    return (
        <div className={s.container}>
            <h1>Корзина</h1>
            <div className={s.flexTop}>
                {products.map((product) =>
                    <div className={s.box}>
                        <div className={s.Flex} key={product.id}>
                            <div className={s.containerImg}>
                                <img src={product.image} />
                            </div>
                            <span className={s.boxText}>{product.title}</span>
                            <div className={s.btnDel}>
                                <span>{product.sell}</span>
                                <button onClick={() => handleRemove(product.id)}>Удалить</button>
                            </div>
                        </div>
                        <div className={s.line}></div>
                    </div>
                )}
            </div>
            <h2>Итоговая сумма: {Total()}₽</h2>
            <button className={s.btnBuy} onClick={() => alert("Спасибо за покупку")}>Заказать</button>
        </div>
    );
};
