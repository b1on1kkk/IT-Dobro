import type { Product } from "@/redux/features/basket.slice";

export function FinalProductsAmountCounter(basket: Product[]) {
  let productAmount = 0;
  let total_sum = 0;

  basket.forEach((product) => {
    productAmount += product.amount;

    total_sum += product.price * product.amount;
  });

  return [productAmount, total_sum];
}
