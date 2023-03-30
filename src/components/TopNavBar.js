import "../styles/nav-bars.css";
import userAvatar from "../assets/userAvatar.png";

const TopNavBar = ({ user }) => {
  return (
    <div className="top-nav-bar-container">
      <h1
        style={{
          background:
            "radial-gradient(circle farthest-corner at top left, #0093FF 0%, #004aff 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        }}
      >
        EDYODA
      </h1>
      <div className="top-nav-bar-user-container">
        <h3 className="top-nav-bar-user-container__user-name">Hi {user}!</h3>
        <img src={userAvatar} alt="user avatar" width="40px" height="40px" />
      </div>
    </div>
  );
};

export default TopNavBar;
