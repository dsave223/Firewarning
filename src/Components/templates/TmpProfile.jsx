import ContentHeader from "../organisms/ContentHeader";
import ContentProfile from "../organisms/Profile/ContentProfile";
import LogoFire from "../../assets/img/Logo2.svg"
import styled from "styled-components";

const Tp = styled.div`
background-color: white;
`;

function TmpProfile () {
    return(
        <Tp>
            <ContentHeader src={LogoFire} alt='FireWarning'/>
            <ContentProfile name='Nombre:' address='Diercción:' email='Correo:' phone='Numero de Telefono:' txtName='' txtAddress='' txtEmail='' txtPhone='' />
        </Tp>
    )
}

export default TmpProfile;