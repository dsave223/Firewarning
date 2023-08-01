import SubTitle from "../../atoms/SubTitle";
import Text from "../../atoms/Text";
import Figure from "../../atoms/Figure";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../assets/css/WrapperMonitoring.css"

const Wm = styled.div`
    display: flex;
    width: 100%;
    margin: 4% 0 0 0;
    justify-content: center;
    gap: 15vh;
    align-items: center;
    .group-title-date{
        font-family: 'Inter', sans-serif;
        font-size: .6rem;
        font-weight: 300;
        margin: 0;
        border-radius: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        width: 23%;
        height: 23vh;
        color: #333333;
        box-shadow: 0px 5px 15px 0px rgb(0, 0, 0);
    }
    .data-monitoring{
        text-align: center;
        height: 23vh;
        width: 100%;
        border-radius: 0 20px 20px 0;
        display: flex;
        flex-direction: column;
    }
    .group-title-manual{
        display: flex;
        width: 23%;
        text-decoration: none;
        border-radius: 20px;
        height: 23vh;
        align-items: center;
        box-shadow: 0px 5px 15px 0px rgb(0, 0, 0);
    }
    .link{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-weight: bold;
            text-decoration: none;
            color: white;
            font-family: 'Inter', sans-serif;
            font-size: 1.3rem;
        }
`;

function WrapperMonitoring ({subtitleTmp, subtitleLevel, txtTmp, txtLevel, to, link, figureone, txtmd}) {
    return (
        <Wm>
            <div className="group-title-date">
                <Figure/>
                <div className="data-monitoring">
                    <SubTitle subtitle={subtitleTmp}/>
                    <Text txt={txtTmp} txtmd={txtmd}/>   
                </div>
            </div>
            <div className="group-title-date">
                <Figure figureone={figureone}/>
                <div className="data-monitoring">
                    <SubTitle subtitle={subtitleLevel}/>
                    <Text txt={txtLevel} txtmd={txtmd}/>
                </div>
            </div>
            <div className="group-title-manual">
                <Link to={to} className="link">{link}</Link>
            </div>
        </Wm>
    )
}

export default WrapperMonitoring;