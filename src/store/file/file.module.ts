import { atom } from "jotai";


export type FileType = {
  id: string  
  name: string
  idFolder: string | null
}

export const filesAtom = atom<FileType[]>([])