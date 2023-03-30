import assignment from "../assets/assignment.svg";
import moduleQuiz from "../assets/moduleQuiz.svg";
import topic from "../assets/topic.svg";
import activeAssignment from "../assets/activeAssignment.svg";
import activeModuleQuiz from "../assets/activeModuleQuiz.svg";
import activeTopic from "../assets/activeTopic.svg";
import { Link, useLocation } from "react-router-dom";

const ModuleSidebar = () => {
  let location = useLocation();
  return (
    <div
      style={{
        backgroundColor: "#e0e6f2",
        height: "55rem",
        width: "12rem",
        display: "flex",
        flexDirection: "column",
        boxShadow: "8px 0px 5px -1px rgba(0,0,0,0.15)",
        borderRight: "1px solid #cbd3e1",
        zIndex: "1",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          width: "100%",
          margin: "1rem 0",
          backgroundColor:
            location.pathname === "/modules" ? "#cbd3e1" : "transparent",
          display: "flex",
        }}
      >
        <Link
          to="/modules"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={location.pathname === "/modules" ? activeTopic : topic}
              alt=""
              width="40px"
              height="40px"
            />
            <h3
              style={{
                color: "#15294b",
                fontSize: "0.85rem",
                margin: "0",
                fontWeight: "400",
                display: "flex",
              }}
            >
              Python Loops
            </h3>
          </div>
        </Link>
      </div>
      <div
        style={{
          cursor: "pointer",
          width: "100%",
          margin: "1rem 0",
          backgroundColor:
            location.pathname === "/modules/quiz" ? "#cbd3e1" : "transparent",
          display: "flex",
        }}
      >
        <Link
          to="/modules/quiz"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={
                location.pathname === "/modules/quiz"
                  ? activeModuleQuiz
                  : moduleQuiz
              }
              alt=""
              width="40px"
              height="40px"
            />
            <h3
              style={{
                color: "#15294b",
                fontSize: "0.85rem",
                margin: "0",
                fontWeight: "400",
                display: "flex",
              }}
            >
              Quiz 1: Data Types
            </h3>
          </div>
        </Link>
      </div>
      <div
        style={{
          cursor: "pointer",
          width: "100%",
          margin: "1rem 0",
          backgroundColor:
            location.pathname === "/modules/assignment"
              ? "#cbd3e1"
              : "transparent",
          display: "flex",
        }}
      >
        <Link
          to="/modules/assignment"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={
                location.pathname === "/modules/assignment"
                  ? activeAssignment
                  : assignment
              }
              alt=""
              width="40px"
              height="40px"
            />
            <h3
              style={{
                color: "#15294b",
                fontSize: "0.85rem",
                margin: "0",
                fontWeight: "400",
                display: "flex",
              }}
            >
              Assignment-1: Operators | Loops
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ModuleSidebar;
