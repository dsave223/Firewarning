import Text from "../atoms/Text";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WL = styled.div ``;

function WrapperLink ({txt, to, link}) {
    return(
        <WL>
            <Text txt={txt}/>
            <Link to={to}>{link}</Link>
        </WL>
    )
    
}

export default WrapperLink;