import Head from 'next/head';
import Career from '../components/career';
import Layout, { siteTitle } from '../components/layout';
import Skills from '../components/skills';
import utilStyles from '../styles/utils.module.css';

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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Skills</h1>
        <Skills></Skills>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Career</h1>
        <Career></Career>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Certification</h1>
        <ul className={utilStyles.list}>
          <li>基本情報処理技術者</li>
          <li>応用情報処理技術者</li>
        </ul>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Products</h1>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>SNS</h1>
      </section> */}
    </Layout>
  )
};

export default Home;