import userAvatar from "../assets/userAvatar.png";

const TopNavBar = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 5rem",
      }}
    >
      <h1
        style={{
          color: "#007eff",
          fontSize: "2.5rem",
          margin: "0",
          background:
            "radial-gradient(circle farthest-corner at top left, #0093FF 0%, #004aff 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        }}
      >
        EDYODA
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1rem",
            margin: "0",
            fontWeight: "400",
            marginRight: "1rem",
          }}
        >
          Hi {user}!
        </h3>
        <img src={userAvatar} alt="user avatar" width="40px" height="40px" />
      </div>
    </div>
  );
};

export default TopNavBar;
