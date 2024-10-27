import AssessmentIcon from "@mui/icons-material/Assessment"
import CloseIcon from "@mui/icons-material/Close"
import DrawIcon from "@mui/icons-material/Draw"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import Modal from "@mui/material/Modal"

interface FileGroupItemDialogProps {
	percentage: number
	motive: string
	ideal: string
	setOpen: (open: boolean) => void
}

export function FileGroupItemDialog({
	percentage,
	motive,
	ideal,
	setOpen,
}: FileGroupItemDialogProps) {
	return (
		<Modal open className="w-screen h-screen flex justify-center items-center">
			<div className="w-[80vw] h-[80vh] bg-white p-2 rounded-lg ">
				<div className="flex flex-col w-full h-full">
					<div className="w-full flex justify-end">
						<CloseIcon onClick={() => setOpen(false)} className="cursor-pointer" />
					</div>
					<div className="flex gap-8 items-start justify-center h-full p-8 overflow-y-scroll">
						<img
							src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMO3JxXFHKx_098Q7egw0QNdoN08y_uKvt1FXucg2lsua03J1ZDaAjTJPL6KoqoVNlcd9KuVfzdykSZJmp1MNMq-nu2a-7CPI3GmQxxcwOPeCWbnWwAipV0XGi_ISLxsFEhdJ4X5DH9QPOPeZmHKF14jg88HlM5sTiXM12657D2Jfpn3px02QcLf4F/s1348/CamScanner%2009-17-2022%2020.46.jpg"
							alt=""
							className=" w-[70%] h-full object-contain rounded-lg border border-slate-300"
						/>
						<div className="w-[30%] rounded-md bg-gray-100 border border-gray-400 p-4 flex flex-col gap-8">
							<p className="text-xl font-semibold">Resumo da correção</p>
							<div className="flex gap-2 items-center">
								<AssessmentIcon className="text-emerald-400" />
								<p className="text-lg font-semibold">Porcentagem de acerto:</p>
								<p className="text-lg font-bold text-green-600">{percentage}%</p>
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-2">
									<DrawIcon className="text-emerald-400" />
									<p className="text-lg font-semibold">Justificativa:</p>
								</div>
								<div className="bg-gray-200 w-full rounded-md">
									<p className="p-4">{motive}</p>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-2">
									<FactCheckIcon className="text-emerald-400" />
									<p className="text-lg font-semibold">Resposta ideal:</p>
								</div>
								<div className="bg-gray-200 w-full rounded-md">
									<p className="p-4">{ideal}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
