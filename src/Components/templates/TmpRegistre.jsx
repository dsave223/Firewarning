import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../organisms/ContentHeader";
import ContentRegistre from "../organisms/Registre/ContentRegistre";
import ImagenUno from "../../assets/img/FireLogin.svg";
import LogoFire from "../../assets/img/Logo2.svg"
import styled from "styled-components";

const Tr = styled.main`
background-color: white;
width: 90%;
justify-content: space-around;
align-items: center;
margin: 2% 0 0 0;
border-radius: 50px;
overflow: hidden;
height: 90vh;
`;

function Header () {
    return(
        <ContentHeader src={LogoFire} alt='FireWarning'/>
    )
}

function Main () {

    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = 'http://52.206.97.67:3000/event/create'


    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
    
        if(newForm.get("name") === "" || newForm.get("email") === "" || newForm.get("phone") === "" || newForm.get("password") === ""){//el simbolo de pesos despues se nombra la variable
            alert("campos vacios");
        }else{
            
        const options = {
    
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: newForm.get("name"),
            email: newForm.get("email"),
            phone: newForm.get("phone"),
            password: newForm.get("password"),
          }),
        };
        fetch(endPoint, options)
          .then((response) => response.json())
          .then((data) => {
            alert(JSON.stringify(data));
            if(data.status === true){
                navigate("/");
              }else{
                alert("No se agrego")
              }
          });
        }
      }

    return(
        <ContentRegistre title='¡Registrate Ahora!' typeNm='text' nameNm='name' placeholderNm='Nombre' typeEml='email' nameEml='email' placeholderEml='Correo Electronico' typeNp='tel' nameNp='phone' placeholderNp='Numero de Telefono' typePss='password' namePss='password' placeholderPss='contraseña' text='Registrate Ahora' onClick={handlerClick} to={'/'} txt='¿Ya tienes Cuenta?' link='Inicia Sesion' srcIm={ImagenUno} altIm='Imagen Uno' ttllogin nptregistre buttonlogin/>
    )
}

function TmpRegistre () {
    return(
        <Tr>
            <Header/>
            <Main/>
        </Tr>
    )
}

export default TmpRegistre;