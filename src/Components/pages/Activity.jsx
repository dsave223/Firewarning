import TmpActivity from "../templates/TmpActivity";
import styled from "styled-components"

function Activity () {
    return(
        <PA>
            <TmpActivity/>
        </PA>
    )
}

export default Activity;

const PA = styled.div`
        margin-top: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    `;