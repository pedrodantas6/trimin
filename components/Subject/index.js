import { Container, Avatar, Info } from './styles';
import Link from 'next/link';

export default function Subject({ subject }) {

  return (
    <Link href={subject.subject.name.toLowerCase()}>
    
    
    <Container>
        <Avatar></Avatar>
      <Info>
      <a>{subject.subject.name}</a>
      <span>{subject.subject.disciplina}</span>
      </Info>
    </Container></Link>
  );
}