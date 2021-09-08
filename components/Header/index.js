import { Container, Content, LogotipoContainer, Logotipo, OptionsContainer } from "./styles";
import User from "../User";

function Header() {
    return (
        <Container>
            <Content>
                <LogotipoContainer>
                    <Logotipo>Trimin/Facilitando o aprendizado</Logotipo>
                </LogotipoContainer>
                <OptionsContainer>

                </OptionsContainer>
            </Content>
        </Container>
    )
}

export default Header;