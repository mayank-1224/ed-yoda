import analysis from "../assets/analysis.png";
import wrangling from "../assets/wrangling.png";
import UserAvatar from "../assets/userAvatar.png";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: "#f2f6ff",
        width: "100%",
        padding: "3rem 3rem 3rem 7rem",
        // height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            color: "#000",
            fontSize: "2rem",
            fontWeight: "500",
            margin: "1rem 0",
          }}
        >
          Upcoming Certifications
        </h2>

        <div
          style={{
            backgroundColor: "#fff",
            width: "60%",
            height: "10rem",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #abe1ff",
            borderRadius: "10px",
          }}
        >
          <div style={{ marginLeft: "3rem" }}>
            <img src={analysis} alt="analysis" />
          </div>
          <div style={{ margin: "0 3rem" }}>
            <h4
              style={{
                fontSize: "0.8rem",
                backgroundColor: "#f5f5f5",
                textAlign: "center",
                fontWeight: "500",
                color: "grey",
                letterSpacing: "1px",
                margin: "0",
                borderRadius: "0.5rem",
                padding: "0.2rem 0.5rem",
              }}
            >
              CERTIFICATION &nbsp;|&nbsp; ATTEMPT 1
            </h4>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                letterSpacing: "1px",
                margin: "0",
              }}
            >
              DATA ANALYSIS
              <br />
              CERTIFICATION
            </h3>
            <h4
              style={{
                fontSize: "0.8rem",
                backgroundColor: "#cceeff",
                textAlign: "center",
                color: "grey",
                fontWeight: "500",
                letterSpacing: "1px",
                margin: "0",
                borderRadius: "2rem",
                padding: "0.2rem 0.5rem",
              }}
            >
              COMPLETED &nbsp;|&nbsp; 21 MAR 2022
            </h4>
          </div>
          <div style={{ margin: "0 3rem" }}>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: "400",
              }}
            >
              Exam Structure
            </h4>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: "300",
              }}
            >
              Round 1
              <span
                style={{
                  margin: "0 0.5rem",
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  backgroundColor: "#dfe6f2",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "1rem",
                }}
              >
                MCQS
              </span>
              <span
                style={{
                  margin: "0 0.5rem",
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  backgroundColor: "#dfe6f2",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "1rem",
                }}
              >
                CODING
              </span>
            </h4>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: "300",
              }}
            >
              Round 2
              <span
                style={{
                  margin: "0 0.5rem",
                  fontWeight: "500",
                  fontSize: "0.8rem",
                  backgroundColor: "#dfe6f2",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "1rem",
                }}
              >
                PROJECT
              </span>
            </h4>
          </div>
          <div style={{ margin: "0 3rem" }}>
            <button
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #0087ff",
                color: "#0087ff",
                borderRadius: "2rem",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                fontWeight: "500",
                letterSpacing: "1px",
                cursor: "pointer",
              }}
            >
              VIEW EXAM DETAILS
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            color: "#000",
            fontSize: "2rem",
            fontWeight: "500",
            margin: "1rem 0 0 0",
          }}
        >
          Continue Learning
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "46.5%",
          }}
        >
          <a
            href="/"
            style={{
              margin: "0",
              fontSize: "1rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
              marginTop: "1rem",
              color: "#008bff",
              textDecoration: "none",
              alignSelf: "flex-end",
            }}
          >
            VIEW MODULE DETAILS
          </a>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                display: "flex",
                border: "1px solid #abe1ff",
                borderRadius: "0.5rem",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                // marginRight: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "46.5%",

                  borderRight: "1px solid #abe1ff",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // border: "4px solid green",
                  }}
                >
                  <img src={wrangling} alt="" />
                  <div
                    style={{
                      // border: "3px solid green",
                      marginLeft: "1rem",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 1rem",
                        fontSize: "1.5rem",
                        fontWeight: "400",
                      }}
                    >
                      DATA WRANGLING &<br />
                      VISUALIZATION
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "0 1rem",
                      }}
                    >
                      <img src={UserAvatar} alt="" height="40px" width="40px" />
                      <span
                        style={{
                          color: "#008bff",
                          marginLeft: "0.5rem",
                        }}
                      >
                        Test Instructor
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    margin: "1rem 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 1rem",
                        fontSize: "0.8rem",
                        fontWeight: "300",
                      }}
                    >
                      Live Sessions
                    </h4>
                    <div>
                      <h4
                        style={{
                          margin: "0 1rem",
                          fontSize: "0.8rem",
                          fontWeight: "300",
                          color: "#abe1ff",
                        }}
                      >
                        0/13
                      </h4>
                      <div
                        style={{
                          backgroundColor: "#abe1ff",
                          width: "10rem",
                          height: "0.5rem",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 1rem",
                        fontSize: "0.8rem",
                        fontWeight: "300",
                      }}
                    >
                      Assignments
                    </h4>
                    <div>
                      <h4
                        style={{
                          margin: "0 1rem",
                          fontSize: "0.8rem",
                          fontWeight: "300",
                          color: "#abe1ff",
                        }}
                      >
                        0/13
                      </h4>
                      <div
                        style={{
                          backgroundColor: "#abe1ff",
                          width: "10rem",
                          height: "0.5rem",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 1rem",
                        fontSize: "0.8rem",
                        fontWeight: "300",
                      }}
                    >
                      MCQ Quiz
                    </h4>
                    <div>
                      <h4
                        style={{
                          margin: "0 1rem",
                          fontSize: "0.8rem",
                          fontWeight: "300",
                          color: "#abe1ff",
                        }}
                      >
                        0/13
                      </h4>
                      <div
                        style={{
                          backgroundColor: "#abe1ff",
                          width: "10rem",
                          height: "0.5rem",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderLeft: "1px solid #abe1ff",
                  padding: "2rem 3rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignContent: "flex-start",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: "0",
                      fontSize: "1.2rem",
                      fontWeight: "400",
                    }}
                  >
                    Today's Plan
                  </h3>
                  <h4
                    style={{
                      margin: "0",
                      fontSize: "0.80rem",
                      fontWeight: "400",
                      color: "grey",
                    }}
                  >
                    21 March 2022
                  </h4>
                </div>
                <div
                  style={{
                    margin: "1.5rem 0",
                  }}
                >
                  <h3
                    style={{
                      margin: "0",
                      fontSize: "1.2rem",
                      fontWeight: "400",
                      color: "#008bff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Data Transformation using Pandas-3
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4
                      style={{
                        margin: "0",
                        fontSize: "0.85rem",
                        fontWeight: "400",
                        color: "grey",
                      }}
                    >
                      Daily Feedback{" "}
                    </h4>
                    <i
                      style={{
                        margin: "0",
                        fontSize: "0.85rem",
                        fontWeight: "400",
                        color: "#008bff",
                        textDecoration: "italic",
                      }}
                    >
                      opens at 7:30 PM
                    </i>
                  </div>
                </div>
                <div
                  style={{
                    margin: "1.5rem 0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <button
                    style={{
                      margin: "0",
                      fontSize: "0.85rem",
                      fontWeight: "400",
                      width: "15rem",
                      border: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    <span>JOIN LIVE SESSION</span>
                  </button>
                  <span
                    style={{
                      margin: "0",
                      fontSize: "0.80rem",
                      fontWeight: "400",
                      color: "grey",
                      marginLeft: "3.6rem",
                    }}
                  >
                    BEGINS AT 07:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              border: "1px solid #abe1ff",
              borderRadius: "0.5rem",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
              margin: "0 3rem",
              padding: "2rem 3rem",
            }}
          >
            <h3
              style={{
                margin: "0",
                fontSize: "1.2rem",
                fontWeight: "400",
                marginBottom: "0.5rem",
              }}
            >
              Progress Overview
            </h3>
            <div
              style={{
                border: "1px solid #abe1ff",
                borderRadius: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "5rem",
                  width: "15rem",
                  padding: "0 1rem",
                }}
              >
                <h4
                  style={{
                    margin: "0",
                    fontSize: "1.5rem",
                    fontWeight: "300",
                  }}
                >
                  0%
                </h4>
                <h4
                  style={{
                    margin: "0",
                    fontSize: "1.1rem",
                    fontWeight: "300",
                    color: "grey",
                  }}
                >
                  Overall Grade
                </h4>
              </div>
              <div
                style={{
                  margin: "0 1rem",
                  height: "0.5rem",
                  backgroundColor: "lightGrey",
                  borderRadius: "0.5rem 0.5rem 0 0",
                }}
              ></div>
            </div>
            <div
              style={{
                border: "1px solid #abe1ff",
                borderRadius: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "5rem",
                  padding: "0 1rem",
                }}
              >
                <h4
                  style={{
                    margin: "0",
                    fontSize: "1.5rem",
                    fontWeight: "300",
                  }}
                >
                  0%
                </h4>
                <h4
                  style={{
                    margin: "0",
                    fontSize: "1.1rem",
                    fontWeight: "300",
                    color: "grey",
                  }}
                >
                  Attendance
                </h4>
              </div>
              <div
                style={{
                  margin: "0 1rem",
                  height: "0.5rem",
                  backgroundColor: "lightGrey",
                  borderRadius: "0.5rem 0.5rem 0 0",
                }}
              ></div>
            </div>
            <a
              href="/"
              style={{
                margin: "0",
                fontSize: "1rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
                marginTop: "1rem",
                color: "#008bff",
                textDecoration: "none",
              }}
            >
              VIEW DETAILED PROGRESS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
