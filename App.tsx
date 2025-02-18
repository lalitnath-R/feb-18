import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import SearchStudent from "./components/searchstudent";
import DeleteStudent from "./components/deletestudent";
import DisplayAll from "./components/Displayall";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/s-add" element={<AddStudent />} />
          <Route path="/search" element={<SearchStudent />} />
          <Route path="/del" element={<DeleteStudent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}