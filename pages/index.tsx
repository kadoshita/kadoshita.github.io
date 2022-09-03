import Head from 'next/head';
import Career from '../components/career';
import Layout, { siteTitle } from '../components/layout';
import Products from '../components/products';
import Skills from '../components/skills';
import SNS from '../components/sns';
import utilStyles from '../styles/utils.module.css';
import style from './index.module.css';

const Home = () => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>DevからOpsまで</p>
                <p>コンピューターと戯れることが趣味で仕事で特技です</p>
            </section>
            <section className={style.container}>
                <div className={style.item}>
                    <p className={utilStyles.headingMd}>エディタ</p>
                    <p>VS Code / nano</p>
                </div>
                <div className={style.item}>
                    <p className={utilStyles.headingMd}>勉強したいこと</p>
                    <p>IaC / テストコード / Linuxシステムコール / ログ解析</p>
                </div>
                <div className={style.item}>
                    <p className={utilStyles.headingMd}>苦手なこと</p>
                    <p>英語</p>
                </div>
                <div className={style.item}>
                    <p className={utilStyles.headingMd}>好きなこと</p>
                    <p>睡眠 / Twitter</p>
                </div>
                <div className={style.item}>
                    <p className={utilStyles.headingMd}>趣味</p>
                    <p>
                        廃道・廃線・廃隧道 / 地図・航空写真 / ダム / 歩くこと /
                        コーヒー
                    </p>
                </div>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h1 className={utilStyles.headingXl}>Skills</h1>
                <Skills></Skills>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h1 className={utilStyles.headingXl}>Career</h1>
                <Career></Career>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h1 className={utilStyles.headingXl}>Activity</h1>
                <a href="https://www.notion.so/sublimer/5dff80ef7658466e8801597d54b90be3">
                    コンテスト・コミュニティー主催・登壇など
                </a>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h1 className={utilStyles.headingXl}>Certification</h1>
                <ul className={utilStyles.list}>
                    <li>基本情報処理技術者</li>
                    <li>応用情報処理技術者</li>
                </ul>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h1 className={utilStyles.headingXl}>Products</h1>
                <Products></Products>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h1 className={utilStyles.headingXl}>SNS</h1>
                <SNS></SNS>
            </section>
        </Layout>
    );
};

export default Home;
