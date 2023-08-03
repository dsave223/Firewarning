import styled from "styled-components";
import Close from "../../assets/img/close.svg"
import Burger from "../../assets/img/menu.svg"

function BurgerButtom() {
  
    return ( 
        <Burguer>
            <nav className="nav container" id="nav">
                <ul className="nav_links">
                  <div className="containerLinks">
                    <li className="navItem">
                      <a href="" className="nav_link">Inicio</a>
                    </li>
                    <li className="navItem">
                      <a href="" className="nav_link">Perfil</a>
                    </li>
                    <li className="navItem">
                      <a href="" className="nav_link">Historial de Actividad</a>
                    </li>
                    <li className="navItem">
                      <a href="" className="nav_link">Menu Contra Incendios</a>
                    </li>
                    <li className="navItem">
                      <a href="" className="nav_link">Cerrar Sesión</a>
                    </li>
                  </div>
                </ul>
                <a href="#nav" className="navBurguer">
                  <img src={Burger} alt="" className="navIcon"/>
                </a>
                <a href="#" className="navClose">
                  <img src={Close} alt="" className="navIcon"/>
                </a>
            </nav>
        </Burguer>
     );
}

export default BurgerButtom;

const Burguer = styled.nav`
    .nav_links{
      border-radius: 50px 0px 0px 50px;
      background-color: #ffffff ;
      align-content: center;
      position: absolute;
      display: grid;
      height: 90vh;
      left: 11.5vh;
      width: 23%;
      bottom: 0;
      top: 3.3vh;
      gap: 5vh;

      transform: var(--state-menu);
      transition: .1s transform;
      
    }

    .nav_links::after{
      content: "";
      border-radius: 0px 50px 50px 0px;
      height: 90vh;
      width: 116.5vh;
      background-color: rgba(0,0,0, 0.2);
      position: absolute;
      left: 100%;
      
      transform: var(--state-shadow);
    }

    .navBurguer, .navClose{
      cursor: pointer;
        grid-column: -1/-2;
        grid-row: 2/1;
      transition: .4s transform;
    }

    .nav{
      --state-close: scale(0);
      --state-burguer: scale(1);
      --state-menu: translate(-200%);
      --state-shadow: translate(-300%);


      display: grid;
      grid-template-columns: repeat(2, max-content);
    }

    .navIcon{
      width: 50px;
    }

    .navBurguer{
      transform: var(--state-burguer);
    }

    .navClose{
      transform: var(--state-close);
    }

    .nav:target{
      --state-menu: translate(0);
      --state-shadow: translate(0);
      --state-close: scale(1);
      --state-burguer: scale(0);
    }

    .navItem{
      list-style: none;
      background-color: white;
      width: 70%;
      height: 4vh;
      border-radius: 15px;
      padding: 10px 10px 10px 30px;
      display: grid;
      align-content: center;
      box-shadow: 1px 7px 8px 3px rgba(0,0,0, 0.1);

    }

    .nav_link{
      font-family: Hind;
      text-decoration: none;
      color: black;
      font-size: 1.3rem;
    }

    .containerLinks{
      margin-bottom: 2vh;
      display: grid;
      gap: 4vh;
    }    
`;