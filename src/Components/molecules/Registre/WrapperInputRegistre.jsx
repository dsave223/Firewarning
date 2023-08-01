import Input from "../../atoms/Input";
import styled from "styled-components";

const WI = styled.div `
display: flex;
flex-direction: column;
gap: 4vh;
width: 100%;
margin: 0 0 11% 0;
`;

function WrapperInputRegistre ({nptregistre, nptlogin, typeNm, typeEml, typeNp, typePss, nameNm, nameEml, nameNp, namePss, placeholderNm, placeholderEml, placeholderNp, placeholderPss}) {
    return(
        <WI>
            <Input type={typeNm} name={nameNm} placeholder={placeholderNm} nptlogin={nptlogin} nptregistre={nptregistre}/>
            <Input type={typeEml} name={nameEml} placeholder={placeholderEml} nptlogin={nptlogin} nptregistre={nptregistre}/>
            <Input type={typeNp} name={nameNp} placeholder={placeholderNp} nptlogin={nptlogin} nptregistre={nptregistre}/>
            <Input type={typePss} name={namePss} placeholder={placeholderPss} nptlogin={nptlogin} nptregistre={nptregistre}/>
        </WI>
    )
} 

export default WrapperInputRegistre;