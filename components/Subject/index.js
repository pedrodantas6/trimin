import { Container, Avatar, Info } from './styles';
import Link from 'next/link';

export default function Subject({ subject }) {
  var link = '/temas/' + subject.subject.name.toLowerCase();
  console.log(link)
  return (
    <Link href={link}>
    
    
    <Container>
        <Avatar></Avatar>
      <Info>
      <a>{subject.subject.name}</a>
      <span>{subject.subject.disciplina}</span>
      </Info>
    </Container></Link>
  );
}