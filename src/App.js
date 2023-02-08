import { useEffect, useState } from "react";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const [recommendData, setRecommendData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const listDataList = await axios.get("./DB/listData.json");
      setRecommendData(listDataList.data.recommendData);
      setAllData(listDataList.data.allData);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<RecommendFont recommendData={recommendData} />}
        />
        <Route path="/allfont" element={<AllFont allData={allData} />} />
        <Route path="/whatfont" element={<WhatFont />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
