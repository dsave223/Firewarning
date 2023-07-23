import ContentHeader from "../organisms/ContentHeader";
import ContentMonitoring from "../organisms/Monitoring/ContentMonitoring";
import SegurityIcon from "../../assets/img/securityIcon.svg";
import ImagenManual from "../../assets/img/imgenManual.svg";
import styled from "styled-components";

const Tm = styled.div`
background-color: white;
`;

function TmpMonitoring () {
    return (
        <Tm>
            <ContentHeader src='' alt='Imagen Perfil'/>
            <ContentMonitoring srcAlert={SegurityIcon} titleAlert='Segurity-Icon' tmpTitle='Temperatura' rLtitle='Nivel de Riesgo' subtitleTmp='Temperatura' txtTmp='' subtitleLevel='Riesgo' txtLevel='' srcBck={ImagenManual} altBck='Imagen Manual'/>
        </Tm>
    )
}

export default TmpMonitoring;