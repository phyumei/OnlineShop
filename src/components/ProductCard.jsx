import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductCard = ({
  products: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug,
  },
}) => {
  const { cart, addCart } = useCartStore();
  const navigate = useNavigate();

  const handleAddedBtn = (event) => {
    event.stopPropagation();
    toast.error("Item is already in cart");
  };

  const handleAddCartBtn = (event) => {
    event.stopPropagation();
    const newCart = {
      id: crypto.randomUUID(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleOpenDetail = () => {
    navigate(`/product-detail/${slug}`);
  };

  return (
    <div
      onClick={handleOpenDetail}
      to={`/product-detail/${id}`}
      className="border border-black p-5 flex flex-col items-start gap-5"
    >
      <img src={image} className="h-40" alt="" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between items-end w-full ">
        <p>{price}</p>
        {cart.find((cart) => cart.productId == id) ? (
          <button
            onClick={handleAddedBtn}
            className="text-sm border bg-black text-white px-3 py-1"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCartBtn}
            className="text-sm border border-black px-3 py-1"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
