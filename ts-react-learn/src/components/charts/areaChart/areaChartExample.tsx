import React, {FC} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend, ScriptableContext,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

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




const AreaChartExample: FC = (): JSX.Element => {

    const options = {
        responsive: true,
        scales: {
            x: {
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
                // position: 'top' as const,
                display: false
            },
            title: {
                // display: true,
                // text: 'Chart.js Bar Chart',
                display: false
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        // labels - данные по оси X
        labels,

        // datasets - данные по оси У
        datasets: [
            {
                fill: true,
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: (context: ScriptableContext<'line'>) => {
                    const ctx = context.chart.ctx
                    const gradient = ctx.createLinearGradient(0, 0, 0, 180)
                    gradient.addColorStop(0, '#C1EF00')
                    gradient.addColorStop(1, '#232323')
                    return gradient
                }
            },

            /*{
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },*/
        ],
    };

    return <Line options={options} data={data} width={300} height={100}/>
}

export default AreaChartExample;