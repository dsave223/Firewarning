import styled, {StyleSheetManager} from "styled-components";

const AtmImg = styled.img`
${props => props.$img &&`
    width: 100%;
`}
${props => props.$imgregistre &&`
    width: 15%;
`}
${props => props.$imgedit &&`
    width: 11%;
`}
`;

function Image ({src, alt, img, imgregistre, imgedit}) {
    return(
        <AtmImg src={src} alt={alt} $img={img} $imgregistre={imgregistre} $imgedit={imgedit}/>
    );
    
}

export default Image;
