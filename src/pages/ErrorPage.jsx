import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-ful h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">404 Page Not Found</h1>
        <p className="w-96 mb-5 text-gray-400">
          The page you are looking for does not exist
        </p>
        <Link to="/" className="border border-black px-4 py-1">
          Return to Home{" "}
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
