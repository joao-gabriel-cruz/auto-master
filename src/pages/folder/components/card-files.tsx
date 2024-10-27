import { InsertDriveFile } from "@mui/icons-material"
import { FileType } from "../../../store/file/file.module"

import { SetState } from "../../../@types/utils"
import { cn } from "../../../utils/tw"

interface CardFilesProps {
	file: FileType
	fileSelected: FileType | null
	verifySelectedFile: boolean
	setFileSelected: SetState<FileType | null>
	setVerifySelectedFile: SetState<boolean>
	onClick: () => void
}

export const CardFiles = (props: CardFilesProps) => {
	const { file, fileSelected, onClick } = props

	return (
		<div
			onClick={onClick}
			className={cn(
				"min-w-72 flex flex-col items-center justify-between bg-emerald-50 rounded-md shadow-md p-2 hover:bg-emerald-300 duration-300 transition-all cursor-pointer",
				fileSelected && fileSelected.id === file.id
					? "bg-emerald-200"
					: "hover:bg-emerald-100"
			)}
		>
			<div className="w-full flex gap-2 justify-start mb-2">
				<InsertDriveFile className="text-emerald-500" />
				<p>{file.name}</p>
			</div>

			<div className="w-64 overflow-hidden h-32 bg-white rounded-md flex items-center justify-center">
				<iframe className="overflow-hidden bg-cover bg-center" src={file.path}></iframe>
			</div>
		</div>
	)
}
