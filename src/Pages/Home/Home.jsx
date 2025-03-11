import Header from "../../components/Header/Header";
import { StyledHome } from "./styled";
import jf from '../../assets/jf.png';
import estrela from '../../assets/logo.png';

export default function Home() {
    const elementos = [];
    
    for (let i = 0; i < 7; i++) {
        elementos.push(
            <div className="caixaTexto" key={i}>
                <p>SUA OPORTUNIDADE DE SUCESSO!</p>
                <img id="estrela" src={estrela} alt="img" />
            </div>
        );
    }

    return (
        <StyledHome>
            <section id="container">

                <Header />

                <img id="imgJf" src={jf} alt="img" />

                <div id="texto">
                    <div className="wrapper">
                        {elementos}
                    </div>
                </div>

                <h2 id="botao">INSCRIÇÕES EM BREVE</h2>

            </section>
        </StyledHome>
    );
}
