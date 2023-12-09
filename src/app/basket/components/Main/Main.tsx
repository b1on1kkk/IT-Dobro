// components
import Image from "next/image";
//

// redux
import { removeProduct, changingAmount } from "@/redux/features/basket.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
//

// utils
import { FinalProductsAmountCounter } from "../utils/FinalProductsAmountCounter";
//

// types
import type { Product } from "@/redux/features/basket.slice";
//

interface TMain {
  basket: Product[];
}

export default function Main({ basket }: TMain) {
  const [productAmount, total_sum] = FinalProductsAmountCounter(basket);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex gap-5 mt-14">
      <div className="flex-1 flex flex-col gap-14">
        {basket.map((good, idx) => {
          return (
            <div className="p-5 bg-main_green w-full flex gap-12" key={idx}>
              <div>
                <Image
                  src={good.img_link}
                  alt="picture"
                  width={125}
                  height={125}
                />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <span className="text-base font-semibold">{good.title}</span>
                <span onClick={() => dispatch(removeProduct(good))}>
                  Удалить
                </span>
              </div>
              <div className="flex flex-col justify-between items-center">
                <span className="text-base font-semibold">КОЛИЧЕСТВО ШТ.</span>
                <div className="px-5 py-2 flex gap-3 w-28 items-center bg-white rounded-3xl">
                  <input
                    type="number"
                    className="w-full text-2xl outline-none appearance-none"
                    value={good.amount}
                    onChange={(e) =>
                      dispatch(
                        changingAmount({ good: good, value: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between items-center">
                <span className="text-base font-semibold">СУММА</span>
                <span className="text-2xl font-semibold">
                  {good.amount * good.price}BYN
                </span>
              </div>
            </div>
          );
        })}

        <div className="flex">
          <div className="p-8 bg-second_green rounded-full font-semibold text-xl">
            ПРОДОЛЖИТЬ ПОКУПКИ
          </div>
        </div>
      </div>

      {/*  */}

      <div>
        <div className="px-8 py-9 bg-main_green flex flex-col gap-12 h-320">
          <div className="flex gap-48 pb-2 border-b-2 border-black px-3">
            <div className="flex-1">ТОВАРЫ({productAmount})</div>
            <div className="text-2xl font-semibold">{total_sum}BYN</div>
          </div>

          <div className="flex gap-48 pb-2 px-3">
            <div className="flex-1">ВСЕГО (BYN.)</div>
            <div className="text-2xl font-semibold">{total_sum}BYN</div>
          </div>

          <div className="flex justify-center">
            <div className="px-16 py-5 bg-second_green rounded-full">
              ОФОРМИТЬ ЗАКАЗ
            </div>
          </div>
        </div>

        <div className="mt-5">*пенсионерам доставим бесплатно</div>
      </div>
    </div>
  );
}
