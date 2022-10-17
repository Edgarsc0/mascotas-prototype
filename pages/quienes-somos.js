import Container from "../components/NavBar"

const about=()=>{
    return(
        <Container>
            <hr></hr>
            <div className="row" style={{textAlign: "justify"}}>
                <div className="col">
                    <h3>La empresa</h3>
                    <p>La adopción de animales es el proceso de tomar la responsabilidad de un animal que un dueño previamente ha abandonado o dejado en un refugio de animales.
                    <br></br>
                    <br></br>
                    Existe un gran número de lugares donde se puede adoptar, tanto lugares físicos, como los refugios, como por internet, estos sitios web tienen bases de datos de mascotas y animales albergados por personas y grupos de rescate y pueden ser encontrados fácilmente. A nivel internacional existen Petfinder.org, The Shelter Pet Project, Let's Adopt, Pet Search Party, and Adopt-a-Pet.com, etc.</p>
                    <img  style={{width:"100%"}} src="https://th.bing.com/th/id/OIP.PiWMrMNhzoigX6qRoss_tAHaEw?pid=ImgDet&rs=1"></img>
                </div>
                <div className="col">
                    <h3>¿Porque adoptar un perro, gato etc?</h3>
                    <p>Adoptar a un animal es una oportunidad para ti y una segunda oportunidad para él. Una oportunidad para ti, porque darás hogar y cariño a un animal que ha sufrido la aterradora experiencia del abandono y desamparo e incluso el maltrato, y aunque la mayoría de animales que esperan en una jaula ser adoptados son sociables y confiados, también los hay debido a la terrible situación vivida tienen miedo o son asustadizos, si te decides a adoptarlos podrás vivir la maravillosa transformación de un animal traumatizado que vuelve a recuperar la confianza</p>
                    <img style={{width:"100%"}} src="https://www.actualidadmascotas.com/wp-content/uploads/2018/07/adoptar-animal.jpg"></img>
                </div>
            </div>
            <h1>Proximamente</h1>
            <div className="d-grid">
                <button type="button" className="btn btn-primary btn-block">Agregar Mascota</button>
            </div>
        </Container>
    )
}

export default about;