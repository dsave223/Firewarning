import Image from "../atoms/Image";
import styled from "styled-components";

const WI = styled.div`
${props => props.$imgwrapper &&`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`}
${props => props.$imgeditwrapper &&`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`}
`;

function WrapperImage ({src, alt, img, imgregistre, imgwrapper, imgedit, imgeditwrapper}) {
    return(
        <WI $imgwrapper={imgwrapper} $imgeditwrapper={imgeditwrapper}>
            <Image src={src} alt={alt} imgl={img} imgregistre={imgregistre} imgedit={imgedit}/>
        </WI>
    )
    
}

export default WrapperImage;