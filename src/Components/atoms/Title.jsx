import styled from "styled-components";

const AtmTitle = styled.h1 `
${props => props.$ttllogin &&`
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 1.7rem;
    font-weight: 300;
    text-align: center;
    margin: 0 0 10% 0;
`}
`;

function Title ({title, ttllogin}) {
    return <AtmTitle $ttllogin={ttllogin}>{title}</AtmTitle>;
}

export default Title;