import ModuleSidebar from "./ModuleSidebar";
import information from "../assets/information.svg";
import topic from "../assets/topic.svg";
import videocam from "../assets/videocam.svg";
import document from "../assets/document.svg";

const Modules = () => {
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
          width: "80vw",
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
        </div>
        <div
          style={{
            width: "60%",
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
            15 December 2021, Wednesday, 7:30 PM
          </h4>
        </div>
        <div
          style={{
            padding: "1rem 0",
            display: "flex",
            flexDirection: "row-reverse",
            width: "60%",
            color: "#0a8cff",
          }}
        >
          <h4
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              margin: "0",
              cursor: "pointer",
            }}
          >
            DAILY FEEDBACK
          </h4>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            width: "60%",
            borderRadius: "0.3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // borderBottom: "1px solid #abe1ff",
              backgroundColor: "#f2f6ff",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "1px solid #abe1ff",
                borderBottom: "none",
                borderRadius: "0.3rem 0.3rem 0 0",
                width: "15rem",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <img alt="" src={information} width="20px" height="20px" />
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "0",
                  marginLeft: "0.3rem",
                }}
              >
                SESSION PLAN
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img alt="" src={topic} width="20px" height="20px" />
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "0",
                  marginLeft: "0.3rem",
                  color: "grey",
                }}
              >
                PRE-WATCH VIDEOS
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img alt="" src={videocam} width="20px" height="20px" />
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "0",
                  marginLeft: "0.3rem",
                  color: "grey",
                }}
              >
                SESSION RECORDING
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img alt="" src={document} width="20px" height="20px" />
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  margin: "0",
                  marginLeft: "0.3rem",
                  color: "grey",
                }}
              >
                REFERENCES
              </h3>
            </div>
          </div>
          <div
            style={{
              // width: "60%",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0px 0px 3px 0px #abe1ff",
              padding: "2rem 4rem",
              borderLeft: "1px solid #abe1ff",
              borderBottom: "1px solid #abe1ff",
              borderRight: "1px solid #abe1ff",
              borderRadius: "0 0.5rem 0.5rem 0.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                margin: "0.5rem 0",
              }}
            >
              Session Plan
            </h3>
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "200",
                margin: "0.5rem 0",
              }}
            >
              LIVE session is about to start. Please stay tuned.
            </h4>
            <button
              style={{
                border: "none",
                padding: "0 1rem",
                borderRadius: "2rem",
                cursor: "pointer",
                width: "15rem",
              }}
            >
              <h4
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  margin: "0.5rem 0",
                }}
              >
                JOIN LIVE SESSION
              </h4>
            </button>
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                margin: "0.5rem 0",
              }}
            >
              Sub-Topics
            </h4>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "200",
                margin: "0.5rem 0",
              }}
            >
              1. Sorting and Indexing Dataframe <br />
              2. Filtering Dataframe <br />
              3. Usage of loc and iloc functions <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
