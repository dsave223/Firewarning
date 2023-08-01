import styled from "styled-components";
import TitleWithProps from "../../atoms/TitleWithProps";


function WrapperActivity() {
    return(
        <>
            <WrpCard >
                <div className="cardColor"></div>
                <div className="texts">
                    <TitleWithProps msn="Temperatura"/>
                    <TitleWithProps propsT2 msn="0°"/>
                </div>

            </WrpCard> 
            <WrpCard >
                <div className="cardColor2"></div>
                <div className="texts">
                <TitleWithProps msn="Nivel de Riesgo"/>
                    <TitleWithProps propsT3 msn="Sin riesgo"/>
                </div>
            </WrpCard>          
        </>
    )
}

export default WrapperActivity;


const WrpCard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3vh;
    height: 20vh;
    width: 40vh;
    background-color: white;
    border-radius: 20px;
    box-shadow:  rgba(0,0,0,0.1) 4px 5px 7px 2px;
    overflow: hidden;

    .cardColor{
        height: 100%;
        width: 25%;
        background-color: #FE4444;
    }

    .cardColor2{
        height: 100%;
        width: 25%;
        background-color: #FEC544; 
    }

    .texts{
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 80%;
    }
    
`;