import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  img_link: string;
  title: string;
  price: number;
  discount: number;
  beforeDiscountPrice: number;
  amount: number;
}

const initialState: Product[] = [];

export const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((product) => {
        if (product.title !== action.payload.title) return product;
      });
    },
    changingAmount: (state, action) => {
      const { good, value } = action.payload;

      return state.map((product) => {
        if (product.title === good.title) {
          return { ...product, amount: parseInt(value) };
        }
        return product;
      });
    }
  }
});

export const { addProduct, removeProduct, changingAmount } = basket.actions;

export default basket;
