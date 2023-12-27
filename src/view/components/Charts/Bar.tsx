import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IChartBar {
  label: string[];
  dataset: DatasetChart[];
}

interface DatasetChart {
  label: string;
  data: number[];
  backgroundColor: string;
}

export function ChartBar({ label, dataset }: IChartBar) {
  const options = {
    responsive: true,
    plugins: {
      position: "top",
      labels: {
        color: "white",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
        color: "white",
      },
    },
    scales: {
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.188)",
        },
        ticks: {
          color: "white",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.188)",
        },
        ticks: {
          color: "white",
        },
      },
    },
  };

  const labels = label;

  const data = {
    labels,
    datasets: dataset,
  };

  return <Bar options={options} data={data} height={250}/>;
}
