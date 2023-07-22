import ContentHeader from "../organisms/ContentHeader";
import ContentRegistre from "../organisms/Registre/ContentRegistre";
import ImagenUno from "../../assets/img/FireLogin.svg";
import LogoFire from "../../assets/img/Logo2.svg"
import styled from "styled-components";

const Tr = styled.div`
background-color: white;
`;

function TmpRegistre () {
    return(
        <Tr>
            <ContentHeader src={LogoFire} alt='FireWarning'/>
            <ContentRegistre title='¡Registrate Ahora!' typeNm='text' nameNm='userName' placeholderNm='Nombre' typeEml='email' nameEml='email' placeholderEml='Correo Electronico' typeNp='phone' nameNp='Numberphone' placeholderNp='Numero de Telefono' typePss='password' namePss='password' placeholderPss='contraseña' text='Registrate Ahora' onclick='' to='Inicia Sesion' txt='¿Ya tienes Cuenta?' link='Inicia Sesion' srcIm={ImagenUno} altIm='Imagen Uno' />
        </Tr>
    )
}

export default TmpRegistre;