import ContentHeader from "../organisms/ContentHeader";
import ContentLogin from "../organisms/Login/ContentLogin";
import ImgFire from "../../assets/img/FireL.svg"
import LogoFire from "../../assets/img/Logo2.svg"
import styled from "styled-components";

const Tl = styled.div``;

function TmpLogin () {
    return(
        <Tl>
            <ContentHeader src={LogoFire} alt='FireWarning'/>
            <ContentLogin title='Iniciar Sesion' typeEml='email' nameEml='email' placeholderEml='Correo Electronico' typePss='password' namePss='password' placeholderPss='contraseña' onclick='' text='Iniciar Sesion' txt='¿No tienes una cuenta?' to='Crea una' srcIm={ImgFire} altIm='Imagen 1' />
        </Tl>
    )
}

export default TmpLogin