import { ArrowBackIos, Clear, Delete } from "@mui/icons-material"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { CardFiles } from "../../pages/folder/components/card-files"
import { CardFolder } from "../../pages/folder/components/card-folder"
import { FileType } from "../../store/file/file.module"
import { FileService } from "../../store/file/file.service"
import { folderSelectedAtom } from "../../store/folder/folder.module"
import { FolderService } from "../../store/folder/folder.service"
import { cn } from "../../utils/tw"

export const FolderCorrent = () => {
	const { folders, getFolderChildren, getFolderFather, removeFolder, getPath } = FolderService()
	const { getFilesByFolder, getFilesNotInFolder, removeFile } = FileService()

	const [folderSelectedFolder, setFolderSelected] = useAtom(folderSelectedAtom)
	const [verifySelectedFolder, setVerifySelectedFolder] = useState<boolean>(false)

	const [fileSelected, setFileSelected] = useState<FileType | null>(null)
	const [verifySelectedFile, setVerifySelectedFile] = useState<boolean>(false)

	useEffect(() => {
		console.log({
			a: folderSelectedFolder && getFolderChildren(folderSelectedFolder),
			fileSelected,
		})
	}, [folderSelectedFolder, fileSelected])

	return (
		<main className="w-full h-full flex flex-col  bg-white rounded-md shadow-md p-6">
			{fileSelected && verifySelectedFile ? (
				<div className="w-full h-[90%] justify-between flex flex-col">
					<div className="p-2">
						<button
							onClick={() => {
								setFileSelected(null)
								setVerifySelectedFile(false)
							}}
							className="flex h-12 text-zinc-600 text-lg hover:text-emerald-500 transition-all duration-300 items-center gap-2"
						>
							<ArrowBackIos />
							<p className="text-md">voltar</p>
						</button>
					</div>
					<embed
						src={fileSelected.path}
						type="application/pdf"
						width="100%"
						height="100%"
					/>
				</div>
			) : (
				<>
					{folderSelectedFolder && !verifySelectedFolder ? (
						<div
							className={cn(
								"w-auto flex gap-2 mb-8 items-center justify-start bg-emerald-200 rounded-full px-4 py-1"
							)}
						>
							<button
								onClick={() => setFolderSelected(null)}
								className="text-emerald-800 transition-all duration-300 hover:bg-emerald-300 rounded-full p-1"
							>
								<Clear />
							</button>
							<p className="text-emerald-800">1 item selecionado</p>
						</div>
					) : (
						<div className={cn("w-auto flex gap-2 mb-8 items-center justify-start")}>
							{getPath(folderSelectedFolder) !== "Home" && (
								<button
									onClick={() => {
										const folderFather = getFolderFather(folderSelectedFolder)
										setFolderSelected(folderFather)
										setVerifySelectedFolder(!!folderFather)
									}}
									className="flex h-12 text-zinc-600 text-lg hover:text-emerald-500 transition-all duration-300 items-center gap-2"
								>
									<ArrowBackIos />
								</button>
							)}
							<p className="text-emerald-800 text-lg p-2">
								{getPath(folderSelectedFolder)}
							</p>
						</div>
					)}

					{fileSelected && !verifySelectedFile && (
						<div className="w-auto flex gap-2 mb-8 items-center justify-start bg-emerald-200 rounded-full px-4 py-1">
							<button
								onClick={() => setFileSelected(null)}
								className="text-emerald-800 transition-all duration-300 hover:bg-emerald-300 rounded-full p-1"
							>
								<Clear />
							</button>
							<p className="text-emerald-800">1 item selecionado</p>
							<button
								onClick={() => {
									removeFile(fileSelected.id)
									setFileSelected(null)
								}}
								className="text-emerald-800 transition-all duration-300 hover:bg-emerald-300 p-1 rounded-full"
							>
								<Delete />
							</button>
							{/* <button
                    className="text-emerald-800 transition-all duration-300 hover:bg-emerald-300 p-1 rounded-full"
      
                  >
                    <Brush />
                  </button> */}
						</div>
					)}

					<div className="flex gap-2 h-full">
						{!folderSelectedFolder || !verifySelectedFolder ? (
							<div className="flex flex-col gap-10">
								<div className="flex gap-4">
									{folders
										.filter((item) => !item.idFolderParent)
										.map((folder) => (
											<CardFolder
												setSelectFolder={setFolderSelected}
												key={folder.id}
												folder={folder}
												setVerifySelectedFolder={setVerifySelectedFolder}
												folderSelectedFolder={folderSelectedFolder}
												verifySelectedFolder={verifySelectedFolder}
											/>
										))}
								</div>
								<div className="flex gap-2">
									{getFilesNotInFolder().map((file) => (
										<CardFiles
											file={file}
											key={file.id}
											fileSelected={fileSelected}
											setFileSelected={setFileSelected}
											verifySelectedFile={verifySelectedFile}
											setVerifySelectedFile={setVerifySelectedFile}
											onClick={() => {
												setFileSelected(file)
												if (fileSelected) {
													if (fileSelected.id !== file.id) {
														setVerifySelectedFile(false)
													} else {
														setVerifySelectedFile(true)
													}
												} else {
													setVerifySelectedFile(false)
												}
											}}
										/>
									))}
								</div>
							</div>
						) : (
							<div className="flex flex-col gap-2">
								<div>
									<div className="flex flex-col gap-2">
										<div className="flex gap-2">
											{getFolderChildren(folderSelectedFolder!).map(
												(folder) => (
													<CardFolder
														setSelectFolder={setFolderSelected}
														key={folder.id}
														folder={folder}
														setVerifySelectedFolder={
															setVerifySelectedFolder
														}
														folderSelectedFolder={folderSelectedFolder}
														verifySelectedFolder={verifySelectedFolder}
													/>
												)
											)}
										</div>
										<div className="flex gap-2">
											{getFilesByFolder(folderSelectedFolder!.id).map(
												(file) => (
													<CardFiles
														file={file}
														key={file.id}
														fileSelected={fileSelected}
														setFileSelected={setFileSelected}
														verifySelectedFile={verifySelectedFile}
														setVerifySelectedFile={
															setVerifySelectedFile
														}
													/>
												)
											)}
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</>
			)}
		</main>
	)
}
