import WrapperAlert from "../../molecules/Monitoring/WrapperAlert";
import WrapperTitle from "../../molecules/Monitoring/WrapperTitle";
import WrapperMonitoring from "../../molecules/Monitoring/WrapperMonitoring";
import styled from "styled-components";

const Cfm = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

function ContentMonitoring ({srcAlert, altAlert, titleAlert, tmpTitle, rLtitle, mnltitle, subtitleTmp, subtitleLevel, txtTmp, txtLevel, to, link, propsLed2, propsLed3, figureone}) {
    return(
        <Cfm>
            <WrapperAlert src={srcAlert} alt={altAlert} title={titleAlert}/>
            <WrapperTitle tmpTitle={tmpTitle} rLtitle={rLtitle} mnltitle={mnltitle} propsLed2={propsLed2} propsLed3={propsLed3}/>
            <WrapperMonitoring subtitleTmp={subtitleTmp} txtTmp={txtTmp} subtitleLevel={subtitleLevel} txtLevel={txtLevel} to={to} link={link} figureone={figureone} txtmd/>
        </Cfm>
    )
}

export default ContentMonitoring;