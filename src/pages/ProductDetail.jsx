import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/product";
import { Container } from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumbs from "../components/BreadCrumbs";

const ProductDetail = () => {
  const { id } = useParams();
  const currentProduct = products.find((products) => products.id == id);
  return (
    <Container>
      <BreadCrumbs currentPageTitle="Product Detail" />
      <div className="border border-black p-10">
        <div className="grid grid-cols-2 ">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              className="block w-3/4 mx-auto"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-start gap-5">
          <h3 className="text-3xl font-bold">{currentProduct.title}</h3>
          <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1">
            {currentProduct.category}
          </p>
          <p>{currentProduct.description}</p>
          <Rating rate={currentProduct.rating.rate} />
          <div className="flex justify-between items-center w-full ">
            <p>Price : {currentProduct.price} </p>
            <button className="text-sm border border-black px-3 py-1">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
