import React from 'react'
import ReactDOM from 'react-dom/client'

import General from './components/General'
import Education from './components/Education'
import Experience from './components/Experience'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <h1>Curriculum Vitae</h1>

    <General />
    <Education />
    <Experience />
  
  </React.StrictMode>,
)
