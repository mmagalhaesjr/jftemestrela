import { Link } from "react-router-dom";
import { StyledHeader } from "./styled";

export default function Header(){
    return(
        <StyledHeader>

            <Link>
            <h1>
                WHATSAPP
            </h1>
            </Link>

            <Link>
            <h1>
                INSTAGRAN
            </h1>
            </Link>

            <Link>
            <h1>
                TIKTOK
            </h1>
            </Link>


        </StyledHeader>
    )
}