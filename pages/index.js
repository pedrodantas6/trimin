import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Home</h1>
        <Link href="/sobre">
            <a>Acessar página Sobre</a>
        </Link>
        <Link href="/temas/raiz">
            <a>Raiz</a>
        </Link>
        <Link href="/temas/raiz">
            <a>Raiz</a>
        </Link>
    </div>)
}

export default Home