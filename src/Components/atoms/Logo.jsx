import styled from "styled-components";

const AtmLogo = styled.img`
margin: 15% 0 0 0;
width: 35%;
${props => props.$header &&`
    width: 85%;
`}
`;

function Logo ({src, alt, header}) {
    return <AtmLogo src={src} alt={alt} $header={header}/>;
}

export default Logo;