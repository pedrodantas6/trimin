import Layout from '../components/Layout';
import SubjectContent from '../components/SubjectContent';
import { openDB } from '../lib/openDB';



function Home({ subjects }) {
    return <Layout subjects={subjects}>
        <SubjectContent subjects={subjects}>
        </SubjectContent>
        
    </Layout>
}


export async function getServerSideProps(context) {
    // implementar a busca dos dados no mongodb
    const db = await openDB();
    const data = await db.collection('temas').find().toArray();
    return {
        props: {
          subjects: JSON.parse(JSON.stringify(data)),
        }, // will be passed to the page component as props
      };
    }

export default Home