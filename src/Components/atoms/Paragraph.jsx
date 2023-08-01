import styled from "styled-components";

function Paragraph({msn}) {
    return ( <>
            <Pagf>{msn}</Pagf>
    </> );
}

export default Paragraph;

const Pagf = styled.p`
    font-family: Hind;
`