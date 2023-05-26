import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {ILineChartProps} from "../../../common/types/assets/iAssets";
import moment from "moment";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const LineChart = ({data}: ILineChartProps) => {
    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                display: true,
                grid: {
                    display: true
                }
            }
        },
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    const values = {
        labels: data[0].priceChartData.map((element: any) =>
            moment(element[0]).format('DD.MM.YY')
        ),
        datasets: [
            {
                label: `Цена ${data[0].name}`,
                data: data[0].priceChartData.map((element: any) => element[1]),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            /*// код работает, но данные относительно друг друга рисуются линиями что не очень красиво
            // для демонстрации графика
            {
                label: `Цена ${data[1].name}`,
                data: data[1].priceChartData.map((element: any) => element[1]),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },*/
        ],
    };


    return <Line options={options} data={values}  width={'100%'} height={'20%'}/>;
}


export default LineChart