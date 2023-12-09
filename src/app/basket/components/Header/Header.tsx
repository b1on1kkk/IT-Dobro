import { ShoppingCart, MoveRight } from "lucide-react";

import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <ShoppingCart color="#b7c7a4" />
        <span>ВАША КОРЗИНА</span>
      </div>
      <div className="flex gap-1">
        <Link href={"/"}>
          <span>ГЛАВНАЯ</span>
        </Link>
        <MoveRight />
        <span>КОРЗИНА</span>
      </div>
    </div>
  );
}
