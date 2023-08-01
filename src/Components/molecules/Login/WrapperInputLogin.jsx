import Input from "../../atoms/Input";
import styled from "styled-components";

const WI = styled.div `
display: flex;
flex-direction: column;
gap: 4vh;
width: 100%;
margin: 4% 0 11% 0;
`;

function WrapperInputLogin ({typeEml, typePss, nameEml, namePss, placeholderEml, placeholderPss, nptlogin}) {
    return(
        <WI>
            <Input type={typeEml} name={nameEml} placeholder={placeholderEml} nptlogin={nptlogin}/>
            <Input type={typePss} name={namePss} placeholder={placeholderPss} nptlogin={nptlogin}/>
        </WI>
    )
} 

export default WrapperInputLogin;