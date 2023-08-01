import styled from "styled-components";

const AtmButton = styled.button `
${props => props.$buttonlogin &&`
    width: 100%;
    background-color: #F62825;
    color: white;
    border-radius: 20px;
    border: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;  
    height: 6vh;
`}
${props => props.$update &&`
    width: 54%;
    background-color: #F62825;
    color: white;
    border-radius: 20px;
    border: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;  
    height: 6vh;
`}
`;

function Button ({text, onClick, buttonlogin, update}) {
    return <AtmButton type='button' onClick={onClick} $buttonlogin={buttonlogin} $update={update}>{text}</AtmButton>;
}

export default Button;