import Image from "../atoms/Image";
import styled from "styled-components";

const WI = styled.div``;

function WrapperImage ({src, alt}) {
    return(
        <WI>
            <Image src={src} alt={alt}/>
        </WI>
    )
    
}

export default WrapperImage;