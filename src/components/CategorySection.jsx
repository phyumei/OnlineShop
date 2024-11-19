import React from "react";
import CategoryBtn from "./CategoryBtn";
import { Container } from "./Container";

const CategorySection = function () {
  const title = "Product Categories";
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section id="category-section" className="p-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <div className="flex overflow-scroll category-btn-group">
          <CategoryBtn name="all" current={true} />
          {categories.map((category) => (
            <CategoryBtn key={category} name={category} current={false} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
