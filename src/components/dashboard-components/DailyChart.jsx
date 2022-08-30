import {useState} from 'react';
import "./charts.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
import { faker } from '@faker-js/faker';
import { useEffect } from 'react';
import { obtenerClicks } from '../../helpers/getClicks';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const DailyChart = () => {

  const [click, setClick] = useState([]);
  useEffect(() => {
    obtenerClicks().then((data) => setClick(data));
  }, []);



  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Visitas Últimos 10 Días',
      },
    },
  };

  const labels = click.map((c) => {return c.fecha});

  const data = {
    labels,
    datasets: [
      {
        label: 'Visitas Vista Inicio',
        data: click.map((c) => {return c.cantidad}),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <div className="daily-chart">
      <Bar options={options} data={data} />
  
   
    </div>
  )
}
