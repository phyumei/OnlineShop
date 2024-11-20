import React from "react";
import { Container } from "../components/Container";
import BreadCrumbs from "../components/BreadCrumbs";

const MyCart = () => {
  return (
    <Container>
      <BreadCrumbs currentPageTitle="My Cart" />
    </Container>
  );
};

export default MyCart;
