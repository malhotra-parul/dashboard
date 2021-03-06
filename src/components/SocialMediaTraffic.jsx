import React from "react";
import ProgressBar from "./ProgressBar";

function SocialMediaTraffic() {
  const style = { fontWeight: "700", color: "#5f5b66", fontSize: "14px" };
  const color = { color: "#5f5b66", fontWeight: "600", fontSize: "13px", padding: "15px 0" };
  const tableData = { fontWeight: "600", color: "#5f5b66" };

  return (
    <div className="social-media">
      <header className="social-media-header">
        <span style={{filter: 'drop-shadow(0 0 0.25rem #eeeae9)', color: "#535457"}}>Social Media Traffic</span>
      </header>
      <div className="social-media-table">
        <span style={color}>
          <strong>NETWORK</strong>
        </span>
        <span style={color} className="visitors">
          <strong>VISITORS</strong>
        </span>
        <span></span>
        <span style={tableData}>Instagram</span>
        <span style={style} className="border-issue">
          3,550
        </span>
        <span style={{ paddingTop: "27px" }}>
          <ProgressBar percentage="50%" />
        </span>
        <span style={tableData}>Facebook</span>
        <span style={style}>2,236</span>
        <span style={{ paddingTop: "27px" }}>
          <ProgressBar percentage="40%" />
        </span>
        <span style={tableData}>Twitter</span>
        <span style={style}>1,795</span>
        <span style={{ paddingTop: "27px" }}>
          <ProgressBar percentage="30%" />
        </span>
        <span style={tableData}>Linkedin</span>
        <span style={style}>62</span>
        <span style={{ paddingTop: "27px" }}>
          <ProgressBar percentage="20%" />
        </span>
      </div>
    </div>
  );
}

export default SocialMediaTraffic;
