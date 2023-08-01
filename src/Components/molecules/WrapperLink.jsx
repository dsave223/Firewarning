import Text from "../atoms/Text";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WL = styled.div `
display: flex;
margin: 6% 0 0 0;
width: 100%;
gap: 1vh;
.constent-txt{
    display: flex;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 300;
}
.constent-link{
    align-items: center;
    display: flex;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    .link{
        text-decoration-line: none;
        text-decoration: none;
        color: #F62825;
    }
}
`;

function WrapperLink ({txt, to, link, txtlogin}) {
    return(
        <WL>
            <div className="constent-txt">
                <Text txt={txt} txtlogin={txtlogin}/>
            </div>
            <div className="constent-link">
                <Link to={to} className="link">{link}</Link>
            </div>
        </WL>
    )
    
}

export default WrapperLink;