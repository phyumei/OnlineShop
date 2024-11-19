import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="mx-5 mt-auto bg-black text-white text-center py-2">
      © {date}{" "}
      <a href="https://google.com" className="underline text-gray-300">
        Phyu Phyu Aung
      </a>
      . All rights reserved.
    </footer>
  );
};

export default Footer;
