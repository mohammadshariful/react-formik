import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menubar from "./pages/shared/Menubar";

const App = () => {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
