import ModuleSidebar from "./ModuleSidebar";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";

const ModuleQuiz = () => {
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
            Quiz-1: Data Types
          </h3>
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
            16 December 2021, Thursday
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
            Quiz Details
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
              width: "40%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                10
              </h3>
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                Questions
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                -
              </h3>
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                Duration
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  margin: "0",
                }}
              >
                125
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
                  16 December 2021
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
                  19 December 2021
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

export default ModuleQuiz;
