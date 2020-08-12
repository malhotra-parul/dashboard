import React from "react";
import MyLine from "./MyLine";
import LaunchIcon from "@material-ui/icons/Launch";

function VisitDuration() {
    const borderColor = "rgb(251, 219, 123)";
    const backgroundColor = "rgb(254, 250, 239)";
    const color = { borderColor, backgroundColor };

  return (
    <div className="visit-duration">
      <p style={{ fontSize: "12px", color: "#5f5b66", fontWeight: "600" }}>
        VISIT DURATION
      </p>
      <p style={{ fontSize: "34px" }}>1m 4s</p>
      <p
        style={{
          color: "green",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        +19.6% <LaunchIcon fontSize="large" style={{ paddingLeft: "10px" }} />
      </p>
      <MyLine color={color} />
    </div>
  );
}

export default VisitDuration;
