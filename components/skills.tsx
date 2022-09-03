import {
    Chart,
    ChartData,
    ChartOptions,
    LineElement,
    PointElement,
    RadialLinearScale,
    Filler
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styles from './skills.module.css';

Chart.register(LineElement, PointElement, RadialLinearScale, Filler);

const skills = [
    { skill: 'Programming', level: 10 },
    { skill: 'Infra', level: 9 },
    { skill: 'Network', level: 7 },
    { skill: 'IoT', level: 5 },
    { skill: 'Operation', level: 7 },
    { skill: 'Monitoring', level: 7 },
    { skill: 'Cloud', level: 7 },
    { skill: 'Remote Work', level: 8 }
].sort((a, b) => a.skill.localeCompare(b.skill));

const languageSkills = [
    { lang: 'JavaScript', level: 10 },
    { lang: 'TypeScript', level: 10 },
    { lang: 'C#', level: 7 },
    { lang: 'Java', level: 3 },
    { lang: 'Go', level: 3 },
    { lang: 'C/C++', level: 5 },
    { lang: 'ShellScript', level: 5 }
].sort((a, b) => a.lang.localeCompare(b.lang));

const techSkills = [
    { name: 'WebRTC', level: 10 },
    { name: 'Docker', level: 6 },
    { name: 'Windows Server', level: 7 },
    { name: 'NEC IX', level: 8 },
    { name: 'Kubernetes', level: 6 },
    { name: 'Prometheus', level: 5 },
    { name: 'Ubuntu', level: 6 },
    { name: 'Android', level: 4 }
].sort((a, b) => a.name.localeCompare(b.name));

const skillsData: ChartData<'radar'> = {
    labels: skills.map(s => s.skill),
    datasets: [
        {
            label: 'level',
            data: skills.map(s => s.level),
            backgroundColor: 'rgb(33, 150, 243)',
            borderColor: 'rgb(33, 150, 243)',
            borderWidth: 1,
            pointRadius: 0
        }
    ]
};
const languageSkillsData: ChartData<'radar'> = {
    labels: languageSkills.map(s => s.lang),
    datasets: [
        {
            label: 'level',
            data: languageSkills.map(s => s.level),
            backgroundColor: 'rgb(33, 150, 243)',
            borderColor: 'rgb(33, 150, 243)',
            borderWidth: 1,
            pointRadius: 0
        }
    ]
};
const techSkillsData: ChartData<'radar'> = {
    labels: techSkills.map(s => s.name),
    datasets: [
        {
            label: 'level',
            data: techSkills.map(s => s.level),
            backgroundColor: 'rgb(33, 150, 243)',
            borderColor: 'rgb(33, 150, 243)',
            borderWidth: 1,
            pointRadius: 0
        }
    ]
};

const options: ChartOptions<'radar'> = {
    scales: {
        r: {
            angleLines: {
                display: false
            },
            pointLabels: {
                font: {
                    size: 16
                },
                color: 'rgb(33, 150, 243)'
            },
            grid: {
                color: 'rgb(33, 150, 243)'
            },
            ticks: {
                display: false
            },
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        }
    }
};

const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.chart}>
                <Radar data={skillsData} options={options}></Radar>
            </div>
            <div className={styles.chart}>
                <Radar data={languageSkillsData} options={options}></Radar>
            </div>
            <div className={styles.chart}>
                <Radar data={techSkillsData} options={options}></Radar>
            </div>
        </div>
    );
};

export default Skills;
