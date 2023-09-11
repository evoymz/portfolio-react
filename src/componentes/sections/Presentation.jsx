import styles from './Presentation.module.css';
import { ButtonA } from '../elements/ButtonA';

export function Presentation() {
    return (
            <div className={styles.presentation} id="presentation">
                <h4><strong>Bem vindo ao meu portfólio</strong></h4>

                <h1>Olá, eu sou Evoy Milioli Zaniboni!</h1>
                
                <p>
                    Sempre levei a tecnologia como um hobby, mas nos últimos tempos, <br></br> tenho estado cada vez mais imerso neste fascinante mundo. <br></br>Como um programador júnior, estou no início da minha jornada<br></br> no universo da programação, mas minha vontade por codificar<br></br> e aprender continua a crescer a cada dia. Neste espaço, vou compartilhar<br></br> com vocês uma amostra dos projetos que realizei até agora, sempre com <br></br> objetivo de aprimorar minhas habilidades à medida que trilho este vasto<br></br> caminho de desenvolvimento.
                </p>

                <ButtonA text='Conecte-se comigo!!' link='https://github.com/evoymz' page="_blank"/>
                
            </div>
    )
}