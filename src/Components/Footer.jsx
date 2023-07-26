import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-200 text-lg p-2 flex justify-center items-center shadow-md rounded-br-md">
      <div>
        Made by{" "}
        <a
          href="https://github.com/nb-0310"
          target="_blank"
          className="text-blue-400 font-semibold underline"
        >
          Nirzar
        </a>
      </div>
    </div>
  );
};

export default Footer;
