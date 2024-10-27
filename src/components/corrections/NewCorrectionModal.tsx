import { Modal, styled } from "@mui/material"
import TextField from "@mui/material/TextField"

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
	return (
		<Modal open className="w-screen h-screen flex justify-center items-center">
			<div className="w-[50vw] h-[80vh] bg-white p-12 rounded-lg flex flex-col gap-8">
				<p className="text-2xl font-bold">Nova correção</p>
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
			</div>
		</Modal>
	)
}
