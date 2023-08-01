import styled from "styled-components";
import TmpMonitoring from "../templates/TmpMonitoring";

const Mnt = styled.div`
    margin-top: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Monitoring () {
    return(
        <Mnt>
            <TmpMonitoring/>
        </Mnt>
    )
}

export default Monitoring;