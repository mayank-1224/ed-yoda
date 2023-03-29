import home from "../assets/home.svg";
import module from "../assets/module.svg";
import instructor from "../assets/instructor.svg";
import homeBlue from "../assets/homeBlue.svg";
import moduleBlue from "../assets/moduleBlue.svg";
import instructorBlue from "../assets/instructorBlue.svg";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  let location = useLocation();
  return (
    <div
      style={{
        height: "85vh",
        width: "8rem",
        backgroundColor: "#15294b",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "none",
          cursor: "pointer",
          width: "100%",
          backgroundColor:
            location.pathname === "/" ? "#f2f6ff" : "transparent",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={location.pathname === "/" ? homeBlue : home}
            alt=""
            width="40px"
            height="40px"
          />
          <h3
            style={{
              color: location.pathname === "/" ? "#15294b" : "#fff",
              fontSize: "0.85rem",
              margin: "0",
              fontWeight: "400",
              display: "flex",
            }}
          >
            HOME
          </h3>
        </Link>
      </div>
      <div
        style={{
          border: "none",
          cursor: "pointer",
          width: "100%",
          margin: "1rem 0",
          backgroundColor: location.pathname.includes("/modules")
            ? "#f2f6ff"
            : "transparent",
          marginTop: "2rem",
        }}
      >
        <Link
          to="/modules"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={location.pathname.includes("/modules") ? moduleBlue : module}
            alt=""
            width="40px"
            height="40px"
          />
          <h3
            style={{
              color: location.pathname.includes("/modules")
                ? "#15294b"
                : "#fff",
              fontSize: "0.85rem",
              margin: "0",
              fontWeight: "400",
              display: "flex",
            }}
          >
            MODULES
          </h3>
        </Link>
      </div>
      <div
        style={{
          border: "none",
          cursor: "pointer",
          width: "100%",
          margin: "1rem 0",
          backgroundColor:
            location.pathname === "/instructors" ? "#f2f6ff" : "transparent",
          marginTop: "2rem",
        }}
      >
        <Link
          to="/instructors"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={
              location.pathname === "/instructors" ? instructorBlue : instructor
            }
            alt=""
            width="40px"
            height="40px"
          />
          <h3
            style={{
              color: location.pathname === "/instructors" ? "#15294b" : "#fff",
              fontSize: "0.85rem",
              margin: "0",
              fontWeight: "400",
              display: "flex",
            }}
          >
            INSTRUCTORS
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
