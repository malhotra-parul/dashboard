import React, { useState } from 'react';
import CustomSelect from "./reusable/CustomSelect";
import MyChart from "./MyChart";

function DailyVisitors() {

    const [ monthValue, setMonthValue] = useState("January");
    const [ yearValue, setYearValue] = useState("2017");

    const data_1 = [
        {
          id: "January",
          name: "January"
        },
        {
          id: "February",
          name: "February"
        },
        {
          id: "March",
          name: "March"
        },
        {
          id: "April",
          name: "April"
        }
      ];

      const data_2 = [
        {
          id: "2017",
          name: "2017"
        },
        {
          id: "2018",
          name: "2018"
        },
        {
          id: "2019",
          name: "2019"
        },
        {
          id: "2020",
          name: "2020"
        }
      ];

      const setMonth = (value) => {
        setMonthValue(value);
      }

      const setYear = (value) => {
        setYearValue(value);
      }

    return (
        <div className="daily-visitors">
            <header style={{display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            padding: "1em"}}>
                <h4>Daily Visitors</h4>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <CustomSelect style={{paddingRight: "0"}} data={data_1} setMonth={setMonth}/>
                    <CustomSelect style={{paddingLeft: "0"}} data={data_2} setYear={setYear} />
                </div>
            </header>

            <hr />    
            <MyChart month={monthValue} year={yearValue}/>
  
         
        </div>
    )
}

export default DailyVisitors
