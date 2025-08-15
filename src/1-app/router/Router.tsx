import { createBrowserRouter } from 'react-router'
import { MainPage } from '../../2-pages/main'
import { Layout } from '../../3-widgets'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: MainPage
      }
    ]
  }
])
