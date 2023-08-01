import styled from "styled-components";

function Led({propsLed2, propsLed3}) {
    return ( 
        <>
            <WpA $propsLed2={propsLed2} $propsLed3={propsLed3}/>
        </>
     );
}

export default Led;

const WpA = styled.div`
    height: 15px;
    width: 20px;
    background-color: #FE4444;

    ${props => props.$propsLed2 &&`
       background-color: #FEC544; 
    `}
    ${props => props.$propsLed3 &&`
       background-color: #44a4fe; 
    `}
`;
