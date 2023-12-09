import TitleText from "@/app/reusable_components/TitleText/TitleText";

import { GOODS_DATA } from "@/app/constants";

import ProductCard from "@/app/reusable_components/ProductCard/ProductCard";

export default function GoodsOnSale() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <TitleText>ТОВАРЫ НА АКЦИИ</TitleText>
      <div className="flex gap-6 rounded-lg">
        {GOODS_DATA.map((good, idx) => {
          return <ProductCard good={good} key={idx} />;
        })}
      </div>
    </div>
  );
}
