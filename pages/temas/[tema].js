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
        fallback: false
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
    switch (props.tema){
        case "porcentagem": 
            return <div>O tema é (pega o tema e acess aseu conteudo no banco de dados): {props.tema}</div>
        case "raiz":
            return <div>Raiz papito {props.tema}</div>
    }
}

export default Temas;