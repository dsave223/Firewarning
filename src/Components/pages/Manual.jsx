import styled from "styled-components"
import TmpManual from "../templates/TmpManual";

function Manual() {
    return ( <>
            <PA>
                <TmpManual/>
            </PA>
        </> );
}

export default Manual;

const PA = styled.div`
        margin-top: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
`;