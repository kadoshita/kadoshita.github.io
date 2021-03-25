import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Career = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2014 - 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">一関工業高等専門学校</h3>
                <h4 className="vertical-timeline-element-subtitle">制御情報工学科</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2017 - 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">F社</h3>
                <h4 className="vertical-timeline-element-subtitle">アルバイト</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2019 - 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">豊橋技術科学大学</h3>
                <h4 className="vertical-timeline-element-subtitle">情報・知能工学課程</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2021 - 現在"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">N社</h3>
                <h4 className="vertical-timeline-element-subtitle">某プラットフォーム開発・運用チーム</h4>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
};

export default Career;