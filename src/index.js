import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MatchPage from "./pages/MatchPage";

import NoPage from "./pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/match/:matchId" element={<MatchPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
