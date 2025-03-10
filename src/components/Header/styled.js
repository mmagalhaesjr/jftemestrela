import styled from "styled-components";
import { verde } from "../../constants/Cores";

export const StyledHeader = styled.header`
width: 90%;
height: fit-content;
background-color: transparent;
position: absolute;
top: 30px;

display: flex;
align-items: center;
justify-content: space-between;

h1{
    font-size:1.5rem;

    &:hover{
        color: ${verde};
    }
    
}






@media (max-width:800px) {

h1{
    font-size:1rem;
    
}
}

`