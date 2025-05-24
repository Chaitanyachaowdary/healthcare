import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Activity.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Activity = () => {
  const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [{
    data: [0, 1, 0, 1, 0, 1, 0],
    backgroundColor: [
      '#FF6384', // Monday - Pink
      '#36A2EB', // Tuesday - Blue
      '#FFCE56', // Wednesday - Yellow
      '#4BC0C0', // Thursday - Teal
      '#9966FF', // Friday - Purple
      '#FF9F40', // Saturday - Orange
      '#8AC249'  // Sunday - Green
    ],
    borderColor: 'rgba(255,255,255,0.8)',
    borderWidth: 1,
    borderRadius: 4
  }]
};

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        max: 2, // Limit y-axis to make bars appear taller
        grid: { display: false },
        ticks: { display: false } // Hide y-axis labels
      },
      x: {
        grid: { display: true },
        ticks: { color: 'black' }
      }
    },
    layout: {
      padding: { top: 5, bottom: 5 }
    }
  };

  return (
    <div className={styles.activity}>
      <div className={styles.header}>
        <h2 className={styles.title}>Activity</h2>
        <div className={styles.count}>3 appointments</div>
      </div>
      <div className={styles.chartContainer}>
        <Bar data={data} options={options}  />
      </div>
    </div>
  );
};

export default Activity;