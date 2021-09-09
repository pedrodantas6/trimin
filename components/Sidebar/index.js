import { Container, SubjectsContainer, SubjectHeader, SearchSubject } from './styles';
import Subject from '../Subject';
import {search} from '../Subject';
import React, {useState} from 'react';
  
function Sidebar ({subjects}) {
  const [title, setTitle] = useState('');
    return (
        <Container>
        <SubjectsContainer>
        <SubjectHeader>
          <SearchSubject type="text" placeholder="Pesquise Pelo Tema Desejado" onChange={event => setTitle(event.target.value)} onKeyUp={search(title)}></SearchSubject>
        </SubjectHeader>
        {subjects.map((subject, index) => (
                    <Subject key={index} subject={subject}></Subject>
          ))}
      </SubjectsContainer>
        </Container>
    );
  }
  
  export default Sidebar;