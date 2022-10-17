import Container from "../components/NavBar";
import Mascotas from "../components/Mascotas";
import mascotas from "../mascotas.json";
const Home=()=>{
    return(
        <Container>
            <h3 className="display-5">Mascotas</h3>
            <p>Pequeña idea ajajaj:
                Estaria chido hacer una api justamente de animales que
                guardara, modifique, elimine y añada nuevas mascotas.
                Ya la tengo en desarrollo: <a href="https://github.com/Edgarsc0/api-pets">Prototipo API </a>
                Pero por cuestiones se der claramente un prototipo no aun no la implemento.
            </p>
            <hr></hr>
            <Mascotas mascotas={mascotas}/>
        </Container>
    )
}
export default Home;