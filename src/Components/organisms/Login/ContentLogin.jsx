import WrapperInputLogin from "../../molecules/Login/WrapperInputLogin";
import DivisionTitle from "../../molecules/DivisionTitle";
import DivisionButton from "../../molecules/DivisonButton";
import WrapperLink from "../../molecules/WrapperLink";
import WrapperImage from "../../molecules/WrapperImage";
import styled from "styled-components";

const Form = styled.form`
width: 100%;
display: flex;
margin-top: 2%;
height: 63vh;
.group-content{
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

function ContentLogin ({title, onClick, text, txt, to, link, srcIm, altIm, typeEml, typePss, placeholderEml, placeholderPss, nameEml, namePss, buttonlogin, ttllogin, img, nptlogin, txtlogin}) {
    return(
        <Form>
            <div className="group-content">
                <DivisionTitle title={title} ttllogin={ttllogin}/>
                <WrapperInputLogin typeEml={typeEml} nameEml={nameEml} placeholderEml={placeholderEml} typePss={typePss} namePss={namePss} placeholderPss={placeholderPss} nptlogin={nptlogin}/>
                <DivisionButton onClick={onClick} text={text} buttonlogin={buttonlogin}/>
                <WrapperLink to={to} link={link} txt={txt} txtlogin={txtlogin}/>
            </div>
            <div className="group-imagen">
                <WrapperImage src={srcIm} alt={altIm} img={img}/>
            </div>
        </Form>
    )
}

export default ContentLogin;