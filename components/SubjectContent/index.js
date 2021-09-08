import { Container } from "./styles";

function SubjectContent ({subject}) {
    return (
        <Container>
            <a>{subject.subject.name}</a>
      <span>{subject.subject.disciplina}</span>
        </Container>
    )
}

export default SubjectContent;