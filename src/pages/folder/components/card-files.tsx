import { InsertDriveFile } from "@mui/icons-material"
import { FileType } from "../../../store/file/file.module"
import { Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import { FolderService } from "../../../store/folder/folder.service"

interface CardFilesProps {
  file: FileType
  fileSelected: FileType | null
  verifySelectedFile: boolean
  setFileSelected: 
}

export const CardFiles = (props: CardFilesProps) => {
  const { file } = props
  const [open, setOpen] = useState(false)
  const {removeFolder} = FolderService()

  const onClose = () => {
    setOpen(false)
  }

  const handleRemove = () => {
    removeFolder(file.id)
  }

  return (
    <div
      className="flex flex-col items-center justify-between bg-emerald-50 rounded-md shadow-md p-2 hover:bg-emerald-300 duration-300 transition-all"
    >
      <div
        className="w-full flex gap-2 justify-start mb-2"
      >
        <InsertDriveFile className="text-emerald-500" />
        <p>
          {file.name}
        </p>
      </div>
      <Menu
        id="basic-menu"
        open={open}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleRemove}>
          <div>
            Deletar
          </div>
        </MenuItem>

      </Menu>
      <div
        className="w-32 h-32 bg-white rounded-md flex items-center justify-center"
      >

      </div>
    </div>
  )
}