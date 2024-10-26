import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ImageIcon from "@mui/icons-material/Image"
import LoopIcon from "@mui/icons-material/Loop"
import { cn } from "../../utils/tw"

interface FileGroupItemProps {
	name: string
	status: "pending" | "approved"
	last?: boolean
}

export function FileGroupItem({ name, status, last = false }: FileGroupItemProps) {
	return (
		<div
			className={cn(
				"flex items-center gap-4 p-4 border-t border-slate-200 cursor-pointer",
				last && "border-b border-slate-300"
			)}
		>
			<ImageIcon className="text-emerald-400" />

			<p
				className={cn(
					"italic text-slate-800 font-semibold",
					status === "pending" && "text-slate-400"
				)}
			>
				{name}
			</p>
			{status === "pending" ? (
				<LoopIcon className="text-blue-300 animate-spin duration-1000" />
			) : (
				<CheckCircleIcon className="text-blue-500" />
			)}
		</div>
	)
}
