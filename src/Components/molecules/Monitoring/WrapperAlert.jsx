import Image from "../../atoms/Image";
import Title from "../../atoms/Title";
import styled from "styled-components";

const Wa = styled.div``;

function WrapperAlert ({src, alt, title}) {
    return (
        <Wa>
            <Image src={src} alt={alt}/>
            <Title title={title}/>
        </Wa>
    )
}

export default WrapperAlert;