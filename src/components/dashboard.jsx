import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${import.meta.env.VITE_API_URL}/data`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => setChartData(data))
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, []);

  useEffect(() => {
    if (chartData) {
      const ctx = document.getElementById("myChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: "Dataset",
              data: chartData.values,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }, [chartData]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default Dashboard;
