import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'top most country',
    },
  },
  outerHeight : 1400
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Manually create sample data
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [400, 300, 600, 200, 800, 700, 500], // Manually set data points
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
    },
    {
      label: 'Dataset 2',
      data: [700, 500, 300, 600, 400, 200, 900], // Manually set data points
      backgroundColor: 'rgba(53, 162, 235, 0.8)',
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
