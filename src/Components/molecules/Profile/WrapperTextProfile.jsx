import SubTitle from "../../atoms/SubTitle";
import Text from "../../atoms/Text";
import styled from "styled-components";

const Wtp = styled.div``;

function WrapperTextProfile ({name, address, email, phone, txtName, txtAddress, txtEmail, txtPhone}) {
    return(
        <Wtp>
            <SubTitle subtitle={name} />
            <Text txt={txtName} />
            <SubTitle subtitle= {address} />
            <Text txt={txtAddress} />
            <SubTitle subtitle={email} />
            <Text txt={txtEmail} />
            <SubTitle subtitle={phone} />
            <Text txt={txtPhone} />
        </Wtp>
    )
}

export default WrapperTextProfile;