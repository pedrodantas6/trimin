import { Container, MenuItem, Subject, SubjectHeader, InfoContainer, Links } from './styles';
  
function Sidebar ({ subject }) {
    return (
        <Container>
        <MenuItem active>
          <span>Aprender</span>
        </MenuItem>
        <MenuItem>
          <span>Redações</span>
        </MenuItem>
        <Subject>
        <SubjectHeader>Disciplinas</SubjectHeader>
        <div>{subject.subject.disciplina}</div>
      </Subject>

        <InfoContainer>
          <Links margin>
            <a>Início</a>
            <a>Sobre</a>
            <a>Sala de imprensa</a>
            <a>Carreira</a>
            <a>ByteDance</a>
          </Links>
          <Links>
            <a>Ajuda</a>
            <a>Segurança</a>
          </Links>
          <Links>
            <a>Diretrizes da comunidade</a>
            <a>Termos</a>
          </Links>
          <Links margin>
            <a>Privacidade</a>
          </Links>
          <Links margin>
            <a>© 2020 TikTok</a>
          </Links>
        </InfoContainer>
        </Container>
    );
  }
  
  export default Sidebar;