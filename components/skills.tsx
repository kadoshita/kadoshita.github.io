import { ChartData, ChartOptions } from 'chart.js';
import { Radar } from 'react-chartjs-2';

const skills = [
    { skill: 'Programming', level: 10 },
    { skill: 'Infra', level: 9 },
    { skill: 'Network', level: 7 },
    { skill: 'IoT', level: 5 },
    { skill: 'Cloud', level: 6 }
];

const data: ChartData = {
    labels: skills.map(s => s.skill),
    datasets: [
        {
            label: 'level',
            data: skills.map(s => s.level),
            backgroundColor: 'rgb(33, 150, 243)',
            borderColor: 'rgb(33, 150, 243)',
            borderWidth: 1
        }
    ]
};

const options: ChartOptions = {
    scale: {
        ticks: {
            beginAtZero: true,
            display: false
        },
        gridLines: {
            color: 'rgb(33, 150, 243)'
        },
        pointLabels: {
            fontColor: 'rgb(33, 150, 243)',
            fontSize: 28
        }
    },
    legend: {
        display: false
    },
    tooltips: {
        enabled: false
    }
};

const Skills = () => {
    return (
        <Radar
            data={data}
            options={options}></Radar>
    )
};

export default Skills;