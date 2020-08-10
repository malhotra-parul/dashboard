import React from 'react';
import CustomSelect from "./reusable/CustomSelect";

function Dashboard() {

    const data = [
        {
          id: "1",
          name: "🇬🇧 ENG"
        },
        {
          id: "2",
          name: "🇺🇸   USA"
        },
        {
          id: "3",
          name: "🇮🇳   IND"
        },
        {
          id: "4",
          name: "🇨🇳   CHI"
        }
      ];

    return (
        <div className="header-second">
            <h3 style={{paddingLeft: "20px"}}>Dashboard</h3>
            <CustomSelect data={data}/>
        </div>
    )
}

export default Dashboard
