import Logo from "../atoms/Logo";
import styled from "styled-components";

const Dl = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 3% 0 0;
`;

function DivisionLogo ({src, alt, header} ) {
    return(
        <Dl>
            <Logo src={src} alt={alt} header={header}/>
        </Dl>
    )
}

export default DivisionLogo;