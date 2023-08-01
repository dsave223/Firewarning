import WrapperActivity from "../../molecules/Activity/WrapperActivity";
import TitleWithProps from "../../atoms/TitleWithProps";
import styled from "styled-components";
import WrappActv from "../../molecules/Activity/WrappActv";


function ContentActivity () {
    return(     
        <> 
            <ContActivity>
                <TitleWithProps msn="Actividad 00/00/00" className="dataActually"/>
                <div className="leds">
                    <WrappActv msn="Temperatura"/>
                    <WrappActv msn="Nivel de Riesgo" propsLed2/>
                </div>
                <div className="containerWrapp">
                    <WrapperActivity />
                </div>
            </ContActivity>        
        </>
    )
}

export default ContentActivity;

const ContActivity = styled.div`

    height:80% ;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 13vh;
    margin-top: -5vh;
    gap: 5vh;
    flex-direction: column;
    align-items: flex-start;


    .containerWrapp{

        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .dataActually{
        margin-left: 15vh;

    }

    .leds{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        gap: 40vh;

    }
`;