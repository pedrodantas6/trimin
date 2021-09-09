import Text from '../components/Text';
import { openDB } from '../lib/openDB';

export async function getStaticPaths() {
    return {
        paths: [{
            params: {
                tema: "porcentagem"
            }
        },{
            params: {
                tema: "raiz"
            }
        },{
            params: {
                tema: "virgula"
            }
        }],
        fallback: false
    }
}

// export async function getStaticProps(context) {
//     const tema = context.params.tema;

//     return {
//         props: {
//             tema: tema
//         }
//     }
// }

// function Temas(props) {
//     switch (props.tema){
//         case "porcentagem": 
//             return <div>O tema é (pega o tema e acess aseu conteudo no banco de dados): {props.tema}</div>
//         case "raiz":
//             return <div>Raiz papito {props.tema}</div>
//     }
// }

export async function getStaticProps(context) {
    const tema = context.params.tema;
    // implementar a busca dos dados no mongodb
    const db = await openDB();
    const data = await db.collection('temas').find().toArray();
    return {
        props: {
          subjects: JSON.parse(JSON.stringify(data)),
          tema: tema,

        }, // will be passed to the page component as props
      };
}

function Temas(props) {
    return (
        <>
            {/* tALVES USAR UM AWAIT PARA CORRIGIR O BUG DE TER QUE ATUALLIZAR A PAGINA PARA CARREGARN */}
                {props.subjects.map((subject, index) => (
                    <Text key={index} subject={subject} tema={props.tema}></Text>
          ))}  

        </>
        )}

export default Temas;