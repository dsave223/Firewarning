import WrapperImage from "../../molecules/WrapperImage";
import WrapperTextProfile from "../../molecules/Profile/WrapperTextProfile";
import styled from "styled-components";

const Cp = styled.main ``;

function ContentProfile ({src, alt, name, address, email, phone, txtName, txtAddress, txtEmail, txtPhone}) {
    return(
        <Cp>
            <WrapperImage src={src} alt={alt}/>
            <WrapperTextProfile name={name} address={address} email={email} phone={phone} txtName={txtName} txtAddress={txtAddress} txtEmail={txtEmail} txtPhone={txtPhone} />
        </Cp>
    )
}

export default ContentProfile;