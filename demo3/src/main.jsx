import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import About from '../components/about.jsx'
import Services from '../components/services.jsx'
import WhyUs from '../components/whyus.jsx'
import Team from '../components/team.jsx'
import Clients from '../components/clients.jsx'
import Info from '../components/info.jsx'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <Services />
        <About />
        <WhyUs />
        <Team />
        <Clients />
        <Info />
        <Footer />
    </StrictMode>,
)
