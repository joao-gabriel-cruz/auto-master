import { FileGroup } from "../../components/corrections/FileGroup"

export function Corrections() {
	return (
		<div className="flex flex-col gap-12 w-full h-full p-4">
			<div></div>
			<div className="flex flex-col gap-4">
				<p className="text-2xl font-semibold">Suas correções</p>
				<FileGroup name="Joaõ" />
			</div>
		</div>
	)
}
