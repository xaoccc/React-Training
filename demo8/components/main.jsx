import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Customers from "../components/Customers"
import News from "../components/News"
import Contacts from "../components/Contacts"
import CharacterList from "./CharacterList"
import CharacterDetails from "./CharacterDetails"

export default function Main() {
    return (
        <main>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/characters" element={<CharacterList />} />
                <Route path={`/characters/:id`} element={<CharacterDetails />} />
            </Routes>

        </main>
    )
}