import Button from "../atoms/Button";
import styled from "styled-components";

const Wbtn = styled.div ``;

function DivisionButton ({onclick, text}) {
    return(
        <Wbtn>
            <Button onclick={onclick} text={text} />
        </Wbtn>

    )
}

export default DivisionButton;