import styled from "styled-components";

const AtmText = styled.p `
${props => props.$txtlogin &&`
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: .8rem;
    font-weight: 300;
`}
${props => props.$txtmd &&`
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 300;
`}
`;

function Text ({txt, txtlogin, txtmd}) {
    return <AtmText $txtlogin={txtlogin} $txtmd={txtmd}>{txt}</AtmText>;
}

export default Text;