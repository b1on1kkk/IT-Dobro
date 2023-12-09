"use client";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import EmptyBasketError from "./components/EmptyBasketError/EmptyBasketError";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Basket() {
  const basket = useSelector((state: RootState) => state.basket);

  return (
    <div className="mx-24 mt-9 mb-32">
      <Header />
      {basket.length > 0 ? (
        <>
          <Main basket={basket} />
          <Footer />
        </>
      ) : (
        <EmptyBasketError />
      )}
    </div>
  );
}
