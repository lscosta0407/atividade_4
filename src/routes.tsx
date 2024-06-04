import Home from './pages/home/index.tsx'
import Sobre from './pages/sobre/index.tsx'
import Contato from './pages/contato/index.tsx'
import NotFound from './pages/not-found/index.tsx'
import Tarefas from './pages/tarefas/index.tsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/sobre', element: <Sobre />},
  { path: '/contato', element: <Contato />},
  { path: '/tarefas', element: <Tarefas />},
  { path: '/not-found', element: <NotFound />},
])

export default router