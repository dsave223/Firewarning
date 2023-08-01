import Button from "../atoms/Button";
import styled from "styled-components";

const Wbtn = styled.div `
${props => props.$constentup &&`
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
`}
`;

function DivisionButton ({onClick, text, buttonlogin, update, constentup}) {
    return(
        <Wbtn $constentup={constentup}>
            <Button onClick={onClick} text={text} buttonlogin={buttonlogin} update={update}/>
        </Wbtn>

    )
}

export default DivisionButton;