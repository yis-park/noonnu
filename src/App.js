import { useEffect, useState } from "react";
import Header from "./layout/Header";
import { Route, Routes, Router } from "react-router-dom";
import RecommendFont from "./components/RecommendFont";
import AllFont from "./components/AllFont";
import WhatFont from "./components/WhatFont";
import NotFoundPage from "./components/NotFoundPage";
import Join from "./components/Join";
import axios from "axios";

// style
import "./assets/style/style.scss";
import Footer from "./layout/Footer";
import "./assets/fonts/font.scss";

import { FontDetail } from "./components/FontDetail";
// import { Search } from "./components/Search";

function App() {
  const [_allData, setAllData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const listDataList = await axios.get("./DB/listData.json");
      setAllData(listDataList.data.allData);
    };
    getData();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<RecommendFont allData={_allData} />} />
        <Route path="allFont">
          <Route index element={<AllFont allData={_allData} />} />
          <Route path=":allFontId" element={<FontDetail items={_allData} />} />
        </Route>
        <Route path="/whatfont" element={<WhatFont />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/join" element={<Join />} />
      </Routes>

      <Footer />
      {/* <Search /> */}
    </>
  );
}

export default App;
