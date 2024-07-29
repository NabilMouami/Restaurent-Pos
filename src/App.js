import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Orders from "./pages/Orders";
import Customer from "./pages/Customer";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { Kitchen } from "./pages/Kitchen";
import Kanban from "./components/Kanban";
import Board from "./components/Board";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
