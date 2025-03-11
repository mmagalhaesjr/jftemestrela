
import Header from "../../components/Header/Header";
import { StyledHome } from "./styled";
import jf from '../../assets/jf.png'
import estrela from '../../assets/logo.png'



export default function Home() {
    return (
        <StyledHome>


            <section id="container">

                <Header />

                <img id="imgJf" src={jf} alt="img" />

                <div id="texto">
                    <div className="wrapper">

                        <div className="caixaTexto">
                            <p>
                                SUA OPORTUNIDADE DE SUCESSO!
                            </p>

                            <img id="estrela" src={estrela} alt="img" />
                        </div>

                        <div className="caixaTexto">
                            <p>
                                SUA OPORTUNIDADE DE SUCESSO!
                            </p>

                            <img id="estrela" src={estrela} alt="img" />
                        </div>

                        <div className="caixaTexto">
                            <p>
                                SUA OPORTUNIDADE DE SUCESSO!
                            </p>

                            <img id="estrela" src={estrela} alt="img" />
                        </div>

                        <div className="caixaTexto">
                            <p>
                                SUA OPORTUNIDADE DE SUCESSO!
                            </p>

                            <img id="estrela" src={estrela} alt="img" />
                        </div>

                        <div className="caixaTexto">
                            <p>
                                SUA OPORTUNIDADE DE SUCESSO!
                            </p>

                            <img id="estrela" src={estrela} alt="img" />
                        </div>

                        <div className="caixaTexto">
                            <p>
                                SUA OPORTUNIDADE DE SUCESSO!
                            </p>

                            <img id="estrela" src={estrela} alt="img" />
                        </div>

                        <div className="caixaTexto">
                            <p>
                                SUA OPORTUNIDADE DE SUCESSO!
                            </p>

                            <img id="estrela" src={estrela} alt="img" />
                        </div>




                    </div>
                </div>


                <h2 id="botao">
                    INSCRICÕES EM BREVE
                </h2>


            </section>



        </StyledHome>
    )
}