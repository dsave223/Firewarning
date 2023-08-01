import DivisonLogo from "../molecules/DivisionLogo";
import BurgerButtom from "../atoms/BurgerButtom";
import styled from "styled-components";

const CH = styled.header`
display: flex;
flex-direction: inherit;
justify-content: space-between;
align-items: center;
height: 18vh;
.group-burger{
    margin: 0 0 0 10%;
}
`;

function Header ({src, alt}) {
    return(
        <CH>
            <div className="group-burger">
                <BurgerButtom/>
            </div>
            <DivisonLogo src={src} alt={alt} header/>
        </CH>
    )
}

export default Header;