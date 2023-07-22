import styled from "styled-components";

const AtmImg = styled.img``;

function Image ({src, alt}) {
    return <AtmImg src={src} alt={alt} />;
    
}

export default Image;
