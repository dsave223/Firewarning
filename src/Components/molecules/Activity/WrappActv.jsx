import TitleWithProps from "../../atoms/TitleWithProps";
import Led from "../../atoms/Led";
import styled from "styled-components";

function WrappActv({msn, propsLed2}) {
    return ( 
        <LeDTX>
            <Led propsLed2={propsLed2}/>
            <TitleWithProps propsT4 msn={msn}/>
        </LeDTX>
     );
}

export default WrappActv;

const LeDTX = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  text-align: center;

`;