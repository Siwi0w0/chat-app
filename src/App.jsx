import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chat from "@/components/chat/Chat";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <p></p>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
