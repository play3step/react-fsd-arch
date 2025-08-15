import { createBrowserRouter } from 'react-router'
import { MainPage } from '../../2-pages/main/index'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage
  }
])
