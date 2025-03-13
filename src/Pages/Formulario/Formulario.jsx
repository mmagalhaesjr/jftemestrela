import { StyledFormulario } from "./styled";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Formulario() {
    const form = useRef();
    const navigate = useNavigate(); // Hook para navegação

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('jftemestrela', 'template_jftemestrela', form.current, 'h7H25iDqG-Vvjkm7e')
            .then((result) => {
                console.log(result.text);
                navigate("/confirmacao"); // Redireciona após o envio bem-sucedido
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <StyledFormulario>
            <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="_captcha" value="false" />

                <input type="text" name="nome" placeholder="Nome completo:" required />
                <input type="text" name="nomeArtistico" placeholder="Nome Artístico:" />
                <input type="text" name="nascimento" placeholder="Data de Nascimento:" required />
                <input type="text" name="telefone" placeholder="Telefone:" required />
                <input type="text" name="email" placeholder="E-mail:" required />
                <input type="text" name="cidade" placeholder="Cidade:" required />

                <button type="submit">ENVIAR</button>
            </form>
        </StyledFormulario>
    );
}
