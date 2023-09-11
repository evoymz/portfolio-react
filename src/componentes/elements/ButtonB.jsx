import styles from './ButtonB.module.css';

export function ButtonB({text, link, page}) {
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