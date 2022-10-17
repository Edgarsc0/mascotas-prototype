import Router from "next/router";
const Mascotas=(props)=>{
    return(
        <div>
        {
            props.mascotas.map(mascota=>(
                <>
                <div className="card">
                    <div className="card-header">
                        <strong>{mascota.namePet}</strong>
                    </div>
                    <div className="card-body">
                        <img width="300" src={mascota.imgUrl}/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" onClick={
                            e=>Router.push(`/masc/[id]`,`/masc/${mascota.id}`)
                        }>Ver mascota</button>
                    </div>
                </div>
                <br></br>
                </>
            ))
        }
        </div>
    )
}
/*
  <div class="card">
    <div class="card-header">Header</div>
    <div class="card-body">Content</div> 
    <div class="card-footer">Footer</div>
  </div>
*/
export default Mascotas;