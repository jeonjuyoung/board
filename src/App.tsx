import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Content from "./content";
import NotFound from "./NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/content/:contentId" element={<Content />} />

          {/* 규칙확인 후 일치하는 라우트 없으면 처리 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
