import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMastodon,
    faGithub,
    faAmazon,
    faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './sns.module.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const SNS = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <a
                    href="https://mstdn.sublimer.me/@sublimer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faMastodon as IconProp}
                        className={styles.snsIcon}
                    ></FontAwesomeIcon>
                </a>
            </div>
            <div className={styles.item}>
                <a
                    href="https://twitter.com/lz650sss"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faXTwitter as IconProp}
                        className={styles.snsIcon}
                    ></FontAwesomeIcon>
                </a>
            </div>
            <div className={styles.item}>
                <a
                    href="https://github.com/kadoshita"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faGithub as IconProp}
                        className={styles.snsIcon}
                    ></FontAwesomeIcon>
                </a>
            </div>
            <div className={styles.item}>
                <a
                    href="mailto:sublimer@sublimer.me"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={styles.snsIcon}
                    ></FontAwesomeIcon>
                </a>
            </div>
            <div className={styles.item}>
                <a
                    href="https://sublimer.hatenablog.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faBlog}
                        className={styles.snsIcon}
                    ></FontAwesomeIcon>
                </a>
            </div>
            <div className={styles.item}>
                <a
                    href="https://www.amazon.jp/hz/wishlist/ls/1TBC572JNRXAU?ref_=wl_share"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faAmazon as IconProp}
                        className={styles.snsIcon}
                    ></FontAwesomeIcon>
                </a>
            </div>
        </div>
    );
};

export default SNS;
