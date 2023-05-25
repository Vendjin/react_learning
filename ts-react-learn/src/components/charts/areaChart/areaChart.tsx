import React from 'react';
import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    ScriptableContext,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import moment from "moment";
import {IAreaChartProps} from "../../../common/types/assets/iAssets";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);


const AreaChart = ({data}: IAreaChartProps) => {

    const options = {
        responsive: true,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            },
        },
    };

    const values = {
        labels: data.map((element: number[]): string => moment(element[0]).format('DD.MM.YY')),
        datasets: [
            {
                fill: true,
                label: 'Dataset 1',
                data: data.map((element: number[]): number => element[1]),
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    const ctx = context.chart.ctx
                    const gradient = ctx.createLinearGradient(0, 0, 0, 180)
                    gradient.addColorStop(0, '#C1EF00')
                    gradient.addColorStop(1, '#232323')
                    return gradient
                }
            },
        ],
    };

    return <Line options={options} data={values} width={300} height={100}/>
}

export default AreaChart;