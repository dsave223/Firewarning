import styled from "styled-components"

function ContentActivityHistory() {
    return ( 
        <ContHistory>
            <h1>Historial de Actividad</h1>
            <div className="containerHis">

            </div>
        </ContHistory>
     );
}

export default ContentActivityHistory;

const ContHistory = styled.div`
    h1{
        font-family: Hind;
        margin-top: 6%;
        margin-right: 50%;
        font-weight: 100;
    }
    display: flex;
    justify-content: center;
`;