import React from "react";
import { Container } from "../components/Container";
import BreadCrumbs from "../components/BreadCrumbs";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <Container className="flex-grow px-5">
      <BreadCrumbs currentPageTitle="My Cart" />
      <CartSection />
    </Container>
  );
};

export default MyCart;
