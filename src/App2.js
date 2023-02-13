import { useEffect, useState } from "react";
import Header from "./layout/Header";
import { Link, Route, Routes } from "react-router-dom";
import RecommendFont from "./components/RecommendFont";
import AllFont from "./app2/AllFont";
import WhatFont from "./components/WhatFont";
import NotFoundPage from "./components/NotFoundPage";
import Join from "./components/Join";
import axios from "axios";
import Main from "./pages/Main";
import FontMap from "./pages/FontMap";

// style
import "./assets/style/style.scss";
import Footer from "./layout/Footer";
import "./assets/fonts/font.scss";

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="allFont">
          <Route index element={<Main />} />
          <Route path=":allFontId" element={<FontMap />} />
        </Route>
        {/* <Route path="/recommendFont" element={<RecommendFont />} />
        <Route path="/whatfont" element={<WhatFont />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/join" element={<Join />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
