import ModuleSidebar from "./ModuleSidebar";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";

const ModuleAssignment = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <ModuleSidebar />
      <div
        style={{
          backgroundColor: "#f2f6ff",
          width: "85vw",
          padding: "4rem 0 0 8rem",
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              margin: "0",
            }}
          >
            Assignment-1: Operators | Loops
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "6rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                3
              </h3>
              <h3
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  margin: "0",
                  color: "#8e8e8e",
                }}
              >
                Problems
              </h3>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                100
              </h3>
              <h3
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "400",
                  margin: "0",
                  color: "#8e8e8e",
                }}
              >
                Total Score
              </h3>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "1rem 0",
          }}
        >
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: "400",
              margin: "0",
              color: "#8e8e8e",
            }}
          >
            20 December 2021
          </h4>
        </div>
        <div
          style={{
            padding: "1rem 0",
          }}
        >
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              margin: "0",
            }}
          >
            Assignment Details
          </h4>
        </div>
        <div
          style={{
            width: "60%",
            border: "1px solid #abe1ff",
            backgroundColor: "#fff",
            display: "flex",
            boxShadow: "0px 0px 3px 0px #abe1ff",
            borderRadius: "0.5rem",
          }}
        >
          <div
            style={{
              margin: "3rem 4rem",
              display: "flex",
              justifyContent: "space-between",
              width: "20%",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                3
              </h3>
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                Problems
              </h3>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                100
              </h3>
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                Total Score
              </h3>
            </div>
          </div>
          <div
            style={{
              padding: "0rem 5rem",
              margin: "2rem 0",
              display: "flex",
              borderLeft: "2px solid #abe1ff",
              justifyContent: "space-around",
              alignItems: "center",
              width: "40%",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                Start:
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img alt="" src={calendar} height="20px" width="20px" />
                <h4
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "#8e8e8e",
                    margin: "0.2rem 0.5rem",
                  }}
                >
                  20 December 2021
                </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img alt="" src={clock} height="20px" width="20px" />
                <h4
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "#8e8e8e",
                    margin: "0.2rem 0.5rem",
                  }}
                >
                  07:30 PM
                </h4>
              </div>
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                Due:
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img alt="" src={calendar} height="20px" width="20px" />
                <h4
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "#8e8e8e",
                    margin: "0.2rem 0.5rem",
                  }}
                >
                  26 December 2021
                </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img alt="" src={clock} height="20px" width="20px" />
                <h4
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    color: "#8e8e8e",
                    margin: "0.2rem 0.5rem",
                  }}
                >
                  11:59 PM
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleAssignment;
