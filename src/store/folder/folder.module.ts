import { atom } from "jotai"
import { StoreState } from "../../@types/store"

export type FolderType = {
  id: string
  name: string
  idFolderParent: string | null
}

export const foldersAtom = atom<StoreState<FolderType[]>>({
  data: [],
  status: 'idle',
  error: null
})
