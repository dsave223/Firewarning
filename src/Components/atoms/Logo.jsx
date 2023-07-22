import styled from "styled-components";

const AtmLogo = styled.img`
`;

function Logo ({src, alt}) {
    return <AtmLogo src={src} alt={alt} />;
}

export default Logo;