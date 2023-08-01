import Header from "../organisms/Header";
import ContentProfile from "../organisms/Profile/ContentProfile";
import NotUser from "../../assets/img/user.svg"
import styled from "styled-components";

const Tp = styled.main`
background-color: white;
width: 88.9%;
justify-content: space-around;
align-items: center;
border-radius: 50px;
overflow: hidden;
height: 90vh;
`;

function ContentHeader () {
    return (
        <Header src={NotUser} alt='Not User'/>
    )
}

function ContentMain () {
    return (
        <ContentProfile subName='Nombre:' subEmail='Correo Electronico:' subPhone='Num. Telefono:' txtName='David Antonio Gomez Gonzalez' txtEmail='correo@correo.com' txtPhone='676-902-8712' src={NotUser} alt='Profile' imgregistre/>
    )
}

function TmpProfile () {
    return(
        <Tp>
            <ContentHeader/>
            <ContentMain/>
        </Tp>
    )
}

export default TmpProfile;