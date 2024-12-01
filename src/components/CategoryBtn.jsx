import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryBtn = ({ category: { id, name, isActive } }) => {
  const { setActiveCategory } = useCategoryStore();

  const handleClick = () => {
    setActiveCategory(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isActive && "bg-black text-white"
      } border text-nowrap border-black px-4 py-2 me-2`}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
