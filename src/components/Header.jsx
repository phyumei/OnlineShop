import React from "react";
import { Container } from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-5 py-5">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Online Shop</h1>
          <Link
            to={"/my-cart"}
            className="border border-black px-5 py-2 relative"
          >
            My Cart
            <span className="inline-block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-3 py-1 text-xs">
              1
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
