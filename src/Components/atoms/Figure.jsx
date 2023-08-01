import styled from "styled-components";

const AtmFigure = styled.div`
    height: 23vh;
    width: 31%;
    border-radius: 20px 0 0 20px;
    background-color: #FE4444;

    ${props => props.$figureone &&`
        height: 23vh;
        width: 31%;
       background-color: #FEC544; 
    `}
`;

function Figure ({figureone}) {
    return(
        <AtmFigure $figureone={figureone}></AtmFigure>
    )
}

export default Figure;