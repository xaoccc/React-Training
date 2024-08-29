import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../components/about.jsx'
import Home from '../components/home.jsx'
import Services from '../components/services.jsx'
import WhyUs from '../components/whyus.jsx'
import Team from '../components/team.jsx'
import Clients from '../components/clients.jsx'
import Info from '../components/info.jsx'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        
        <Header />
        <Routes>
            <Route path="/React-Training" element={<Home />} />
            <Route path="/React-Training/about" element={<About />} />            
            <Route path="/React-Training/whyus" element={<WhyUs />} />            
            <Route path="/React-Training/team" element={<Team />} />            
            <Route path="/React-Training/clients" element={<Clients />} />           
        
            <Route path="/React-Training/services" element={<Services />} />            
        </Routes>
        <Info />
        <Footer />
    </BrowserRouter>,
)
