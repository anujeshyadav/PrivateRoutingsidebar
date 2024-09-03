// import { Children } from "react";

export const Navigation = [
  {
    path: "/home",
    title: "Dashboard",
    id: "Dashboard",
    Children: [],
  },
  {
    title: "Product ",
    id: "Product ",
    Children: [
      {
        path: "/productlist",
        title: "ProductList",
        id: "ProductList",
      },
      {
        path: "/product",
        title: "Add Product",
        id: "AddProduct",
      },
    ],
  },
  {
    id: "Category ",
    title: "Category ",
    Children: [
      {
        path: "/productlist",
        title: "Category List",
        id: "CategoryList",
      },
      {
        path: "/product",
        title: "Add Category",
        id: "AddCategory",
      },
    ],
  },
  {
    path: "/home",
    title: "page b",
    id: "pageb",
    Children: [],
  },
  {
    path: "/home",
    title: "Page c",
    id: "Pagec",
    Children: [],
  },
];
