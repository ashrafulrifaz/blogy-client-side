import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import Provider from './Provider/Provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={Route}></RouterProvider>
        <Toaster position="top-center" richColors />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
