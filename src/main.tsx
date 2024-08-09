import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'
import { Theme } from './ui/Theme/Theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
        <RouterProvider router={AppRouter}/>
    </Theme>
  </StrictMode>,
)
