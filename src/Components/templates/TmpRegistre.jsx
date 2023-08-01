import ContentHeader from "../organisms/ContentHeader";
import ContentRegistre from "../organisms/Registre/ContentRegistre";
import ImagenUno from "../../assets/img/FireLogin.svg";
import LogoFire from "../../assets/img/Logo2.svg"
import styled from "styled-components";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

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
    const formRef = useRef();
    const socket = io(""); // Reemplaza con la URL de tu servidor Socket.io

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const email = formData.get("email");
        const password = formData.get("password");

        if (!userName || !email || !adress || !password) {
        alert(
            "Campos vacíos o algún campo falta por completar, revisa que todo esté en orden."
        );
        } else {
        // Enviar los datos al servidor a través de Socket.io
        socket.emit("registre", { userName, email, adress, password });
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
        <ContentRegistre title='¡Registrate Ahora!' typeNm='text' nameNm='userName' placeholderNm='Nombre' typeEml='email' nameEml='email' placeholderEml='Correo Electronico' typeNp='tel' nameNp='numberPhone' placeholderNp='Numero de Telefono' typePss='password' namePss='password' placeholderPss='contraseña' text='Registrate Ahora' onClick={handlerClick} to={'/'} txt='¿Ya tienes Cuenta?' link='Inicia Sesion' srcIm={ImagenUno} altIm='Imagen Uno' ttllogin nptregistre buttonlogin/>
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