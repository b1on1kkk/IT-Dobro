import { GOODS_DATA } from "@/app/constants";

import ProductCard from "@/app/reusable_components/ProductCard/ProductCard";

export default function Footer() {
  return (
    <div className="mt-28 flex flex-col gap-7">
      <div className="font-semibold text-xl">с этим товаром также покупают</div>
      <div className="flex gap-6 justify-center">
        {GOODS_DATA.map((good, idx) => {
          return <ProductCard good={good} key={idx} />;
        })}
      </div>
    </div>
  );
}
