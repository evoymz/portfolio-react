import styles from './ButtonA.module.css';

export function ButtonA ({text, link, page}) {
    return (
        <div>
            <a href={link} target={page}>
                <button className={styles.btn}>
                    {text}
                </button>
            </a>
        </div>
    )
}