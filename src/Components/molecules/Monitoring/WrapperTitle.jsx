import SubTitle from "../../atoms/SubTitle";
import Led from "../../atoms/Led";
import styled from "styled-components";


const Wt = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    font-family: 'Inter', sans-serif;
    font-size: .5rem;
    font-weight: 300;
.group-title-one{
    display: flex;
    align-items: center;
    gap: 3vh;
}
`;

function WrapperTitle ({tmpTitle, rLtitle, mnltitle, propsLed2, propsLed3}) {
    return (
        <Wt>
            <div className="group-title-one">
                <Led/>
                <SubTitle subtitle={tmpTitle}/>
            </div>
            <div className="group-title-one">
                <Led propsLed2={propsLed2}/>
                <SubTitle subtitle={rLtitle}/>
            </div>
            <div className="group-title-one">
                <Led propsLed3={propsLed3}/>
                <SubTitle subtitle={mnltitle}/>
            </div>
        </Wt>
    )
}

export default WrapperTitle;