import WrapperInputLogin from "../../molecules/Login/WrapperInputLogin";
import DivisionTitle from "../../molecules/DivisionTitle";
import DivisionButton from "../../molecules/DivisonButton";
import WrapperLink from "../../molecules/WrapperLink";
import WrapperImage from "../../molecules/WrapperImage";
import styled from "styled-components";

const Cl = styled.main``;

function ContentLogin ({title, onclick, text, txt, to, srcIm, altIm, typeEml, typePss, placeholderEml, placeholderPss, nameEml, namePss }) {
    return(
        <Cl>
            <DivisionTitle title={title} />
            <WrapperInputLogin typeEml={typeEml} nameEml={nameEml} placeholderEml={placeholderEml} typePss={typePss} namePss={namePss} placeholderPss={placeholderPss}/>
            <DivisionButton onclick={onclick} text={text} />
            <WrapperLink txt={txt} to={to} />
            <WrapperImage src={srcIm} alt={altIm}/>
        </Cl>
    )
}

export default ContentLogin;