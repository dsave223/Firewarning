import TmpActivityHistory from "../templates/TmpActivityHistory";
import styled from "styled-components"
    
function ActivityHistory() {
    
    return ( 
        <PAH>
            <TmpActivityHistory/>
        </PAH>
     );
}

export default ActivityHistory;

const PAH = styled.div`
        margin-top: 3%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    `;