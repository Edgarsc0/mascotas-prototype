import Navigation from "./Navigation";
import Head from "next/head";
const Container=(props)=>{
    return(
        <div>
            <Head>
                <title>Mascotas</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
            </Head>
            <Navigation/>
            <div className="container mt-3">
                {props.children}
            </div>
        </div>
    )
}
export default Container;