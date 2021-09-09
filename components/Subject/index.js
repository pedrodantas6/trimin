
import { Container, Avatar, Info } from './styles';
import Link from 'next/link';
var n;
var d;
var name;export function search(tit){
  name = tit;
}

export default function Subject({ subject }) {
  n ='';
  d='';
  if(subject.subject.name.indexOf(name)>-1){
    n= subject.subject.name;
    d= subject.subject.disciplina;
  }

  if(n== ''){
  return null;
  }else{
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
}