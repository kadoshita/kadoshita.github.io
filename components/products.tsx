import styles from './products.module.css';
import Image from 'next/image';

const Products = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h2>react-select-media-devices-modal</h2>
                <p>A React component library for select media devices</p>
                <p className={styles.smallText}>
                    TypeScript / vite / vitest / playwirght
                </p>
                <Image
                    alt="react-select-media-devices-modal screenshot"
                    className={styles.image}
                    src="/images/react-select-media-devices-modal.png"
                    width={390}
                    height={200}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
                <p>
                    <a
                        href="https://kadoshita.github.io/react-select-media-devices-modal/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        URL
                    </a>
                    &nbsp;/&nbsp;
                    <a
                        href="https://github.com/kadoshita/react-select-media-devices-modal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    &nbsp;/&nbsp;
                    <a
                        href="https://www.npmjs.com/package/react-select-media-devices-modal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NPM
                    </a>
                </p>
            </div>
            <div className={styles.item}>
                <h2>doturn</h2>
                <p>A C#(.NET) implementation of STUN/TURN</p>
                <p className={styles.smallText}>C# / .NET</p>
                <Image
                    alt="TURN packet structure"
                    className={styles.image}
                    src="/images/doturn.png"
                    width={390}
                    height={200}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
                <p>
                    <a
                        href="https://github.com/kadoshita/doturn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    &nbsp;/&nbsp;
                    <a
                        href="https://sublimer.hatenablog.com/entry/2021/12/12/000000"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Blog
                    </a>
                </p>
            </div>
            <div className={styles.item}>
                <h2>excitation</h2>
                <p>
                    The CLI tool to generate IP addresses for documentation as
                    defined by RFC5737
                </p>
                <p className={styles.smallText}>Rust / clap</p>
                <Image
                    alt="excitation help screenshot"
                    className={styles.image}
                    src="/images/excitation.png"
                    width={390}
                    height={200}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
                <p>
                    <a
                        href="https://github.com/kadoshita/excitation"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </p>
            </div>

            <div className={styles.item}>
                <h2>fluid</h2>
                <p>
                    Webページをクリッピングして、共有できるWebアプリケーションです。
                </p>
                <p className={styles.smallText}>
                    Next.js / React / TypeScript / Azure
                </p>
                <Image
                    alt="fluid screenshot"
                    className={styles.image}
                    src="/images/fluid.png"
                    width={390}
                    height={200}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
                <p>
                    <a
                        href="https://fluid.sublimer.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        URL
                    </a>
                    &nbsp;/&nbsp;
                    <a
                        href="https://fluid-portal.azurewebsites.net/api/feed"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        RSS
                    </a>
                    &nbsp;/&nbsp;
                    <a
                        href="https://github.com/kadoshita/fluid"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    &nbsp;/&nbsp;
                    <a
                        href="https://github.com/kadoshita/fluid-web-clipper"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Extension
                    </a>
                </p>
            </div>
            <div className={styles.item}>
                <h2>LiveShareEditor</h2>
                <p>
                    ソースコードをリアルタイムで配信できるオンラインエディターです。
                </p>
                <p className={styles.smallText}>
                    ASP.NET(C#) / SignalR / React / Azure / Docker
                </p>
                <Image
                    alt="live-share-editor screenshot"
                    className={styles.image}
                    src="/images/live-share-editor.png"
                    width={390}
                    height={200}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
                <p>
                    <a
                        href="https://live-share-editor.azurewebsites.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        URL
                    </a>
                    &nbsp;/&nbsp;
                    <a
                        href="https://github.com/kadoshita/live-share-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </p>
            </div>
            <div className={styles.item}>
                <h2>latext-counter</h2>
                <p>
                    TeXファイルの文字数と作業時間を表示するWebアプリケーションです。
                </p>
                <p className={styles.smallText}>
                    TypeScript / fastify / CLI(commander) / Chart.js
                </p>
                <Image
                    alt="latext-counter screenshot"
                    className={styles.image}
                    src="/images/latext-counter.png"
                    width={390}
                    height={200}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
                <p>
                    <a
                        href="https://www.npmjs.com/package/latext-counter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NPM
                    </a>
                    &nbsp;/&nbsp;
                    <a
                        href="https://github.com/kadoshita/latext-counter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Products;
