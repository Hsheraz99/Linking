import React from "react"
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import SignUp from "./router/config/component/Accounting";

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path="/"  element={<accounting />} />
            <Route path="/Analysis"  element={<Analysis />} />
            <Route path="/Message"  element={<Message />} />
            <Route path="/Profile"  element={<Profile />} />
            <Route path="/Project"  element={<Project />} />
        </Routes>
</Router>
  )
}
