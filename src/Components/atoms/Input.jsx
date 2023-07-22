import styled from 'styled-components';

const AtmInput = styled.input ``;

function Input ({type, name, placeholder}) {
    return <AtmInput type={type} name={name} placeholder={placeholder} />;
}

export default Input;