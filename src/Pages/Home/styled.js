import styled from "styled-components";
import { roxo, verde } from '../../constants/Cores';

export const StyledHome = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${verde};

    display: flex;
    align-items: center;
    justify-content: center;

    #container {
        width: 90%;
        height: 90%;
        background-color: ${roxo};
        border-radius: 50px;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    #imgJf {
        width: 50%;
        height: 50%;
    }

    #texto {
        width: 100%;
        overflow: hidden;
        margin-top: 20px;
        display: flex;
        align-items: center;
    }

    .wrapper {
        display: flex;
        width: 200%; /* O dobro para garantir o looping */
        animation: animar 10s linear infinite;
    }

    .marquee {
        display: flex;
        width: 100%;
    }

    .caixaTexto {
        width: 33.33%; 
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    @keyframes animar {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }

    #botao {
        background-color: ${verde};
        padding: 10px;
        cursor: pointer;
        font-size: 2rem;
        &:hover {
            background-color: #46df09;
            color: #ffffff;
        }
    }

    p {
        font-size: 1.5rem;
        font-family: "Inter", sans-serif;
        font-style: italic;
    }

    #estrela {
        width: 50px;
    }

    @media (max-width: 800px) {
        #imgJf {
            width: 80%;
            height: 30%;
        }

        p {
            font-size: 1rem;
        }

        #botao {
            font-size: 1.2rem;
        }


    .caixaTexto {
        width: 50%; 
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    }
`;
