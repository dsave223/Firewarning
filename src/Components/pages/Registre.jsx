import styled from "styled-components";
import TmpRegistre from "../templates/TmpRegistre";

const ContentRegistre = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

function Registre () {
    return(
        <ContentRegistre>
            <TmpRegistre/>
        </ContentRegistre>
    )
}

export default Registre;