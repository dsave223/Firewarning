import SubTitle from "../../atoms/SubTitle";
import Text from "../../atoms/Text";
import styled from "styled-components";

const Wtp = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
.constent-titles{
    display: flex;
    align-items: normal;
    flex-direction: column;
    width: 20%;
    height: 39vh;
    gap: 2vh;
    margin: 0 0 0 10%;
}
.constent-texts{
    font-family: 'Inter', sans-serif;
    display: flex;
    align-items: normal;
    flex-direction: column;
    width: 25%;
    height: 39vh;
    gap: 3vh;
    margin: 0 0 0 10%;
}
`;

function WrapperTextProfile ({subName, subEmail, subPhone, txtName, txtEmail, txtPhone}) {
    return(
        <Wtp>
            <div className="constent-titles">
                <SubTitle subtitle={subName} subtitlelogin/>
                <SubTitle subtitle={subEmail} subtitlelogin/>
                <SubTitle subtitle={subPhone} subtitlelogin/>
            </div>
            <div className="constent-texts">
                <Text txt={txtName}/>
                <Text txt={txtEmail}/>
                <Text txt={txtPhone}/>
            </div>
        </Wtp>
    )
}

export default WrapperTextProfile;