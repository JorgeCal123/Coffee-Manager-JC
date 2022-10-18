import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./views/register";
import { Sigin } from "./views/sign_in";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/registro" element={<Register />} />
      <Route path="/signin" element={<aside><Sigin /></aside>} />
      
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;