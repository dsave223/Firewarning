import "../../assets/css/TmpM.css";
import User from "../../assets/img/user.svg";
import BurgerButtom from "../atoms/BurgerButtom";
import styled from "styled-components";
import ContentManual from "../organisms/Manual/ContentManual";

function TmpManual() {
    return ( 
        <div className="tmpM">
            <NavContainer>
                <BurgerButtom/>
                <img src={User} alt="" className="userPerfil"/>
            </NavContainer>
            <ContentManual/>
        </div>

     );
}

export default TmpManual;

const NavContainer = styled.nav`
    justify-content: space-around;
    align-items: center;
    display: flex;
    gap: 95vh;
    margin-top: 6vh;

   .userPerfil{
      height: 50px;
   }  
`;