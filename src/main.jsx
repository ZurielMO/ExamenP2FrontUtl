import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/index.jsx'
import UserState from './context/User/UserState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserState>
    <RouterProvider router={router} />
    </UserState>
  </StrictMode>,
)
