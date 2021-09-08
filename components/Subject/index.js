import { Container, Avatar, Info } from './styles';

export default function Subject({ subject }) {
  return (
    <Container>
        <Avatar></Avatar>
      <Info>
      <a>{subject.subject.name}</a>
      <span>{subject.subject.disciplina}</span>
      </Info>
    </Container>
  );
}