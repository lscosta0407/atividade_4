import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import router from './routes.tsx'
import Home from './pages/home/index.tsx'
import Sobre from './pages/sobre/index.tsx'
import Contato from './pages/contato/index.tsx'
import NotFound from './pages/not-found/index.tsx'
import Tarefas from './pages/tarefas/index.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/sobre', element: <Sobre />},
  { path: '/contato', element: <Contato />},
  { path: '/tarefas', element: <Tarefas />},
  { path: '/not-found', element: <NotFound />},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
