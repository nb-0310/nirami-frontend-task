import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Accounts from "./Components/Accounts";
import Banks from "./Components/Banks";
import RDs from "./Components/RDs";
import FDs from "./Components/FDs";
import Taxes from "./Components/Taxes";
import Upload from "./Components/Upload";
import PPF from "./Components/PPF";
import Footer from "./Components/Footer";
import { DataContextProvider } from "./Context/Context";

const App = () => {
  return (
    <Router>
      <DataContextProvider>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="grid grid-cols-12 grid-rows-[auto,1fr,auto] w-full h-full md:w-[60%] md:h-[70%]">
            <div className="col-span-12">
              <Header />
            </div>

            <div className="sm:col-span-3 col-span-4 row-span-2">
              <Sidebar />
            </div>

            <div className="sm:col-span-9 col-span-8 row-span-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/banks" element={<Banks />} />
                <Route path="/rds" element={<RDs />} />
                <Route path="/fds" element={<FDs />} />
                <Route path="/ppf" element={<PPF />} />
                <Route path="/taxes" element={<Taxes />} />
                <Route path="/upload" element={<Upload />} />
              </Routes>
            </div>

            <div className="sm:col-span-9 col-span-8">
              <Footer />
            </div>
          </div>
        </div>
      </DataContextProvider>
    </Router>
  );
};

export default App;