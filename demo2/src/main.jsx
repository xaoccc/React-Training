import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from '../components/main.jsx'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header />
        <Main />
        <Footer />
    </StrictMode>,
)
