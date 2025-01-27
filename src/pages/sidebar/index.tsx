import { ExitToApp, InsertDriveFile } from "@mui/icons-material"
import { useAtom } from "jotai"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Outlet, useLocation } from "react-router-dom"
import { BasePages } from "../../components/shared/basePages"
import { Header } from "../../components/shared/header"
import { FileService } from "../../store/file/file.service"
import { folderSelectedAtom } from "../../store/folder/folder.module"
import { pages } from "../router"
import { ButtonsSideBar } from "./components/ButtonsSideBar"

export const SideBar = () => {
	const { pathname } = useLocation()

	const { addFile } = FileService()
	const [folderSelectedFolder] = useAtom(folderSelectedAtom)

	const onDrop = useCallback(
		(acceptedFiles) => {
			acceptedFiles.forEach((file) => {
				addFile({
					id: Math.random().toString(36),
					name: file.name,
					idFolder: folderSelectedFolder ? folderSelectedFolder.id : null,
					path: URL.createObjectURL(file),
				})
			})
		},
		[folderSelectedFolder]
	)

	console.log({ pathname })

	const { getRootProps, isDragActive } = useDropzone({ onDrop })

	return (
		<main {...getRootProps()} className="flex h-screen">
			<aside className="w-1/5 bg-gray-50 rounded-lg pt-8 pb-[0.7rem] shadow-lg flex flex-col justify-between">
				<div className="h-[2%] flex justify-start px-6 items-center mb-2">
					<h1 className="text-2xl font-semibold text-gray-800 italic">Automaster</h1>
				</div>
				<div className="w-full h-[85%] flex flex-col items-center mt-8  gap-4">
					{pages.map((page) => (
						<ButtonsSideBar key={page.path} button={page} />
					))}
				</div>

				<div>
					<div className="h-[5%] w-full flex justify-center items-center">
						<button className="w-[50%] flex items-center justify-center bg-red-500 hover:bg-red-600 p-2 rounded-md text-white gap-2">
							<p>Sair</p>
							<ExitToApp />
						</button>
					</div>
				</div>
			</aside>
			{isDragActive && location.pathname === "/folder" && (
				<div className="absolute w-screen h-screen bg-gray-900 flex justify-center items-center  duration-300 transition-all z-[5000] gap-2 bg-opacity-20">
					<div className="px-32 py-16 border-4 border-dashed border-gray-400 bg-gray-200 flex rounded-md bg-opacity-90">
						<InsertDriveFile />

						<p className="text-2xl font-semibold text-gray-800">
							Arraste e solte o arquivo aqui
						</p>
					</div>
				</div>
			)}
			<section className="w-4/5 h-full bg-gray-200 p-4 gap-4">
				<Header />
				<BasePages>
					<Outlet />
				</BasePages>
			</section>
		</main>
	)
}
