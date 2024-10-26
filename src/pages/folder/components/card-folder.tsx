import { Folder as FolderIcon, MoreVert, } from "@mui/icons-material"
import { FolderType } from "../../../store/folder/folder.module"
import { SetState } from "../../../@types/utils"
import { useState } from "react"
import { Menu, MenuItem } from "@mui/material"
import { cn } from "../../../utils/tw"

interface CardFolderProps {
  folder: FolderType
  setSelectFolder: SetState<FolderType | null>
  folderSelectedFolder: FolderType | null
  setVerifySelectedFolder: SetState<boolean>
}

export const CardFolder = (props: CardFolderProps) => {
  const { folder, setSelectFolder, folderSelectedFolder, setVerifySelectedFolder } = props

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectFolder(null)
  };

  return (
    <button
      className={cn("relative min-w-48 flex items-center justify-between bg-emerald-50 rounded-md shadow-md p-2  duration-300 transition-all",
        folderSelectedFolder && folderSelectedFolder.id === folder.id ?
          "bg-emerald-200" : "hover:bg-emerald-100"
      )}
    >
      <div
        className="w-full"
        onClick={() => {
          setSelectFolder(folder)
          if (folderSelectedFolder) {
            if (folderSelectedFolder.id !== folder.id) {
              setVerifySelectedFolder(false)
            } else {
              setVerifySelectedFolder(true)
            }
          } else {
            setVerifySelectedFolder(false)
          }
        }}
      >
        <Menu

          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => {
            handleClose()
            setSelectFolder(null)
          }}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <div
          className="flex gap-2"
        >
          <FolderIcon
            className="text-gray-800"
          />
          <p>
            {folder.name}
          </p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="p-2 rounded-full hover:bg-emerald-300 duration-300 transition-all "
      >
        <MoreVert />
      </button>
    </button>
  )
}