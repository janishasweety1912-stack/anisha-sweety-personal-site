
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './styles/global.css'
import './styles/stars.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/education.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/experience.css'
import './styles/certifications.css'
import './styles/achievements.css'
import './styles/resume.css'
import './styles/contact.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
