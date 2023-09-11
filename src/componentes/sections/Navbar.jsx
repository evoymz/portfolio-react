import styles from './Navbar.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href="#projects">Projeto</Nav.Link></li>
            </ul>

            <ul>
                <li><a href="https://www.linkedin.com/in/evoy-milioli-zaniboni-8a3535207/" target='_blank'><FaLinkedin size={32}/></a></li>
                <li><a href="https://github.com/evoymz" target='_blank'><FaGithub size={32}/></a></li>
            </ul>
        </div>
    )
}