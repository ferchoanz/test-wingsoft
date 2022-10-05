import React from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function Graph({ title, footers, arrayData, colors }) {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    const labels = [...footers];

    const data = {
        labels,
        datasets: arrayData.map((item, index) => ({
            label: item.name,
            data: [item.value],
            backgroundColor: colors[index],
        }))
    };

    return (
        <div className='row mt-5'>
            <div className='col-8 offset-2'>
                <Bar options={options} data={data} />
            </div>
        </div>
    );

}
