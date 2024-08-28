import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../components/header.jsx'
import Main from '../components/main.jsx'
import Footer from '../components/footer.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Main />
    <Footer />
  </BrowserRouter>
)
