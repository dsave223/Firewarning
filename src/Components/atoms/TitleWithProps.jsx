import styled from "styled-components"

function TitleWithProps({propsT2, propsT3, propsT4 , propsT5, propsT6, propsT7, msn, className}) {
    return ( 

        <TitleWP $propsT2={propsT2} $propsT3={propsT3} $propsT4={propsT4} $propsT5={propsT5} $propsT6={propsT6} $propsT7={propsT7} className={className}>{msn}</TitleWP>
     );
}

export default TitleWithProps;

const TitleWP = styled.h1`
  font-family:Hind;
  font-size: 1.5rem;
  font-weight: 100;

  ${props => props.$propsT2 && `
        font-size: 2.3rem;
  `}

  ${props => props.$propsT3 && `
        font-size: 1.6rem;
  `}
  ${props => props.$propsT4 && `
        font-size: 1rem;
  `}

  ${props => props.$propsT5 && `
        font-size: 1.3rem;
  `}

  ${props => props.$propsT6 && `
        font-size: 1rem;
        font-weight: Bold;
  `}

  ${props => props.$propsT7 && `
        font-size: 1.3rem;
        font-weight: Bold; 
  `}

`;