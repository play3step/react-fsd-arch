import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../../2-pages/main/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  }
])
