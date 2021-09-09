import { Container } from "./styles";
var n = ''
var t = 0;
function SubjectContent ({subject}) {
    if(subject.subject.name === 'Porcentagem' && t != 1){
        n= subject.subject.name;
        t = 1;
    } else{
        n= ''
    }
    return (
        <Container>
            <a>{n}</a>
        </Container>
    )
}

export default SubjectContent;