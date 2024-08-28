import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logo">Logo</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Contacts</Link></li>
                </ul>                
            </nav>
        </header>
    )
}