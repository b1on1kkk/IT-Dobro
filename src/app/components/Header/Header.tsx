import Image from "next/image";
import Link from "next/link";

import { Search, ShoppingCart, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed h-150 bg-white rounded-b-lg drop-shadow-md w-screen flex z-10">
      <div className="flex m-auto w-full px-40">
        <div>
          <Image src={"/logo.png"} alt="logo" width={215} height={125} />
        </div>
        <div className="flex-1 flex items-center mr-11">
          <div className="flex gap-2 items-center w-full px-2 py-1 border border-black rounded-2xl">
            <div>
              <Search width={20} height={20} />
            </div>
            <input
              type="text"
              placeholder="Поиск"
              className="w-full focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center mr-14">
          <div className="flex items-center gap-11">
            <Link href={"/basket"}>
              <div>
                <ShoppingCart color="#b7c7a4" />
              </div>
            </Link>
            <div>
              <Bell color="#b7c7a4" />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex gap-2">
            <div className="px-2 py-2 bg-main_green rounded-lg">
              Здравствуйте, username
            </div>
            <div className="h-40 w-40 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
