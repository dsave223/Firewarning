import Input from "../../atoms/Input";
import styled from "styled-components";

const WI = styled.div ``;

function WrapperInputRegistre ({typeNm, typeEml, typeNp, typePss, nameNm, nameEml, nameNp, namePss, placeholderNm, placeholderEml, placeholderNp, placeholderPss}) {
    return(
        <WI>
            <Input type={typeNm} name={nameNm} placeholder={placeholderNm} />
            <Input type={typeEml} name={nameEml} placeholder={placeholderEml} />
            <Input type={typeNp} name={nameNp} placeholder={placeholderNp} />
            <Input type={typePss} name={namePss} placeholder={placeholderPss} />
        </WI>
    )
} 

export default WrapperInputRegistre;