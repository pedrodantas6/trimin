import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 250px;
`;


export const SubjectsContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 0.5px solid rgba(22, 24, 35, 0.12);
  border-bottom: 0.5px solid rgba(22, 24, 35, 0.12);
  
`;

export const SubjectHeader = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: rgba(22, 24, 35, 0.5);
  height: 8px;
  padding-left: 16px;
  margin-bottom: 70px;
`;

export const SearchSubject = styled.input`
    width: 90%;
    padding-right: -16px;
    height: 50px;
    border-radius: 25px;
    background-color: rgba(22, 24, 35, 0.12);
    border: 0;
    outline: 0;
`;