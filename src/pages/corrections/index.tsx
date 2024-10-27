import ChecklistIcon from "@mui/icons-material/Checklist"
import { FileGroup } from "../../components/corrections/FileGroup"

export function Corrections() {
	return (
		<div className="flex flex-col gap-12 w-full h-full p-4">
			<div></div>
			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-3">
					<ChecklistIcon className="text-emerald-500 font-bold" />
					<p className="text-2xl font-semibold">Suas correções</p>
				</div>
				<FileGroup name="Joaõ" />
			</div>
		</div>
	)
}
