import Header from '../Header';
import Sidebar from '../Sidebar';
import User from '../User';
import { Container, SidebarContainer, ContentContainer } from './styles';

function Layout({ subjects }) {
    return (
        <>
            <Header></Header>
            <Container>
                
        <User></User>
                
      
      <SidebarContainer>{subjects.map((subject, index) => (
          <Sidebar key={index} subject={subject}></Sidebar>))}
                </SidebarContainer>
                {/* <ContentContainer>{children}</ContentContainer> */}
    </Container>
        </>
        )}


export default Layout;