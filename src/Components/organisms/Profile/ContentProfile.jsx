import WrapperImage from "../../molecules/WrapperImage";
import WrapperTextProfile from "../../molecules/Profile/WrapperTextProfile";
import styled from "styled-components";

const Cp = styled.div `
width: 100%;
height: 63vh;
.group-image{
    width: 100%;
    height: 25vh;
}
.group-organisms{
    width: 100%;
}
`;

function ContentProfile ({src, alt, subName, subEmail, subPhone, txtName, txtEmail, txtPhone, imgregistre}) {
    return(
        <Cp>
            <div className="group-image">
                <WrapperImage src={src} alt={alt} imgregistre={imgregistre} imgwrapper/>
            </div>
            <div className="group-organisms">
                <WrapperTextProfile subName={subName} txtName={txtName} subEmail={subEmail} txtEmail={txtEmail} subPhone={subPhone} txtPhone={txtPhone}/>
            </div>
        </Cp>
    )
}

export default ContentProfile;