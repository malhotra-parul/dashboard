import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const MyLine = ({ color, height, width }) => {
  const [data, setData] = useState({});
  const backgroundColor = color.backgroundColor;
  const borderColor = color.borderColor; 

  const line = () => {
    setData({
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          data: [3, 2, 3, 2, 2, 3, 1, 2, 2, 4],
          fill: true,
          backgroundColor: `${backgroundColor}`,
          borderColor: `${borderColor}`,
          borderWidth: 2,
          pointBorderColor: "#2984c5",
          pointBackgroundColor: "#fff",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#2984c5",
          pointHoverBorderColor: "rgba(41, 132, 197, 0.5)",
          pointHoverBorderWidth: 7,
          pointRadius: 0,
          pointHitRadius: 30,
          type: "line",
          lineTension: 0,
        },
      ],
    });
  };

  useEffect(() => {
    line();
  }, []);

  return (
    <div style={{ height: height , width: width, filter: 'drop-shadow(0 0 0.15rem #d8d8e2)' }}>
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            titleAlign: "center",
              caretPadding: 5,
              cornerRadius: 5,
              xPadding: 20,
              position: "nearest",
              bodyAlign: "center",
              bodyFontStyle: "bold",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  display: false,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  display: false,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default MyLine;
