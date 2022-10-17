import Link from "next/link";
const Navigation=()=>{
    return(
        <div className="container mt-3">
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                   <Link href="/">
                        <a className="nav-link active">Home</a>
                   </Link>
                </li>
                <li className="nav-item">
                    <Link href="/quienes-somos">
                        <a className="nav-link">Quienes somos</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
export default Navigation;