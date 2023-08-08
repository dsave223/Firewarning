import Header from "../organisms/Header";
import ContentMonitoring from "../organisms/Monitoring/ContentMonitoring";
import SegurityIcon from "../../assets/img/securityIcon.svg";
import NotUser from "../../assets/img/user.svg"
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const Tm = styled.main`
background-color: white;
width: 88.9%;
justify-content: space-around;
align-items: center;
border-radius: 50px;
overflow-y: hidden;
height: 90vh;
`;

function ContentHeader () {
    return (
        <Header src={NotUser} alt='Imagen Perfil'/>
    )
}

function ContentMain () {
    return(
        <ContentMonitoring srcAlert={SegurityIcon} titleAlert='Todo Seguro' tmpTitle='Temperatura y humedad' rLtitle='Nivel de MC' mnltitle='Manual' subtitleTmp='Temperatura / Humedad' txtTmp={temperature} subtitleLevel='Monoxido de Carbono' txtLevel='8900 CO' to={'/manuel'} link='Manual de Prevencion de Incendio' propsLed2 propsLed3 figureone/>   
    )
}

function TmpMonitoring ({user}) {

    if(!user){
        return <Navigate to="/login"/>
    }

    return (
        <Tm>
            <ContentHeader/>
            <ContentMain/>
        </Tm>
    )
}

export default TmpMonitoring;