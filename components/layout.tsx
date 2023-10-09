import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'sublimer';
export const siteTitle = 'sublimer.me';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="sublimerのポートフォリオ" />
                <meta name="author" content="Yoshiki Kadoshita" />
                <meta
                    name="keywords"
                    content="Kadoshita,Android,WebRTC,シャトルラン,高専,プロコン"
                />

                <meta name="theme-color" content="#2196F3" />

                <meta property="og:title" content={siteTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sublimer.me" />
                <meta
                    property="og:image"
                    content="https://sublimer.me/images/profile.png"
                />
                <meta
                    property="og:description"
                    content="sublimerのポートフォリオ"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={siteTitle} />
                <meta
                    name="twitter:description"
                    content="sublimerのポートフォリオ"
                />
                <meta
                    name="twitter:image"
                    content="https://sublimer.me/images/profile.png"
                />
                <meta name="twitter:url" content="https://sublimer.me" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.png"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>
                                    {name}
                                </a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
