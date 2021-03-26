import styles from './products.module.css';
import Image from 'next/image';

const Products = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h2>fluid</h2>
                <p>Webページをクリッピングして、共有できるWebアプリケーションです。</p>
                <p className={styles.smallText}>Next.js / React / TypeScript / Azure</p>
                <Image
                    src='/images/fluid.png'
                    width={390}
                    height={200}
                    layout='responsive' />
                <p>
                    <a href='https://fluid-portal.azurewebsites.net/' target='_blank' rel='noopener noreferrer'>URL</a>&nbsp;/&nbsp;
                    <a href='https://fluid-portal.azurewebsites.net/api/feed' target='_blank' rel='noopener noreferrer'>RSS</a>&nbsp;/&nbsp;
                    <a href='https://github.com/kadoshita/fluid' target='_blank' rel='noopener noreferrer'>GitHub</a>&nbsp;/&nbsp;
                    <a href='https://github.com/kadoshita/fluid-web-clipper' target='_blank' rel='noopener noreferrer'>Extension</a>
                </p>

            </div>
            <div className={styles.item}>
                <h2>LiveShareEditor</h2>
                <p>ソースコードをリアルタイムで配信できるオンラインエディターです。</p>
                <p className={styles.smallText}>ASP.NET(C#) / SignalR / React / Azure / Docker</p>
                <Image
                    src='/images/live-share-editor.png'
                    width={390}
                    height={200}
                    layout='responsive' />
                <p>
                    <a href='https://live-share-editor.azurewebsites.net/' target='_blank' rel='noopener noreferrer'>URL</a>&nbsp;/&nbsp;
                    <a href='https://github.com/kadoshita/live-share-editor' target='_blank' rel='noopener noreferrer'>GitHub</a>
                </p>

            </div>
            <div className={styles.item}>
                <h2>latext-counter</h2>
                <p>TeXファイルの文字数と作業時間を表示するWebアプリケーションです。</p>
                <p className={styles.smallText}>TypeScript / fastify / CLI(commander) / Chart.js</p>
                <Image
                    src='/images/latext-counter.png'
                    width={390}
                    height={200}
                    layout='responsive' />
                <p>
                    <a href='https://www.npmjs.com/package/latext-counter' target='_blank' rel='noopener noreferrer'>NPM</a>&nbsp;/&nbsp;
                    <a href='https://github.com/kadoshita/latext-counter' target='_blank' rel='noopener noreferrer'>GitHub</a>
                </p>

            </div>
        </div>
    )
};

export default Products;