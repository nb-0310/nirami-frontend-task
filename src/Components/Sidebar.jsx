import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("dashboard");

  const handleItemClick = (item) => {
    setActive(item);
  };

  return (
    <div className="p-2 bg-slate-100 shadow-md h-full rounded-bl-xl">
      <ul className="md:text-md text-sm font-normal flex flex-col gap-1">
        <Link to="/">
          <li
            className={`${
              active === "dashboard"
                ? "bg-blue-400 text-white"
                : "text-gray-800"
            } hover:bg-blue-400 hover:cursor-pointer hover:text-white p-1 rounded`}
            onClick={() => handleItemClick("dashboard")}
          >
            Dashboard
          </li>
        </Link>
        <Link to="/banks">
          <li
            className={`${
              active === "banks" ? "bg-blue-400 text-white" : "text-gray-800"
            } hover:bg-blue-400 hover:cursor-pointer hover:text-white p-1 rounded`}
            onClick={() => handleItemClick("banks")}
          >
            Banks
          </li>
        </Link>
        <Link to="/accounts">
          <li
            className={`${
              active === "bank-accounts"
                ? "bg-blue-400 text-white"
                : "text-gray-800"
            } hover:bg-blue-400 hover:cursor-pointer hover:text-white p-1 rounded`}
            onClick={() => handleItemClick("bank-accounts")}
          >
            Bank Accounts
          </li>
        </Link>
        <li
          onClick={() => {
            handleItemClick("investments");
            setOpen(!open);
          }}
          className={`flex items-center gap-1 hover:bg-blue-400 hover:cursor-pointer hover:text-white p-1 rounded`}
        >
          <p
            className='flex justify-between items-center hover:bg-blue-400 hover:text-white'
          >
            Investments{" "}
            <p
            className={`text-xl transition-transform transform ${
              open ? "rotate-180" : ""
            }`}
          >
            <RiArrowDropDownLine />
          </p>
          </p>
        </li>
        {open && (
          <div
          className={`px-4 flex flex-col gap-1 overflow-hidden transition-all ${
            open ? "h-auto opacity-100" : "h-0 opacity-0"
          }`}  
          >
            <Link to="/fds">
              <p
                className={`${
                  active === "fixed-deposits"
                    ? "bg-blue-400 text-white"
                    : "text-gray-800"
                } hover:bg-blue-400 hover:cursor-pointer hover:text-white p-1 rounded`}
                onClick={() => handleItemClick("fixed-deposits")}
              >
                Fixed Deposits
              </p>
            </Link>
            <Link to="/rds">
              <p
                className={`${
                  active === "recurring-deposits"
                    ? "bg-blue-400 text-white"
                    : "text-gray-800"
                } hover:bg-blue-400 hover:cursor-pointer hover:text-white p-1 rounded`}
                onClick={() => handleItemClick("recurring-deposits")}
              >
                Recurring Deposits
              </p>
            </Link>
          </div>
        )}
        <Link to="/ppf">
          <li
            className={`${
              active === "ppf" ? "bg-blue-400 text-white" : "text-gray-800"
            } hover:bg-blue-400 hover:cursor-pointer hover:text-white p-1 rounded`}
            onClick={() => handleItemClick("ppf")}
          >
            PPF Account
          </li>
        </Link>
        <Link to="/taxes">
          <li
            className={`${
              active === "taxes-paid"
                ? "bg-blue-400 text-white"
                : "text-gray-800"
            } hover:bg-blue-400 hover:cursor-pointer hover:text-white p-1 rounded`}
            onClick={() => handleItemClick("taxes-paid")}
          >
            Taxes Paid
          </li>
        </Link>
        <Link to="/upload">
          <li
            className={`${
              active === "upload-statements"
                ? "bg-blue-400 text-white"
                : "text-gray-800"
            } hover:bg-blue-400 hover:cursor-pointer hover:text-white p-1 rounded`}
            onClick={() => handleItemClick("upload-statements")}
          >
            Upload Statements
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
