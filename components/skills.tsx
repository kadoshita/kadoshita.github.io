import { ChartData, ChartOptions } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styles from './skills.module.css';

const skills = [
    { skill: 'Programming', level: 10 },
    { skill: 'Infra', level: 9 },
    { skill: 'Network', level: 7 },
    { skill: 'IoT', level: 5 },
    { skill: 'Operation', level: 7 },
    { skill: 'Monitoring', level: 5 },
    { skill: 'Cloud', level: 6 },
    { skill: 'Remote Work', level: 8 }
].sort((a, b) => a.skill.localeCompare(b.skill));

const languageSkills = [
    { lang: 'JavaScript', level: 10 },
    { lang: 'TypeScript', level: 7 },
    { lang: 'C#', level: 5 },
    { lang: 'Java', level: 4 },
    { lang: 'Go', level: 3 },
    { lang: 'C/C++', level: 4 },
    { lang: 'ShellScript', level: 3 }
].sort((a, b) => a.lang.localeCompare(b.lang));

const techSkills = [
    { name: 'WebRTC', level: 10 },
    { name: 'Docker', level: 7 },
    { name: 'Windows Server', level: 7 },
    { name: 'NEC IX', level: 8 },
    { name: 'Kubernetes', level: 3 },
    { name: 'Prometheus', level: 6 },
    { name: 'Ubuntu', level: 6 },
    { name: 'Android', level: 4 }
].sort((a, b) => a.name.localeCompare(b.name));

const skillsData: ChartData = {
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
const languageSkillsData: ChartData = {
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
const techSkillsData: ChartData = {
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
            fontSize: 16
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
        <div className={styles.container}>
            <div className={styles.chart}>
                <Radar
                    data={skillsData}
                    options={options}></Radar>
            </div>
            <div className={styles.chart}>
                <Radar
                    data={languageSkillsData}
                    options={options}></Radar>
            </div>
            <div className={styles.chart}>
                <Radar
                    data={techSkillsData}
                    options={options}></Radar>
            </div>
        </div>

    )
};

export default Skills;