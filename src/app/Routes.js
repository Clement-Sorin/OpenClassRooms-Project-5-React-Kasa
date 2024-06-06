import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../sass/main.scss";
import Home from "./pages/Home";
import Accomodation from "./pages/Accomodation";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Default from "./layout/Default";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement/:id" element={<Accomodation />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error404 />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
