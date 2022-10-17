import Container from "../../components/NavBar";
import {useRouter} from "next/router";
import mascotas from "../../mascotas.json";
const mascotaProfile=()=>{
    const router=useRouter().query.id;
    return(
        <Container>
            {mascotas.map((item)=>{
                if(item.id==router){
                    return(
                        <div>
                            <h1>{item.namePet}</h1>
                            <hr></hr>
                            <img src={item.imgUrl}></img>
                            <p>{item.description}</p>
                            <button className="btn btn-primary">Adoptar</button>
                        </div>
                    )
                }
            })}        
        </Container>
    )
}
export default mascotaProfile;