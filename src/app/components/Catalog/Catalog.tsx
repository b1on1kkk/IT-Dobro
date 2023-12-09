"use client";

import { useState } from "react";

// components
import TitleText from "@/app/reusable_components/TitleText/TitleText";
import Image from "next/image";
import ProductCard from "@/app/reusable_components/ProductCard/ProductCard";
//

// constants (temporarily)
import { CATALOG_SUBGROUPS, GOODS_DATA } from "@/app/constants";
//

// types
import type { CatalogTypes } from "@/app/constants";
//

export default function Catalog() {
  // temporary solution
  const [catalogTypes, setCatalogTypes] =
    useState<CatalogTypes[]>(CATALOG_SUBGROUPS);

  function ChoosenSubGroup(chosen: string) {
    setCatalogTypes(
      ...[
        catalogTypes.map((good) => {
          if (JSON.stringify(good) === chosen) return { ...good, status: true };
          return { ...good, status: false };
        })
      ]
    );
  }
  //

  return (
    <div className="flex flex-col gap-6 items-center pt-8 pb-24" id="catalog">
      <TitleText>КАТАЛОГ</TitleText>

      <div className="flex gap-16">
        {catalogTypes.map((good, idx) => {
          return (
            <div
              key={idx}
              className={`flex flex-col items-center hover:opacity-100 transition-all duration-200 ease-in ${
                good.status ? "" : "opacity-50"
              }`}
              onClick={() => ChoosenSubGroup(JSON.stringify(good))}
            >
              <Image
                src={good.picture_link}
                alt={good.picture_link}
                width={200}
                height={200}
              />
              <div>{good.title}</div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-6">
        {GOODS_DATA.map((good, idx) => {
          return <ProductCard good={good} key={idx} />;
        })}
      </div>
    </div>
  );
}
