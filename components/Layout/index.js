import Header from '../Header';
import Sidebar from '../Sidebar';
import SubjectContent from '../SubjectContent';
import { Container, SidebarContainer, ContentContainer } from './styles';

function Layout({ subjects }) {
    return (
        <>
            <Header></Header>
            <Container> 
            <SidebarContainer>
          <Sidebar subjects={subjects}></Sidebar>
                </SidebarContainer>
                <ContentContainer>
                    {/* selecionar o texto do objeto que comtem o id do escolhido da sidebar */}
                {subjects.map((subject, index) => (
                    <SubjectContent key={index} subject={subject}></SubjectContent>
          ))}  
                </ContentContainer>
    </Container>
        </>
        )}


export default Layout;