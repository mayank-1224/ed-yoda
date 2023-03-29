import "./App.css";
import TopNavBar from "./components/TopNavBar";
import ProgramBar from "./components/ProgramBar";
import SideBar from "./components/SideBar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Modules from "./components/Modules";
import Instructors from "./components/Instructors";
import ModuleAssignment from "./components/ModuleAssignment";
import ModuleQuiz from "./components/ModuleQuiz";
import ModuleTopic from "./components/ModuleTopic";
import chat from "./assets/chat.svg";

function App() {
  const programs = [
    {
      id: "ECRD",
      name: "Example ECRD",
    },
    {
      id: "FSR222222",
      name: "Example FSR222222",
    },
    {
      id: "DS261121",
      name: "Example DS261121",
    },
    {
      id: "DS031221",
      name: "Data Scientist Program",
    },
  ];
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <TopNavBar user={"Test Learner"} />
      <ProgramBar programs={programs} />
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/modules" element={<Modules />} />
          <Route exact path="/modules/quiz" element={<ModuleQuiz />} />
          <Route
            exact
            path="/modules/assignment"
            element={<ModuleAssignment />}
          />
          <Route exact path="/instructors" element={<Instructors />} />
        </Routes>
      </div>
      <button
        style={{
          backgroundColor: "#0048ff",
          border: "none",
          borderRadius: "50%",
          padding: "0.8rem",
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          cursor: "pointer",
        }}
      >
        <img alt="" src={chat} height="40px" width="40px" />
      </button>
    </div>
  );
}

export default App;
