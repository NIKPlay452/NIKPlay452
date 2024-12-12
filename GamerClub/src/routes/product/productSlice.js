import { createSlice, nanoid } from "@reduxjs/toolkit";

let arr = JSON.parse(localStorage.getItem('product')) ?? [];

const productSlice = createSlice({
    name: "product",
    initialState: {
        value: arr
    },
    reducers: {
        add: (s, a) => {
            if (a.payload) {
                const { title, image, sell } = a.payload;
                s.value.push({
                    id: nanoid(),
                    title,
                    image,
                    sell
                });
                localStorage.setItem('product', JSON.stringify(s.value));
            }
        },
        remove: (s, a) => {
            const productId = a.payload; 
            s.value = s.value.filter(product => product.id !== productId); 
            localStorage.setItem('product', JSON.stringify(s.value)); 
        }
    }
});

export default productSlice.reducer;

export const { add, remove } = productSlice.actions;
