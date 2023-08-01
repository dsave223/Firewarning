import SubTitle from "../../atoms/SubTitle";
import Input from "../../atoms/Input";
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
    width: 50%;
    height: 35vh;
    gap: 1vh;
    margin: 0 0 0 0;
}
.constent-inputs{
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 35vh;
    gap: 4vh;
    margin: 0 0 0 0;
}
`;

function WrapperDataEdit ({subName, subEmail, subPhone, nameUser, nameEmail, namePhone, typeName, typeEmail, typePhone, placeholderName, placeholderEmail, placeholderPhone, nptedit}) {
    return(
        <Wtp>
            <div className="constent-titles">
                <SubTitle subtitle={subName} subtitlelogin subtitleup/>
                <SubTitle subtitle={subEmail} subtitlelogin subtitleup/>
                <SubTitle subtitle={subPhone} subtitlelogin subtitleup/>
            </div>
            <div className="constent-inputs">
                <Input type={typeName} name={nameUser} placeholder={placeholderName} nptedit/>
                <Input type={typeEmail} name={nameEmail} placeholder={placeholderEmail} nptedit/>
                <Input type={typePhone} name={namePhone} placeholder={placeholderPhone} nptedit/>
            </div>
        </Wtp>
    )
}

export default WrapperDataEdit;