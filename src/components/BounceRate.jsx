import React from "react";
import MyLine from "./MyLine";
import LaunchIcon from "@material-ui/icons/Launch";

function BounceRate() {
    const borderColor = "rgb(120, 106, 244)";
    const backgroundColor = "rgb(239, 239, 254)";
    const color = { borderColor, backgroundColor };
    const height = "100px";
    const width = "220px";

  return (
    <div className="bounce-rate">
      <p style={{ fontSize: "12px", color: "#5f5b66", fontWeight: "600" }}>
        BOUNCE RATE
      </p>
      <p style={{ fontSize: "34px" }}>73.67%</p>
      <p
        style={{
          color: "green",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        +12.2% <LaunchIcon fontSize="large" style={{ paddingLeft: "10px" }} />
      </p>
      <MyLine color={color} height={height} width={width} />
    </div>
  );
}

export default BounceRate;
