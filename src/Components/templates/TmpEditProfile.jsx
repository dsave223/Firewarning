import ContentEditProfile from "../organisms/EditProfile/ContentEditProfile";
import Header from "../organisms/Header";
import NotUser from "../../assets/img/user.svg"
import styled from "styled-components";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Tep = styled.div`
background-color: white;
width: 88.9%;
justify-content: space-around;
align-items: center;
border-radius: 50px;
overflow: hidden;
height: 90vh;
`;

function ContentHeader () {
    return(
        <Header/>
    )
}

function ContentMain () {
    const navigate = useNavigate();
    const formRef = useRef();
    /*const socket = io("");*/ // Reemplaza con la URL de tu servidor Socket.io

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const userName = formData.get("userName");
        const email = formData.get("email");
        const numberPhone = formData.get("numberPhone");

        if (!useName || !email || !numberPhone) {
        alert(
            "Campos vacíos o algún campo falta por completar, revisa que todo esté en orden."
        );
        } else {
        // Enviar los datos al servidor a través de Socket.io
        socket.emit("login", { userName, email, numberPhone});
        useEffect(() => {
            // Escucha el evento 'loginSuccess' enviado por el servidor
            socket.on("loginSuccess", () => {
            console.log("Inicio de sesión exitoso");
            alert("Inicio de sesión exitoso");
            // Redireccionar a la página "Home"
            navigate("/profile"); // Reemplaza '/home' con la ruta a tu página Home
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
        <ContentEditProfile  src={NotUser} alt='Imagen de perfil'
        subName='Nombre:' subEmail='Correo Electronico:' subPhone='Num. de Telefono:'
        typeName='text' typeEmail='email' typePhone='tel'
        placeholderName='Ejemplo Luis Alejandro' placeholderEmail='Ejemplo Correo@correo.com' placeholderPhone='Ejemplo 352 223 1234'
        nameUser='userName' nameEmail='email' namePhone='numberPhone' 
        onClick={handlerClick} text='Actualizar datos' nptregistre update constentup/>
    )
}

function TmpEditProfile () {
    return(
        <Tep>
            <ContentHeader/>
            <ContentMain/>
        </Tep>
    )
}

export default TmpEditProfile;