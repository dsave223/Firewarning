import styled from "styled-components";

const St = styled.h2`
${props => props.$subtitlelogin &&`
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
`}
${props => props.$subtitleup &&`
    color: black;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    margin-left: 35%;
`}
`;

function SubTitle ({subtitle, subtitlelogin, subtitleup}) {
    return <St $subtitlelogin={subtitlelogin} $subtitleup={subtitleup}>{subtitle}</St>;
}

export default SubTitle;