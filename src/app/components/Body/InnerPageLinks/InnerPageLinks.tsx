import { INNER_MENU_LINKS } from "@/app/constants";

import Link from "next/link";

export default function InnerPageLinks() {
  return (
    <div className="flex gap-7 justify-center">
      {INNER_MENU_LINKS.map((links, idx) => {
        return (
          <Link href={links.link} key={idx} scroll={true}>
            <div className="px-14 py-5 rounded-3xl bg-main_green font-semibold hover:bg-green-600 hover:text-white transition-all duration-200 ease-in">
              {links.text}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
