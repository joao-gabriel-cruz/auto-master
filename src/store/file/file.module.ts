import { atom } from "jotai";


export type FileType = {
  id: string  
  name: string
  idFolder: string | null,
  path: string
}

export const filesAtom = atom<FileType[]>([])