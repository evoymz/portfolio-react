import styles from "./Skills.module.css";
import javascript from "../../assets/skills/javascript.svg"
import css from "../../assets/skills/css.svg"
import html from "../../assets/skills/html.svg"
import react from "../../assets/skills/react.svg"

export function Skills() {
    return(
        <div className={styles.skill} id="skills">
            <h1>Habilidades</h1>

            <p>Conheça um pouco das minhas habilidades e conhecimentos.</p>

            <div >
                <img src={html}/>
                <img src={css}/>
                <img src={javascript}/>
                <img src={react}/>
            </div>
        </div>
    )
}