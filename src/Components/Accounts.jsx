import React, { useContext, useState } from "react";
import { DataContext } from "../Context/Context";

const Accounts = () => {
  const { data } = useContext(DataContext);
  const [id, setId] = useState(1);

  let selectedRD = null;
  if (data) {
    for (const rd of data) {
      if (rd.id === id) {
        selectedRD = rd;
        break;
      }
    }
  }

  return (
    <div className="bg-white p-4 text-sm h-full">
      <div className="flex items-center gap-3 mb-4 text-base">
        <select
          className="bg-gray-200 px-2 py-1 rounded w-[40%]"
          onChange={(e) => {
            setId(Number(e.target.value));
            console.log(e.target.value);
          }}
        >
          {data?.map((rd) => (
            <option key={rd.id} value={rd.id}>
              {rd.linkedBankAccount} - {rd.bankName}
            </option>
          ))}
        </select>
        <p className="text-gray-600">Search/Select Account from dropdown</p>
      </div>

      {selectedRD && (
        <>
          <div className="bg-gray-100 p-4 h-[87%] rounded shadow-md mb-4">
            <div className="h-full w-full flex flex-col gap-4">
              <div>
                <p className="text-md font-bold text-gray-600">
                  Account Number
                </p>
                <p className="text-blue-400 font-bold text-xl">{selectedRD.linkedBankAccount}</p>
              </div>

              <div>
                <p className="text-md font-bold text-gray-600">Bank Code</p>
                <p className="text-blue-400 font-bold text-xl">{selectedRD.bankCode}</p>
              </div>

              <div>
                <p className="text-md font-bold text-gray-600">Bank Name</p>
                <p className="text-blue-400 font-bold text-xl">{selectedRD.bankName}</p>
              </div>

              <div>
                <p className="text-md font-bold text-gray-600">Available Balance</p>
                <p className="text-blue-400 font-bold text-xl">{selectedRD.balance}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Accounts;
