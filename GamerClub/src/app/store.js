import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../routes/product/productSlice"

export default configureStore({
    reducer: {
        product: productSlice
    }
})