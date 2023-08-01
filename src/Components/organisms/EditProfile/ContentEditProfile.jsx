import WrapperDataEdit from "../../molecules/EditProfile/WrapperDateEdit";
import WrapperImage from "../../molecules/WrapperImage";
import DivisionButton from "../../molecules/DivisonButton";
import styled from "styled-components";

const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
height: 73vh;
.group-image{
    height: 20vh;
    width: 100%;
}
.group-date{
    width: 100%;
    height: 35vh;
}
.group-button{
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row-reverse;
}
`;

function ContentEditProfile ({src, alt, subName, subEmail, subPhone,
    typeName, typeEmail, typePhone, placeholderName,
    placeholderEmail, placeholderPhone,
    nameUser, nameEmail, namePhone,
    onClick, text, nptregistre, buttonlogin, update, constentup}) {
    return(
        <Form>
            <div className="group-image">
                <WrapperImage src={src} alt={alt} imgeditwrapper imgedit/>
            </div>
            <div className="group-date">
                <WrapperDataEdit subName={subName} subEmail={subEmail} subPhone={subPhone}
                typeName={typeName} typeEmail={typeEmail} typePhone={typePhone}
                placeholderName={placeholderName} placeholderEmail={placeholderEmail} placeholderPhone={placeholderPhone}
                nameUser={nameUser} nameEmail={nameEmail} namePhone={namePhone}
                nptregistre={nptregistre}/>
            </div>
            <div className="group-button">
                <DivisionButton onClick={onClick} text={text}
                buttonlogin={buttonlogin} update={update} constentup={constentup}/>
            </div>
        </Form>
    )
}

export default ContentEditProfile;