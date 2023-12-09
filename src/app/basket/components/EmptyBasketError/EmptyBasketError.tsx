import empty from "../../../../../public/svg.svg";
import Image from "next/image";
import TitleText from "@/app/reusable_components/TitleText/TitleText";

export default function EmptyBasketError() {
  return (
    <div className="flex items-center mt-14 flex-col gap-5">
      <Image src={empty} alt="empty" />
      <TitleText>В вашей корзине пока пусто</TitleText>
    </div>
  );
}
