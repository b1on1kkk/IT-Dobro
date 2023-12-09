export const GOODS_DATA = [
  {
    id: 1,
    img_link: "/IMG_9985 1.png",
    title: "РАССАДА ТОМАТОВ",
    price: 1,
    discount: 90,
    beforeDiscountPrice: 10,
    amount: 1
  },
  {
    id: 2,
    img_link: "/image 1.png",
    title: "РАССАДА БАЗИЛИКА",
    price: 1,
    discount: 90,
    beforeDiscountPrice: 10,
    amount: 1
  },
  {
    id: 3,
    img_link: "/image 2.png",
    title: "РАССАДА КАПУСТЫ",
    price: 1,
    discount: 90,
    beforeDiscountPrice: 10,
    amount: 1
  },
  {
    id: 4,
    img_link: "/image 3.png",
    title: "РАССАДА БАКЛАЖАНОВ",
    price: 1,
    discount: 90,
    beforeDiscountPrice: 10,
    amount: 1
  },
  {
    id: 5,
    img_link: "/image 4.png",
    title: "РАССАДА КЛУБНИКИ",
    price: 1,
    discount: 90,
    beforeDiscountPrice: 10,
    amount: 1
  },
  {
    id: 6,
    img_link: "/image 5.png",
    title: "РАССАДА ПЕРЦЕВ",
    price: 1,
    discount: 90,
    beforeDiscountPrice: 10,
    amount: 1
  }
];

export const INNER_MENU_LINKS = [
  { text: "ГЛАВНАЯ", link: "#body" },
  { text: "КАТАЛОГ", link: "#catalog" },
  { text: "О НАС", link: "#about" },
  { text: "КОНТАКТЫ", link: "#contacts" }
];

export interface CatalogTypes {
  picture_link: string;
  title: string;
  status: boolean;
}

export const CATALOG_SUBGROUPS = [
  { picture_link: "/image 10.png", title: "РАССАДА ОВОЩЕЙ", status: true },
  { picture_link: "/image 9.png", title: "РАССАДА МИКРОЗЕЛЕНИ", status: false },
  { picture_link: "/image 8.png", title: "РАССАДА ЯГОД", status: false },
  { picture_link: "/image 7.png", title: "РАССАДА КОРНЕПЛОДОВ", status: false }
];
