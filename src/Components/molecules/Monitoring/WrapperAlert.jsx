import Image from "../../atoms/Image";
import Title from "../../atoms/Title";
import styled from "styled-components";

const Wa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-size: .7rem;
    font-weight: 300;
`;

function WrapperAlert ({src, alt, title}) {
    return (
        <Wa>
            <Image src={src} alt={alt}/>
            <Title title={title}/>
        </Wa>
    )
}

export default WrapperAlert;