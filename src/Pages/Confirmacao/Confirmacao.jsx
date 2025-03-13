import { StyledConfirmacao } from "./styled";
import logo from '../../assets/jf.png'


export default function Confirmacao() {
    return (
        <StyledConfirmacao>

            <section>

                <h1>
                    PARABÉNS!
                </h1>
                <p>
                   SUA INSCRIÇÃO FOI REALIZADA COM SUCESSO!
                </p>

                <p>
                    DATA DAS AUDIÇÕES: 30/03/2025
                </p>
                <p>
                    HORÁRIO: 11h
                </p>
                <p>
                    ENDEREÇO: MUSIC BOX
                </p>

            </section>

            <img src={logo} alt="img" />

        </StyledConfirmacao>
    )
}