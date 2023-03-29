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
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 5rem",
          backgroundColor: "#15294b",
          height: "3rem",
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontSize: "1.5rem",
            margin: "0",
            fontWeight: "400",
            display: "flex",
          }}
        >
          {activeProgram?.id}
          {open ? (
            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <img src={dropUp} width="40px" height="40px" alt="" />
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <img src={dropDown} width="40px" height="40px" alt="" />
            </button>
          )}
          &nbsp;
          {activeProgram?.name}
        </h3>
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            right: "0",
            left: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0rem 5rem 1rem 5rem",
            backgroundColor: "#15294b",
            zIndex: "999",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "0.9rem",
              margin: "0",
              fontWeight: "400",
            }}
          >
            Select Program
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {programs.map((program) => (
              <button
                onClick={() => {
                  setActiveProgram(program);
                  setOpen(false);
                }}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  margin: "0.9rem 0.6rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    margin: "0",
                    fontWeight: "400",
                    backgroundColor:
                      activeProgram.id === program.id ? "#fff" : "transparent",
                    color: activeProgram.id === program.id ? "#15294b" : "#fff",
                    borderRadius: "0.2rem",
                    padding: "0.1rem 0.5rem",
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
