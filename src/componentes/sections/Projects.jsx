import { ButtonB } from '../elements/ButtonB';
import styles from './Projects.module.css';
import { Cards } from '../elements/Cards';
import lpdnc from '../../assets/projects/lpdnc.svg';
import portfolio from '../../assets/projects/portfolio.png';
import calculadora from '../../assets/projects/calculadora.png';
import curriculo from '../../assets/projects/curriculo.png';
import gerenciadorprodutos from '../../assets/projects/gerenciadorprodutos.png';
import landingPageArq from '../../assets/projects/landingPageArq.png';
import nlwSetupHabits from '../../assets/projects/nlwSetupHabits.png';
import pagBootcamp from '../../assets/projects/pagBootcamp.png';
import paginaEvento from '../../assets/projects/paginaEvento.png';
import pokedex from '../../assets/projects/pokedex.png';
import redeSocialRocket from '../../assets/projects/redeSocialRocket.png';
import tabelaJogos from '../../assets/projects/tabelaJogos.png';

export function Projects() {
    return (
        <div className={styles.projects} id="projects">
            <h1>Projetos</h1>
            <Cards
            img={pagBootcamp}
            title="LP para bootcamp"
            tech="HTML e CSS"
            description="Página para um bootcamp com formulário."
            repo="https://github.com/evoymz/bootcamp-dnc"
            site="https://bootcamp-dnc-evoy.netlify.app/"
            page="_blank"
            />

            <Cards
            img={landingPageArq}
            title="Landing Page Arquitetura"
            tech="HTML, CSS e JS"
            description="LP para uma empresa de arquitetura, com carrossel em JS."
            repo="https://github.com/evoymz/landing-page-desafio-dnc"
            site="https://landing-page-evoka-architeture-dnc.netlify.app/"
            page="_blank"
            />

            <Cards 
            img={lpdnc}
            title="Landing Page - DNC"
            tech="HTML, CSS e JS"
            description="Landing page para lançamento de um curso de tecnologia"
            repo="https://github.com/evoymz/projeto-landing-page"
            site="https://first-evokas-landing-page.netlify.app/"
            page="_blank"
            />

            <Cards
            img={tabelaJogos}
            title="Tabela jogos da copa"
            tech="HTML, CSS e JS"
            description="Site com tabela com alguns jogos da copa do mundo, explorando cards dinamicos e diferentes layouts."
            repo="https://github.com/evoymz/nlw-10-copa"
            site="https://nlw-table-evoy.netlify.app/"
            page="_blank"
            />

            <Cards
            img={paginaEvento}
            title="Evento CCXP"
            tech="HTML, CSS e JS"
            description="Pagina para um evento. Utilizando funcionalidades JS como por exemplo coutdown"
            repo="https://github.com/evoymz/bootcamp-dnc"
            site="https://ccxp-landing-page-2eydghrak-evoymz.vercel.app/"
            page="_blank"
            />

            <Cards
            img={calculadora}
            title="Calculadora"
            tech="HTML, CSS e JS"
            description="Calculadora que me fez explorar as propriedades de operadores JS!"
            repo="https://github.com/evoymz/Calculadora"
            site="https://calculator-evoy.netlify.app/"
            page="_blank"
            />

            <Cards
            img={gerenciadorprodutos}
            title="Gerenciador de produtos"
            tech="HTML, CSS e JS"
            description="Página para listagem de produtos, funções úteis para uso de controle de estoque."
            repo="https://github.com/evoymz/Gerenciador-produtos"
            site="https://gerenciador-produtos-evoy.netlify.app/"
            page="_blank"
            />

            <Cards
            img={nlwSetupHabits}
            title="Controle de hábitos"
            tech="HTML, CSS e JS"
            description="Para uso de organização de realizaçao de tarefas, salvando cada dia com suas tarefas."
            repo="https://github.com/evoymz/nlw-setup"
            site="https://setup-habits-evoy.netlify.app/"
            page="_blank"
            />

            <Cards
            img={pokedex}
            title="Pokedex"
            tech="HTML, CSS e JS"
            description="Pokedex nostalgica para solidificar conhecimentos em JS."
            repo="https://github.com/evoymz/Pokedex"
            site="https://pokedex-evoy.netlify.app/"
            page="_blank"
            />

            <Cards
            img={redeSocialRocket}
            title="Rede Social"
            tech="HTML, CSS e REACT JS"
            description="Rede social com funcionalidades de inserir e apagar comentários e likes. Utilizando o ReactJS mais a fundo!"
            repo="https://github.com/evoymz/Rede-social"
            site="https://social-media-evoy.netlify.app/"
            page="_blank"
            />

            <Cards 
            img={portfolio}
            title="Portfolio"
            tech="HTML, CSS e REACT JS"
            description="Aqui comecei a por em prática conhecimentos em ReactJs, explorando as possibilidades de dinamizar paginas."
            repo="https://github.com/evoymz/projeto-landing-page"
            site="https://first-evokas-landing-page.netlify.app/"
            page="_blank"
            />

            <div id={styles.botaoRepo}>
                <ButtonB text='Acesse meu repositório completo' link='https://github.com/evoymz?tab=repositories' page='_blank'/>
            </div>
        </div>
    )
}