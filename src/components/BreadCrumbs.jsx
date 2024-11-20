import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ currentPageTitle }) => {
  return (
    <div className="w-full mb-5">
      <Link to="/" className="text-gray-500">
        Home
      </Link>
      <span className="text-gray-500">/</span>
      <p>{currentPageTitle}</p>
    </div>
  );
};

export default BreadCrumbs;
