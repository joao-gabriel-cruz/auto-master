import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import FolderCopyIcon from "@mui/icons-material/FolderCopy"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import { useState } from "react"
import { FileGroupItem } from "./FileGroupItem"

interface FileGroupProps {
	name: string
}

export function FileGroup({ name }: FileGroupProps) {
	const [open, setOpen] = useState(false)

	return (
		<Accordion>
			<AccordionSummary onClick={() => setOpen(!open)}>
				<div className="w-full flex justify-between">
					<div className="flex gap-3 items-center">
						<FolderCopyIcon className="text-slate-400" fontSize="small" />
						<p className="text-xl font-semibold">{name}</p>
					</div>
					{open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<FileGroupItem name="Arquivo 1" status="pending" />
				<FileGroupItem name="Arquivo 2" status="approved" last />
			</AccordionDetails>
		</Accordion>
	)
}
