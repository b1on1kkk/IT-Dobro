"use client";

// components
import Image from "next/image";
import ProductDicount from "../ProductDicount/ProductDicount";
//

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { addProduct, removeProduct } from "@/redux/features/basket.slice";
//

// types
import type { Product } from "@/redux/features/basket.slice";
//

function CheckForExistance(products: Product[], target: number): number {
  return products.findIndex((product) => product.id === target);
}

interface TProductCard {
  good: Product;
}

export default function ProductCard({ good }: TProductCard) {
  const basket = useSelector((state: RootState) => state.basket);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col px-8 py-3 gap-3 items-center shadow-lg min-w-210">
      <Image src={good.img_link} alt={good.img_link} width={125} height={125} />
      <span className="text-xs font-semibold">{good.title}</span>
      <span className="text-lg font-semibold">{good.price}BYN</span>
      <ProductDicount discount_range="90%">{`${good.discount}BYN`}</ProductDicount>
      {CheckForExistance(basket, good.id) !== -1 ? (
        <div
          className="px-6 py-1 border rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-all ease-in duration-200"
          onClick={() => dispatch(removeProduct(good))}
        >
          В корзине
        </div>
      ) : (
        <div
          className="px-6 py-1 border rounded-lg border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white transition-all ease-in duration-200"
          onClick={() => dispatch(addProduct(good))}
        >
          Купить
        </div>
      )}
    </div>
  );
}
