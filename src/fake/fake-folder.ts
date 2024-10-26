import { FileType } from "../store/file/file.module"
import { FolderType } from "../store/folder/folder.module"

export const fakeFolder: FolderType[] = [
  {
    id: '1',
    name: 'Folder',
    idFolderParent:  null
  },
  {
    id: '2',
    name: 'Folder 2',
    idFolderParent:  null
  }, 
  {
    id: '3',
    name: 'Folder 3',
    idFolderParent:  "1"
  },
  {
    id: '4',
    name: 'Folder 4',
    idFolderParent:  "3"
  }
]

export const fakeFiles: FileType[] = [
  {
    id: "1",
    name: 'file1',
    idFolder: null
  },
  {
    id: "2",
    name: 'file2',
    idFolder: "1"
  }
]