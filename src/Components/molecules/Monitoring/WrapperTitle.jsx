import SubTitle from "../../atoms/SubTitle";
import Figure from "../../atoms/Figure";
import styled from "styled-components";


const Wt = styled.div``;

function WrapperTitle ({tmpTitle, rLtitle}) {
    return (
        <Wt>
            <div>
                <Figure/>
                <SubTitle subtitle={tmpTitle}/>
            </div>
            <div>
                <Figure/>
                <SubTitle subtitle={rLtitle}/>
            </div>
        </Wt>
    )
}

export default WrapperTitle;