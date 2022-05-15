import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Services from './pages/Services'
import CV from './pages/CV'

const rootElem: any = document.getElementById('root')
const root = ReactDOM.createRoot(rootElem)
root.render(
        <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/cv" element={<CV />} />
                </Routes>
        </BrowserRouter>
)
