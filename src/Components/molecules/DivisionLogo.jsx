import Logo from "../atoms/Logo";
import styled from "styled-components";

const Dl = styled.div``;

function DivisionLogo ({src, alt}) {
    return(
        <Logo src={src} alt={alt} />
    )
}

export default DivisionLogo;