import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

export function Footer() {
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href="https://www.linkedin.com/in/evoy-milioli-zaniboni-8a3535207/" target='_blank'><FaLinkedin size={32}/></a></li>
                <li><a href="https://github.com/evoymz" target='_blank'><FaGithub size={32}/></a></li>
            </ul>
            <p>evoymiliolizaniboni@gmail.com</p>
            <p>Evoy Milioli Zaniboni © 2023</p>
        </div>
    )
}