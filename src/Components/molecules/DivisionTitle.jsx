import Title from "../atoms/Title";
import styled from "styled-components";

const Wttl = styled.div ``;

function DivisionTitle ({title}) {
    return(
        <Wttl>
            <Title title={title} />
        </Wttl>

    )
}

export default DivisionTitle;