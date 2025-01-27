import { useAtom } from "jotai"
import { fakeFiles } from "../../fake/fake-folder"
import { FileType, filesAtom } from "./file.module"

export const FileService = () => {
	const [files, setFiles] = useAtom(filesAtom)

	const initFiles = async () => {
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(setFiles(fakeFiles))
			}, 1000)
		})
	}

	const addFile = (file: FileType) => {
		console.log("file path", file.path)
		setFiles((prev) => [...prev, file])
	}

	const removeFile = (id: string) => {
		setFiles(files.filter((file) => file.id !== id))
	}

	const updateFile = (file: FileType) => {
		setFiles(files.map((f) => (f.id === file.id ? file : f)))
	}

	const getFilesByFolder = (idFolder: string) => {
		return files.filter((file) => file.idFolder === idFolder)
	}

	const getFilesNotInFolder = () => {
		return files.filter((file) => !file.idFolder)
	}

	return {
		addFile,
		removeFile,
		updateFile,
		getFilesByFolder,
		getFilesNotInFolder,
		initFiles,
		files,
	}
}
