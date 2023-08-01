import "../../assets/css/TmpA.css";
import User from "../../assets/img/user.svg";
import BurgerButtom from "../atoms/BurgerButtom";
import ContentActivity from "../organisms/Activiy/ContentActivity";
import styled from "styled-components";



function TmpActivity () {
    return (
        <div className="tmpA">
            <NavContainer>
               <BurgerButtom/>
               <img src={User} alt="" className="userPerfil"/>
            </NavContainer>
            <ContentActivity/>
        </div>
    )
}

export default TmpActivity;


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