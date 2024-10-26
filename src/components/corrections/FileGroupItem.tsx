import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import ImageIcon from "@mui/icons-material/Image"
import LoopIcon from "@mui/icons-material/Loop"
import { cn } from "../../utils/tw"
import { FileGroupItemDialog } from "./FileGroupItemDialog"

interface FileGroupItemProps {
	name: string
	status: "pending" | "approved"
	last?: boolean
}

export function FileGroupItem({ name, status, last = false }: FileGroupItemProps) {
	return (
		<>
			<FileGroupItemDialog
				percentage={80}
				motive="A resposta fornece as qualidades físicas e técnicas de Cristiano Ronaldo, mas não aborda sua ética de trabalho e dedicação ao treinamento, que são consideradas importantes por parte do contexto."
				ideal="Possui muita técnica, velocidade, força física e uma notável capacidade de finalização; É conhecido por sua combinação única de habilidade técnica, velocidade, força física e uma notável capacidade de finalização."
			/>
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
		</>
	)
}
