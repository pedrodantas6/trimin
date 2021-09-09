import { Container } from "./styles";
import Link from "next/dist/client/link";
var n;

function SubjectContent (props) {
    n = '';
    if(props.subject.subject.name === props.tema){
        n= props.subject.subject.name;
    }
    return (
        <Container>
            <Link href="/"><a>{n}</a></Link>
        </Container>
    )
}

export default SubjectContent