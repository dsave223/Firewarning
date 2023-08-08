import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import ContentHeader from "../organisms/ContentHeader";
import ContentLogin from "../organisms/Login/ContentLogin";
import ImgFire from "../../assets/img/FireL.svg"
import LogoFire from "../../assets/img/Logo2.svg"
import styled from "styled-components";

const Login = styled.div`
background-color: white;
width: 90%;
justify-content: space-around;
align-items: center;
margin: 2% 0 0 0;
border-radius: 50px;
overflow: hidden;
height: 90vh;
gap: 95vh;
`;

const socket = io(""); // Reemplaza con la URL de tu servidor Socket.io

function Header () {
    return (
        <>
            <ContentHeader src={LogoFire} alt='FireWarning'/>
        </>
    );
}

function Main () {

    const navigate = useNavigate();
    const Form = useRef();
    const endPoint = 'http://52.206.97.67:3000/event/create'


    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
    
        if(newForm.get("email") === "" || newForm.get("password") === ""){//el simbolo de pesos despues se nombra la variable
            alert("Campos vacios, o algun caracter invalido.");
        }else{
            
        const options = {
    
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            email: newForm.get("email"),
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
        <>
           <ContentLogin title='Iniciar Sesion' typeEml='email' nameEml='email' placeholderEml='Correo Electronico' typePss='password' namePss='password' placeholderPss='Contraseña' onClick={handlerClick} text='Iniciar Sesion' txt='¿No tienes una cuenta?' to={'/registre'} link='Crea una' srcIm={ImgFire} altIm='Imagen 1' buttonlogin ttllogin img nptlogin txtlogin/>
        </>
    );
}

function TmpLogin () {
    return (
        <Login>
            <Header/>
            <Main/>
        </Login>
    );
}

export default TmpLogin;