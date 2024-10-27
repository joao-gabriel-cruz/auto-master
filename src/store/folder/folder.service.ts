import { useAtom } from "jotai"
import {  FolderType, foldersAtom } from "./folder.module"
import { fakeFolder } from "../../fake/fake-folder"


export const FolderService = () => {
  const [stateFolders, setStateFolders] = useAtom(foldersAtom)

  const { data: folders, error, status } = stateFolders

  const addFolder = (folder: FolderType) => {
    setStateFolders({...stateFolders, data: [...folders, folder]})
  }

  const removeFolder = (id: string) => {
    setStateFolders({...stateFolders, data: folders.filter(folder => folder.id !== id)})
  }

  const updateFolder = (folder: FolderType) => {
    setStateFolders({...stateFolders, data: folders.map(f => f.id === folder.id ? folder : f)})
  }

  const getFolders = async () => {
    setStateFolders({...stateFolders, status: 'loading'})
    try {
     new Promise((resolve) => {
        setTimeout(() => {
          resolve(setStateFolders({...stateFolders, status: 'success', data: fakeFolder}) )
        }, 1000)
     })
    } catch (error: any) {
      setStateFolders({...stateFolders, error: error ?? "", status: 'error'})
    }
  }

  const getFolderChildren = (folder: FolderType) => {
    return folders.filter(f => f.idFolderParent === folder.id)
  }

  const getPath = (folder: FolderType | null) => {
    if (!folder) return 'Home'
    const path = [folder.name]
    let folderFather = getFolderFather(folder)
    while (folderFather) {
      path.push(folderFather.name)
      folderFather = getFolderFather(folderFather)
    }
    return path.reverse().join(' / ')
  }

 const getFolderFather = (folder: FolderType | null) => {
   if (!folder) return null
    return folders.find(f => f.id === folder.idFolderParent) ?? null
  }
  
  return {
    addFolder,
    removeFolder,
    updateFolder,
    getFolders,
    getFolderChildren,
    getFolderFather,
    getPath,
    folders,
    error,
    status
  }
}