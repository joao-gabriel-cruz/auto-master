import Modal from "@mui/material/Modal"

interface FileGroupItemDialogProps {
	percentage: number
	motive: string
	ideal: string
}

export function FileGroupItemDialog({ percentage, motive, ideal }: FileGroupItemDialogProps) {
	return (
		<Modal open className="w-screen h-screen flex justify-center items-center">
			<div className="w-[80vw] h-[80vh] bg-white p-8 rounded-lg flex gap-8 items-start justify-center">
				<img
					src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMO3JxXFHKx_098Q7egw0QNdoN08y_uKvt1FXucg2lsua03J1ZDaAjTJPL6KoqoVNlcd9KuVfzdykSZJmp1MNMq-nu2a-7CPI3GmQxxcwOPeCWbnWwAipV0XGi_ISLxsFEhdJ4X5DH9QPOPeZmHKF14jg88HlM5sTiXM12657D2Jfpn3px02QcLf4F/s1348/CamScanner%2009-17-2022%2020.46.jpg"
					alt=""
					className="w-[70%] h-full object-contain rounded-lg border border-slate-300"
				/>
				<div className="w-[30%] rounded-md bg-gray-200 p-4 flex flex-col gap-8">
					<div className="flex gap-2 items-center">
						<p className="text-lg font-semibold">Porcentagem de acerto:</p>
						<p className="text-lg font-bold text-green-400">{percentage}%</p>
					</div>
				</div>
			</div>
		</Modal>
	)
}
