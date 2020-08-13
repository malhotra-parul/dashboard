import React from "react";
import MyLine from "./MyLine";
import LaunchIcon from "@material-ui/icons/Launch";

function RealtimeUsers() {
    const borderColor = "#2984c5";
    const backgroundColor = "rgba(151,187,205,0.2)";
    const color = { borderColor, backgroundColor };
    const height = "100px";
    const width = "220px";
  return (
    <div className="realtime-users">
      <p style={{ fontSize: "12px", color: "#5f5b66", fontWeight: "600" }}>
        REALTIME USERS
      </p>
      <p style={{ fontSize: "29px", color: "#535457" }}>56</p>
      <p
        style={{
          color: "green",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
        }}
      >
        +9.8% <LaunchIcon fontSize="large" style={{ paddingLeft: "10px" }} />
      </p>
      <MyLine color={color} height={height} width={width}/>
    </div>
  );
}

export default RealtimeUsers;
