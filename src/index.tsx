import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@components/'
import './styles/global.scss'
// import 'reset-css'

createRoot(document.getElementById('root') as HTMLDivElement).render(<App />)
