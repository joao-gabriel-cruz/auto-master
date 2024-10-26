import  { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SideBar } from './sidebar';

export interface PageSideBar {
  name: string
  path: string
  icon: string
  element: React.ReactNode
}

export const pages: PageSideBar[] = [
  {
    name: 'Correções',
    icon: '📝',
    path: '/corrections',
    element: <div>Corrections</div>
  }
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SideBar />,
    children: pages.map(page => ({
      path: page.path,
      element: page.element
    }))
  }
])

export const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}