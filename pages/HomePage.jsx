import { Link } from "react-router-dom";

export default function HomePage(){
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/react-facts">React Facts</Link></li>
                </ul>
            </nav>
            <h1>
                This is the Home page
            </h1>
        </div>
    )
}