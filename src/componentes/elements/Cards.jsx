import styles from './Cards.module.css';
import { ButtonB } from './ButtonB';


export function Cards({img, title, tech, description, repo, site, page}) {
    return (
        <div className={styles.card}>

            <a href={site} target={page}>

             <img src={img} alt="erro" />

            </a>

            <section>

                <h3>{title}</h3>

                <p><strong>Tecnologia: {tech}</strong></p>

                <p>{description}</p>

                <ButtonB text='Acesse o repositório' link={repo} page="_blank"/>
                
            </section>
        </div>
    )
}