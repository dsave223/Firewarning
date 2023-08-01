import styled from "styled-components";
import TmpEditProfile from "../templates/TmpEditProfile"

const ContentEditProfile = styled.div`
justify-content: center;
align-items: center;
display: flex;
`;

function EditProfile () {
    return(
        <ContentEditProfile>
            <TmpEditProfile/>
        </ContentEditProfile>
    )
}

export default EditProfile;