import React from "react";
import { Pie, Doughnut, Bar, Line } from 'react-chartjs-2';

export default function Chart({ labels, label, data, colors, font_color, type,etiquetas, ...props }) {

    const dataObject = {
        labels: labels,
        datasets: [
            {
                data: data,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
                label: label            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: etiquetas,
                labels: {
                    display: {etiquetas},
                    color: font_color,
                    fontColor: 'white'
                }
            },
            
        },
    };

    const getChart = () => {
        switch (type.toLowerCase()) {
            case "doughnut":
                return (
                    <Doughnut 
                        data={dataObject}
                        options={options}
                    />
                )
            case "pie":
                return (
                    <Pie    
                        data={dataObject}
                        options={options}
                    />
                )
            case "bar":
                return (
                    <Bar 
                        data={dataObject}
                        options={options}
                    />
                )
            case "line":
                return (
                    <Line 
                        data={dataObject}
                        options={options}
                    />
                )
            default:
                break;
        }
    }

    return (
        getChart() 
    )

}