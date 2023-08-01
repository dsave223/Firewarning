import styled from 'styled-components';

const AtmInput = styled.input `
${props => props.$nptlogin &&`
    width: 100%;
    box-sizing: border-box;
    border-radius: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    height: 6vh;
    text-align: left;
    border: 1px solid #F62825;
`}
${props => props.$nptregistre &&`
    width: 100%;
    box-sizing: border-box;
    border-radius: 15px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    height: 5vh;
    text-align: left;
    border: 1px solid #F62825;
`}
${props => props.$nptedit &&`
    width: 55%;
    box-sizing: border-box;
    border-radius: 15px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    height: 5vh;
    text-align: left;
    border: 1px solid #F62825;
`}
`;

function Input ({type, name, placeholder, nptlogin, nptregistre, nptedit}) {
    return <AtmInput type={type} name={name} placeholder={placeholder} $nptlogin={nptlogin} $nptregistre={nptregistre} $nptedit={nptedit}/>;
}

export default Input;