import { Container, SubjectsContainer, SubjectHeader, SearchSubject } from './styles';
import Subject from '../Subject';
  
function Sidebar ({subjects}) {
    return (
        <Container>
        <SubjectsContainer>
        <SubjectHeader>
          <SearchSubject type="text" placeholder="Pesquise Pelo Tema Desejado"></SearchSubject>
        </SubjectHeader>
        {subjects.map((subject, index) => (
                    <Subject key={index} subject={subject}></Subject>
          ))}
      </SubjectsContainer>
        </Container>
    );
  }
  
  export default Sidebar;