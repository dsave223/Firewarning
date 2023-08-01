import styled from "styled-components";
import TmpLogin from "../templates/TmpLogin";

const ConstentLogin = styled.div`
justify-content: center;
align-items: center;
display: flex;
`;

function Login () {
    return(
        <ConstentLogin>
            <TmpLogin/>
        </ConstentLogin>
    )
}

export default Login;