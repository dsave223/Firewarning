import TmpProfile from "../templates/TmpProfile";
import styled from "styled-components";

const ContentProfile = styled.div`
margin-top: 3%;
display: flex;
justify-content: center;
align-items: center;
`;

function Profile () {
    return(
        <ContentProfile>
            <TmpProfile/>
        </ContentProfile>
    );
}

export default Profile;