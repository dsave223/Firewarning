import WrapperAlert from "../../molecules/Monitoring/WrapperAlert";
import WrapperTitle from "../../molecules/Monitoring/WrapperTitle";
import WrapperMonitoring from "../../molecules/Monitoring/WrapperMonitoring";
import styled from "styled-components";

const Cfm = styled.main``;

function ContentMonitoring ({srcAlert, srcBck, altAlert, altBck, titleAlert, tmpTitle, rLtitle, subtitleTmp, subtitleLevel, txtTmp, txtLevel, to, link}) {
    return(
        <Cfm>
            <WrapperAlert src={srcAlert} alt={altAlert} title={titleAlert}/>
            <WrapperTitle tmpTitle={tmpTitle} rLtitle={rLtitle}/>
            <WrapperMonitoring subtitleTmp={subtitleTmp} txtTmp={txtTmp} subtitleLevel={subtitleLevel} txtLevel={txtLevel} src={srcBck} alt={altBck} to={to} link={link}/>
        </Cfm>
    )
}

export default ContentMonitoring;