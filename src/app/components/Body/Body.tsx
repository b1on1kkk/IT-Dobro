import MainSlider from "./MainSlider/MainSlider";
import GoodsOnSale from "./GoodsOnSale/GoodsOnSale";
import InnerPageLinks from "./InnerPageLinks/InnerPageLinks";

export default function Body() {
  return (
    <div className="flex flex-col gap-12 pb-10" id="body">
      <MainSlider />
      <GoodsOnSale />
      <InnerPageLinks />
    </div>
  );
}
