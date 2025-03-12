import { Link } from "react-router-dom";
import { StyledHeader } from "./styled";

export default function Header(){

    const whatsapp = "https://api.whatsapp.com/send?phone=32999828888"
    const inst ="https://www.instagram.com/jftemestrela?igsh=MW91c3d6NHZ0bGYxcA=="
    const tiktok = 'https://www.tiktok.com/@musicboxstudiobr'

    return(
        <StyledHeader>

            <Link to={whatsapp} target="_blank" rel="noreferrer" >
            <h1>
                WHATSAPP
            </h1>
            </Link>
 
            <Link to={inst} target="_blank" rel="noreferrer" >
            <h1>
                INSTAGRAN
            </h1>
            </Link>

            <Link to={tiktok} target="_blank" rel="noreferrer">
            <h1>
                TIKTOK
            </h1>
            </Link>


        </StyledHeader>
    )
}