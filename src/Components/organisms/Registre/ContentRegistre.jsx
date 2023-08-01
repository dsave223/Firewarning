import DivisionTitle from "../../molecules/DivisionTitle";
import DivisionButton from "../../molecules/DivisonButton";
import WrapperLink from "../../molecules/WrapperLink";
import WrapperInputRegistre from "../../molecules/Registre/WrapperInputRegistre";
import WrapperImage from "../../molecules/WrapperImage";
import styled from "styled-components";

const Form = styled.form `
width: 100%;
display: flex;
height: 63vh;
.group-organisms{
    display: flex;
    flex-direction: column;
    margin: 0 0 0 7%;
    width: 25%;
    height: 50vh;
}
.group-imagen{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 50vh;
    margin: 2% 0 0 13%;
}
`;

function ContentRegistre ({buttonlogin, nptregistre, ttllogin, title, onClick, text, to, link, txt, typeNm, typeEml, typeNp, typePss, nameNm, nameEml, nameNp, namePss, placeholderNm, placeholderEml, placeholderNp, placeholderPss, srcIm, altIm}) {
    return(
        <Form>
            <div className="group-organisms">
                <DivisionTitle title={title} ttllogin={ttllogin}/>
                <WrapperInputRegistre typeNm={typeNm} nameNm={nameNm} placeholderNm={placeholderNm} typeEml={typeEml} nameEml={nameEml} placeholderEml={placeholderEml} typeNp={typeNp} nameNp={nameNp} placeholderNp={placeholderNp} typePss={typePss} namePss={namePss} placeholderPss={placeholderPss} nptregistre={nptregistre}/>
                <DivisionButton onClick={onClick} text={text} buttonlogin={buttonlogin}/>
                <WrapperLink to={to} link={link} txt={txt}/>
            </div>
            <div className="group-imagen">
                <WrapperImage src={srcIm} alt={altIm}/>
            </div>
        </Form>
    )
    
}

export default ContentRegistre;