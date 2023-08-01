import "../../assets/css/TmpAH.css";
import styled from "styled-components";
import User from "../../assets/img/user.svg";
import BurgerButtom from "../atoms/BurgerButtom";
import ContentActivityHistory from "../organisms/ActivityHistory/ContentActivityHistory";

function TmpActivityHistory() {
   
    return (
       
          <div className="tmpAH">
            <NavContainer>
               <BurgerButtom/>
               <img src={User} alt="" className="userPerfil"/>
            </NavContainer>
            <ContentActivityHistory/>

          </div>
       
    );
}

export default TmpActivityHistory;

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