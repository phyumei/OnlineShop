import React from "react";
import ProductCard from "./ProductCard";
import { Container } from "./Container";
import useProductStore from "../store/useProductStore";

const ProductSection = () => {
  const { products } = useProductStore();

  return (
    <section className="px-5 mb-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">Available Product Lists</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((products) => (
            <ProductCard key={products.id} products={products} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
