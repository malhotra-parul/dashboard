import React from "react";
import CustomSelect from "./reusable/CustomSelect";

function Dashboard() {
  const data = [
    {
      id: "1",
      name: "🇬🇧 ENG",
    },
    {
      id: "2",
      name: "🇺🇸   USA",
    },
    {
      id: "3",
      name: "🇮🇳   IND",
    },
    {
      id: "4",
      name: "🇨🇳   CHI",
    },
  ];

  return (
    <div className="header-second">
      <h3
        style={{
          paddingLeft: "20px",
          filter: "drop-shadow(0 0 0.25rem #eeeae9)",
          color: "#535457",
        }}
      >
        Dashboard
      </h3>
      <CustomSelect data={data} />
    </div>
  );
}

export default Dashboard;
