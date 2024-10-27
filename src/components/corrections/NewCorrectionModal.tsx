import CloseIcon from "@mui/icons-material/Close"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import SaveIcon from "@mui/icons-material/Save"
import { Modal, styled } from "@mui/material"
import TextField from "@mui/material/TextField"
import { useState } from "react"
import { FolderCorrent } from "./Folders"

interface NewCorrectionModalProps {
	setOpen: (open: boolean) => void
}

const ValidationTextField = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: 8,
	},
})

const ValidationTextArea = styled(TextField)({
	"& .MuiOutlinedInput-root": {
		borderRadius: 12,
		height: "20vh",
	},
})

export function NewCorrectionModal({ setOpen }: NewCorrectionModalProps) {
	const [filesSelected, setFilesSelected] = useState<FileList | null>(null)

	return (
		<Modal open className="w-screen h-screen flex justify-center items-center">
			<div className="w-[50vw] bg-white p-8 rounded-lg flex flex-col gap-1">
				<div className="flex flex-col justify-between">
					<div className="flex flex-col gap-8">
						<div className="flex justify-between">
							<p className="text-2xl font-bold">Nova correção</p>
							<CloseIcon onClick={() => setOpen(false)} className="cursor-pointer" />
						</div>
						<div>
							<input
								type="file"
								name="file"
								id="file"
								className="hidden"
								multiple
								onChange={(e) => setFilesSelected(e.target.files)}
							/>
							<div className="flex items-center">
								<label
									htmlFor="file"
									id="file"
									className="w-fit p-2 bg-gray-100 border rounded-l-md border-gray-400 flex items-center justify-center gap-2 cursor-pointer"
								>
									<CloudUploadIcon />
									<p>Selecione as respostas</p>
								</label>
								<div className="border border-gray-400 h-10 px-2 rounded-r-md flex-1 flex-nowrap line-clamp-1">
									{filesSelected && (
										<div className="flex gap-2 line-clamp-1">
											{Array.from(filesSelected)
												.map((file, i) =>
													i === Array.from(filesSelected).length - 1
														? file.name
														: file.name + ", "
												)
												.map((file) => (
													<span key={file} className="">
														{file}
													</span>
												))}
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-2">
								<ValidationTextField
									id="outlined-basic"
									label="Nome da coleção"
									variant="outlined"
									color="success"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<ValidationTextArea
									id="outlined-basic"
									label="Sugestão de resposta para correção"
									variant="outlined"
									color="success"
									sx={{
										height: "10vh",
									}}
									multiline
								/>
							</div>
						</div>
						<div className="overflow-auto">
							<FolderCorrent />
						</div>
					</div>
					<div className="flex justify-end">
						<button
							className="flex gap-2 w-44 items-center justify-center bg-emerald-500 text-white rounded-md p-2 hover:bg-emerald-600 transition-all duration-300"
							onClick={() => setOpen(false)}
						>
							<SaveIcon />
							<p className="font-semibold">Salvar</p>
						</button>
					</div>
				</div>
			</div>
		</Modal>
	)
}
