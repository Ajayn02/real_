import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import UserProfileContext from './context/UserProfileContext.jsx'
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <UserProfileContext>
          <App />
        </UserProfileContext>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
