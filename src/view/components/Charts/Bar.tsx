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
  title?: string;
  dataset: DatasetChart[];
}

interface DatasetChart {
  label: string;
  data: number[];
  backgroundColor: string;
}

export function ChartBar({ title = "Visão geral",label, dataset }: IChartBar) {
  const options = {
    responsive: true,
    plugins: {
      position: "top",
      labels: {
        color: "white",
      },
      title: {
        display: true,
        text: title,
        color: "white",
      },
    },
    scales: {
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.188)",
        },
        ticks: {
          color: "#a3a3b9",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.188)",
        },
        ticks: {
          color: "#a3a3b9",
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
