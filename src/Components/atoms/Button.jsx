import styled from "styled-components";

const AtmButton = styled.button ``;

function Button ({text, onclick}) {
    return <AtmButton type='button' onclick={onclick}>{text}</AtmButton>;
}

export default Button;