// src/components/AnalyticsReport.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const AnalyticsReport = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Communications Sent',
        data: [12, 19, 3, 5],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Analytics Report</h2>
      <Line data={data} />
    </div>
  );
};

export default AnalyticsReport;
