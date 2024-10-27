import { Folder as FolderIcon } from "@mui/icons-material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Corrections } from "./corrections"
import { Folder } from "./folder"
import { SideBar } from "./sidebar"

export interface PageSideBar {
	name: string
	path: string
	icon: React.ElementType
	element: React.ReactNode
}

export const pages: PageSideBar[] = [
	{
		name: "Correções",
		icon: CheckCircleIcon,
		path: "/corrections",
		element: <Corrections />,
	},
	{
		name: "Arquivos",
		icon: FolderIcon,
		path: "/folder",
		element: <Folder />,
	},
]

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SideBar />,
		children: pages.map((page) => ({
			path: page.path,
			element: page.element,
		})),
	},
])

export const Router = () => {
	return <RouterProvider router={router} />
}
