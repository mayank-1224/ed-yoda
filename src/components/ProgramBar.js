import "../styles/nav-bars.css";
import { useEffect, useState } from "react";
import dropUp from "../assets/dropUp.svg";
import dropDown from "../assets/dropDown.svg";

const ProgramBar = ({ programs }) => {
  const [activeProgram, setActiveProgram] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setActiveProgram(programs[3]);
  }, [programs]);

  return (
    <div className="full-width">
      <div className="program-bar-container">
        <h3 className="program-bar-container__program-name">
          {activeProgram?.id}
          {open ? (
            <button className="drop-button" onClick={() => setOpen(false)}>
              <img src={dropUp} width="40px" height="40px" alt="" />
            </button>
          ) : (
            <button className="drop-button" onClick={() => setOpen(true)}>
              <img src={dropDown} width="40px" height="40px" alt="" />
            </button>
          )}
          &nbsp;
          {activeProgram?.name}
        </h3>
      </div>
      {open && (
        <div className="program-bar">
          <h3 className="program-bar__select-program">Select Program</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {programs.map((program) => (
              <button
                className="program-button"
                onClick={() => {
                  setActiveProgram(program);
                  setOpen(false);
                }}
              >
                <h3
                  className="program-name"
                  style={{
                    backgroundColor:
                      activeProgram.id === program.id ? "#fff" : "transparent",
                    color: activeProgram.id === program.id ? "#15294b" : "#fff",
                  }}
                >
                  {program.id}
                </h3>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramBar;
