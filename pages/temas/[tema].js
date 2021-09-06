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
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const tema = context.params.tema;

    return {
        props: {
            tema: tema
        }
    }
}

function Temas(props) {
    return <div>O tema é: {props.tema}</div>
}

export default Temas;