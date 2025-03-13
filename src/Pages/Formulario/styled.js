import styled from "styled-components";
import { roxo, verde } from '../../constants/Cores';

export const StyledFormulario = styled.main`
width: 100%;
height: 100vh;
background-color: ${roxo};

display: flex;
align-items: center;
justify-content: center;


form{
    width: 90%;
    height: 90%;
    background-color: ${verde};
    border-radius: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

input {
    background-color: transparent;
   
    width: 90%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px #000000;
    padding-bottom: 5px;
    outline: none;
 
  }
  input::placeholder{
    color: #000000;
  }

  button{
    width: 90px;
    min-height: 40px;
    font-size: 1.2rem;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    color: #000000;

    &:hover{
        background-color: ${roxo};
    }
  }




`