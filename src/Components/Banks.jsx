import React from "react";
import sbi from "../Assets/sbi.png";
import hdfc from "../Assets/hdfc.png";
import icici from "../Assets/icici.png";

const Banks = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3 p-4">
      <div className="bg-slate-100 border border-slate-300 rounded-md flex justify-center items-center">
        <img src={sbi} alt="sbi" className=" aspect-auto object-contain w-full h-full" />
      </div>
      <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex justify-center items-center">
        <img src={hdfc} alt="sbi" className=" aspect-auto object-contain w-full h-full" />
      </div>
      <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex justify-center items-center">
        <img src={icici} alt="sbi" className=" aspect-auto object-contain w-full h-full" />
      </div>
    </div>
  );
};

export default Banks;
