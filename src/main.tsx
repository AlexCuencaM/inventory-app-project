import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'
import { Theme } from './ui/Theme/Theme'
import { InventoryContext } from './state/InventoryContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
            <InventoryContext>
                <Theme>
                    <RouterProvider router={AppRouter}/>
                </Theme>
            </InventoryContext>
  </StrictMode>,
)
