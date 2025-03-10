import styled from "styled-components";
import { roxo, verde } from '../../constants/Cores';


export const StyledHome = styled.main`
width: 100%;
height: 100vh;
background-color: ${verde};

display: flex;
align-items: center;
justify-content: center;


#container{
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

#imgJf{
    width: 50%;
    height: 50%;
}


@keyframes animar {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

#texto{
    width: 100vw;
    display: flex;
    align-items: flex-start;
    overflow: hidden;
   
    position: relative;
    margin-top: 20px;
}
.wrapper {
    display: flex;
    width: calc(100% * 2); /* Duas vezes o tamanho do container para looping */
    animation: animar 20s linear infinite;
}
.caixaTexto{
    width: 50%; 
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: space-around;
}

#botao{
    width: fit-content;
    height: fit-content;
    background-color: ${verde};
    border: none;
    outline: none;
    color: #000000;
    padding: 10px;
    cursor: pointer;
}

#texto{
    width: 100%;
    height: fit-content;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
p{
    color: #000000;
    font-size: 1.5rem;
    font-family: "Inter", sans-serif;
    font-style: italic;
}
#estrela{
    width: 50px;
}

`