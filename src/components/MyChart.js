import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const MyChart = ({ month, year }) => {

  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
  datasets: [
    {
      label: ' Visitors',
      barThickness: "8",
      backgroundColor: 'rgb(31, 110, 215)',
      hoverBackgroundColor: '#1a5199',
      minBarLength: 1,
      data: [3,1,4,2,1,2,1,3,1,4,2,3,4,1,2,4,2,1,2,3,2,1,4,3,1,3,2,1,4,1,2]
    }
  ]
    });
  }

useEffect(() => {
  chart()
}, [])
  
return (
    <div style={{position: 'relative', height: "250px", width: "90%", margin: "0 auto"}}>
        <Bar
          data={chartData}
          options={{
              title: {
                  display: true,
                  text: `${month} ${year}`,
                  fontSize: 16
              },
            responsive: true,
            aspectRatio: 2,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
             ticks: {
              beginAtZero: true,
              display: false
             }
              }]
            },
            legend:{
              display:true,
              position: "top"
            }, tooltips: {
              backgroundColor: 'rgb(255, 255, 255)',
              borderColor: 'rgb(156, 174, 211)',
              borderWidth: 1,
              titleFontColor: "#5f5b66",
              titleAlign: "center",
              caretPadding: 15,
              cornerRadius: 5,
              xPadding: 15,
              position: 'nearest',
              bodyAlign: "center",
              bodyFontStyle: "bold",
              yPadding: 20,
              callbacks: {
                title: function(tooltipItem, data) {
                    return (
                      `12th ${month} ${year}`.toLocaleString("en-US")
                    );
                  },
                  labelTextColor: function(tooltipItem, chart) {
                      return '#000';
                  }
              }
          }
          }}
        /></div>)

}


export default MyChart;