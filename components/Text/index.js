import { Container } from "./styles";
var n = ''
var t = 0;
function SubjectContent (props) {

    if(props.subject.subject.name === props.tema && t != 1){
        n= props.subject.subject.name;
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