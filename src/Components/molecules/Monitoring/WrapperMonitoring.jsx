import Image from "../../atoms/Image";
import Figure from "../../atoms/Figure";
import SubTitle from "../../atoms/SubTitle";
import Text from "../../atoms/Text";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wm = styled.div``;

function WrapperMonitoring ({subtitleTmp, subtitleLevel, txtTmp, txtLevel, to, link, src, alt}) {
    return (
        <Wm>
            <div>
                <Figure/>
                <SubTitle subtitle={subtitleTmp}/>
                <Text txt={txtTmp}/>
            </div>
            <div>
                <Figure/>
                <SubTitle subtitle={subtitleLevel}/>
                <Text txt={txtLevel}/>
            </div>
            <div>
                <Image src={src} alt={alt}/>
                <Link to={to}>{link}</Link>
            </div>
        </Wm>
    )
}

export default WrapperMonitoring;