import React from "react";
import pfp from '../Assets/pfp.png'

const Header = () => {
  return (
    <div className="w-full p-2 flex justify-between items-center bg-blue-300 rounded-t-md shadow-sm">
      <div className="text-blue-800 font-bold text-md">Account Aggregator</div>
      <div className=" w-6 h-6 rounded-full overflow-hidden">
        <img src={pfp} alt="pfp" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Header;
