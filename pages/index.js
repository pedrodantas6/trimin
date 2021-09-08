import Layout from '../components/Layout';
import SubjectContent from '../components/SubjectContent';
function Home({ subjects }) {
    return <Layout subjects={subjects}>
        <SubjectContent></SubjectContent>
    </Layout>
}


export async function getServerSideProps(context) {
    const data = [
        {
            id: 1,
            subject: {id: 1, name: 'Porcentagem', disciplina: 'matematica'},
            text: 'o que é porcentagem?'
        },
        {
            id: 2,
            subject: {id: 2, name: 'Virgula vem do ingles suave', disciplina: 'portugues'},
            text: 'Quando usar a virgula?'
        }
    ]
    
    return{
        props: {
            subjects: data,
        },
    }
}

export default Home