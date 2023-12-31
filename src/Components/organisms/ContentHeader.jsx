import DivisonLogo from "../molecules/DivisionLogo";
import styled from "styled-components";

const CH = styled.header`
display: flex;
flex-direction: row-reverse;
height: 18vh;
`;

function ContentHeader ({src, alt}) {
    return(
        <CH>
            <DivisonLogo src={src} alt={alt}/>
        </CH>
    )
}

export default ContentHeader;