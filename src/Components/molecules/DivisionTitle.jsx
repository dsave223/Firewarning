import Title from "../atoms/Title";
import styled from "styled-components";

const Wttl = styled.div `
`;

function DivisionTitle ({title, ttllogin}) {
    return(
        <Wttl>
            <Title title={title} ttllogin={ttllogin}/>
        </Wttl>

    )
}

export default DivisionTitle;