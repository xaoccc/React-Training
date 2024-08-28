import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Customers from "../components/Customers"
import News from "../components/News"
import Contacts from "../components/Contacts"

export default function Main() {
    return (
        <main>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contacts />} />
            </Routes>

        </main>
    )
}