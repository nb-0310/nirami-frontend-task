import React, { useContext, useState } from "react";
import { DataContext } from "../Context/Context";

const Dashboard = () => {
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
    <div className="bg-white md:p-4 p-1 shadow-lg text-sm">
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
              {rd.accountNumber} - {rd.bankName}
            </option>
          ))}
        </select>
        <p className="text-gray-600">Search/Select RD from dropdown</p>
      </div>

      {selectedRD && (
        <>
          <div className="bg-gray-100 p-4 rounded shadow-md mb-4 text-xs">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center">
              <div className="flex">
                <p className="font-medium text-gray-600">
                  Account Number:
                </p>
                <p className="text-gray-800">{" "}{selectedRD.accountNumber}</p>
              </div>

              <div className="flex">
                <p className="font-medium text-gray-600">
                  Linked Bank Account:
                </p>
                <p className="text-gray-800">{" "}{selectedRD.linkedBankAccount}</p>
              </div>

              <div className="flex">
                <p className="font-medium text-gray-600">Status:</p>
                <p className="text-gray-800">{" "}{selectedRD.status}</p>
              </div>

              <div className="flex">
                <p className="font-medium text-gray-600">Bank Code:</p>
                <p className="text-gray-800">{" "}{selectedRD.bankCode}</p>
              </div>

              <div className="flex">
                <p className="font-medium text-gray-600">Bank Name:</p>
                <p className="text-gray-800">{" "}{selectedRD.bankName}</p>
              </div>

              <div>
                <button className="bg-blue-500 text-white py-1 px-2 text-xs rounded hover:bg-blue-600">
                  Update
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:grid-rows-3 grid-rows-4 gap-4">
            <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-600">
                Available Balance
              </p>
              <p className="text-blue-400 font-medium text-xl">
                {selectedRD.otherDetails.availableBalance}
              </p>
            </div>

            <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-600">
                Principal Amount
              </p>
              <p className="text-blue-400 font-medium text-xl">
                {selectedRD.otherDetails.principalAmount}
              </p>
            </div>

            <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-600">
                Interest Earned
              </p>
              <p className="text-blue-400 font-medium text-xl">
                {selectedRD.otherDetails.interestAmount}
              </p>
            </div>

            <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-600">
                Monthly Deposit
              </p>
              <p className="text-blue-400 font-medium text-xl">
                {selectedRD.otherDetails.monthlyDeposit}
              </p>
            </div>

            <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-600">Interest Rate</p>
              <p className="text-blue-400 font-medium text-xl">
                {selectedRD.otherDetails.interestPercentage}
              </p>
            </div>

            <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-600">Tenure</p>
              <p className="text-blue-400 font-medium text-xl">
                {selectedRD.otherDetails.tenure}
              </p>
            </div>

            <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-600">
                Maturity Amount
              </p>
              <p className="text-blue-400 font-medium text-xl">
                {selectedRD.otherDetails.maturityAmount}
              </p>
            </div>

            <div className="p-2 bg-slate-100 border border-slate-300 rounded-md flex flex-col gap-3">
              <p className="text-sm font-medium text-gray-600">Tax Paid</p>
              <p className="text-blue-400 font-medium text-xl">
                {selectedRD.otherDetails.tax}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
