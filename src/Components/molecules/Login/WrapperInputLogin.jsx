import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import Title from "../../atoms/Title";
import styled from "styled-components";

const WI = styled.div ``;

function WrapperInputLogin ({typeEml, typePss, nameEml, namePss, placeholderEml, placeholderPss}) {
    return(
        <WI>
            <Input type={typeEml} name={nameEml} placeholder={placeholderEml} />
            <Input type={typePss} name={namePss} placeholder={placeholderPss} />
        </WI>
    )
} 

export default WrapperInputLogin;