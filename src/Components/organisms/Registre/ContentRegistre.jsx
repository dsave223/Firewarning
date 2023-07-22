import DivisionTitle from "../../molecules/DivisionTitle";
import DivisionButton from "../../molecules/DivisonButton";
import WrapperLink from "../../molecules/WrapperLink";
import WrapperInputRegistre from "../../molecules/Registre/WrapperInputRegistre";
import WrapperImage from "../../molecules/WrapperImage";
import styled from "styled-components";

const ML = styled.main `
`;

function ContentRegistre ({title, onclick, text, to, link, txt, typeNm, typeEml, typeNp, typePss, nameNm, nameEml, nameNp, namePss, placeholderNm, placeholderEml, placeholderNp, placeholderPss, srcIm, altIm}) {
    return(
        <ML>
            <DivisionTitle title={title} />
            <WrapperInputRegistre typeNm={typeNm} nameNm={nameNm} placeholderNm={placeholderNm} typeEml={typeEml} nameEml={nameEml} placeholderEml={placeholderEml} typeNp={typeNp} nameNp={nameNp} placeholderNp={placeholderNp} typePss={typePss} namePss={namePss} placeholderPss={placeholderPss}/>
            <DivisionButton onclick={onclick} text={text} />
            <WrapperLink to={to} link={link} txt={txt}/>
            <WrapperImage src={srcIm} alt={altIm}/>
        </ML>
    )
    
}

export default ContentRegistre;