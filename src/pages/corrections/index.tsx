import AddCircleIcon from "@mui/icons-material/AddCircle"
import ChecklistIcon from "@mui/icons-material/Checklist"
import { useState } from "react"
import { FileGroup } from "../../components/corrections/FileGroup"
import { NewCorrectionModal } from "../../components/corrections/NewCorrectionModal"

export function Corrections() {
	const [open, setOpen] = useState(false)
	return (
		<>
			{open && <NewCorrectionModal setOpen={setOpen} />}
			<div className="flex flex-col justify-between w-full h-full p-4">
				<div className="flex flex-col gap-12">
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<ChecklistIcon className="text-emerald-500 font-bold" />
							<p className="text-2xl font-semibold">Suas correções</p>
						</div>
						<FileGroup name="Joaõ" />
					</div>
				</div>
				<button
					className="flex gap-2 w-44 items-center justify-center bg-emerald-500 text-white rounded-md p-2 hover:bg-emerald-600 transition-all duration-300"
					onClick={() => setOpen(true)}
				>
					<AddCircleIcon />
					<span className="font-semibold">Nova correção</span>
				</button>
			</div>
		</>
	)
}
