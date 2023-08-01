import ContentHeader from "../organisms/ContentHeader";
import ContentLogin from "../organisms/Login/ContentLogin";
import ImgFire from "../../assets/img/FireL.svg"
import LogoFire from "../../assets/img/Logo2.svg"
import styled from "styled-components";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

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


function Header () {
    return (
        <>
            <ContentHeader src={LogoFire} alt='FireWarning'/>
        </>
    );
}

function Main () {

    const navigate = useNavigate();
    const formRef = useRef();
    const socket = io(""); // Reemplaza con la URL de tu servidor Socket.io

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
        alert(
            "Campos vacíos o algún campo falta por completar, revisa que todo esté en orden."
        );
        } else {
        // Enviar los datos al servidor a través de Socket.io
        socket.emit("login", { email, password });
        useEffect(() => {
            // Escucha el evento 'loginSuccess' enviado por el servidor
            socket.on("loginSuccess", () => {
            console.log("Inicio de sesión exitoso");
            alert("Inicio de sesión exitoso");
            // Redireccionar a la página "Home"
            navigate("/monitoring"); // Reemplaza '/home' con la ruta a tu página Home
            });
    
            // Escucha el evento 'loginError' enviado por el servidor
            socket.on("loginError", (errorMessage) => {
            console.log("Error al iniciar sesión:", errorMessage);
            alert("Error al iniciar sesión. Por favor, verifica tus credenciales.");
            });
    
            // Importante: Desconectar el socket cuando el componente se desmonte
            return () => {
            socket.disconnect();
            };
        }, [navigate]);
        }
    };
  
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