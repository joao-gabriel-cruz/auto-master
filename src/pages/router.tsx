import  { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SideBar } from './sidebar';
import { CheckCircleOutline, Folder as FolderIcon } from '@mui/icons-material';
import { Folder } from './folder';

export interface PageSideBar {
  name: string
  path: string
  icon: React.ElementType
  element: React.ReactNode
}

export const pages: PageSideBar[] = [
  {
    name: 'Correções',
    icon: CheckCircleOutline,
    path: '/corrections',
    element: <div>Corrections</div>
  },
  {
    name: 'Arquivos',
    icon: FolderIcon,
    path: '/folder',
    element: <Folder />
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