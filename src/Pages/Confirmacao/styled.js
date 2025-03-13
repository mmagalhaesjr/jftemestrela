import styled from "styled-components";
import { azul, verde } from "../../constants/Cores";


export const StyledConfirmacao = styled.main`
    width: 100%;
    height: 100vh;
    background-color: ${verde};
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    section{
        width: 50%;
        height: 50%;
        background-color: ${azul};
        border-radius: 50px;
        margin-bottom: 10%;

        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-evenly;
        padding: 50px;
    }

    h1{
        font-size: 2.5rem;
        font-weight: bold;
    }
    p{
        font-size: 1.3rem;
    }

    img{
        width: 35%;
        position: absolute;
        bottom: 10%;
    }

    @media (max-width:800px) {
        section{
            width: 90%;
            margin-bottom: 20%;
        }
        p{
        font-size: 1rem;
    }
    img{
        width: 80%;
        position: absolute;
        bottom: 20%;
    }
    }


`