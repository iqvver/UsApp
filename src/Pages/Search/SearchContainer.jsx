import React from "react";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import All from "./Tabs/All";
import Analysts from "./Tabs/Analysts";
import Android from "./Tabs/Android";
import Designers from "./Tabs/Designers";
import Ios from "./Tabs/Ios";
import Managers from "./Tabs/Managers";
import loop from "../../Assets/icons/loop.svg";
import bar from "../../Assets/icons/bar.svg";

const SearchContainer = () => {
  return (
    <div className="container">
      <div className="container-wrapper">
        <Search loop={loop} bar={bar} />
        <Routes>
          <Route path="all" element={<All />} />
          <Route path="analysts" element={<Analysts />} />
          <Route path="android" element={<Android />} />
          <Route path="designers" element={<Designers />} />
          <Route path="ios" element={<Ios />} />
          <Route path="managers" element={<Managers />} />
        </Routes>
      </div>
    </div>
  );
};

export default SearchContainer;
