import React from "react";
import Nav from "./cartComponent/Nav";
import CartSection from "./cartComponent/CartSection";
import CartFooter from "./cartComponent/CartFooter";
import data from "./data";

function Container() {
  const { id, title, price, img, amount } = data;

  const [datas, setDatas] = React.useState(data);
  return (
    <>
      <Nav datas={datas} />
      <CartSection datas={datas} setDatas={setDatas} />
      <CartFooter datas={datas} setDatas={setDatas} />
    </>
  );
}

export default Container;
