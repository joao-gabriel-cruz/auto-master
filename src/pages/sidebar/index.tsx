import { Outlet } from 'react-router-dom'
import { pages } from '../router'
import { ButtonsSideBar } from './components/ButtonsSideBar'
import { BasePages } from '../../components/shared/basePages'
import { Header } from '../../components/shared/header'
import { ExitToApp, InsertDriveFile } from '@mui/icons-material'
import { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import { useAtom } from 'jotai'
import { folderSelectedAtom } from '../../store/folder/folder.module'
import { FileService } from '../../store/file/file.service'


export const SideBar = () => {


  const {addFile} = FileService()
  const [folderSelectedFolder] = useAtom(folderSelectedAtom)


  const onDrop = useCallback((acceptedFiles) => {
      
      acceptedFiles.forEach((file) => {
        addFile({
          id: Math.random().toString(36),
          name: file.name,
          idFolder: folderSelectedFolder ? folderSelectedFolder.id  : null,
          path: URL.createObjectURL(file)
      })})
      
  }, [folderSelectedFolder])


  const {getRootProps, isDragActive} = useDropzone({onDrop})

  return (
    <main
    {...getRootProps()}
    className='flex h-screen'
    >
      <aside
        className="w-1/5 h-full bg-white p-2 rounded-lg shadow-lg"
      >
        <div
        className='h-[10%] flex justify-center items-center mb-2'
        >
          <h1 className="text-2xl font-semibold text-gray-800 ">Sidebar</h1>
        </div>
        <div
        className='w-full h-[85%] flex flex-col items-center  gap-4'
        >
          {pages.map(page => (
            <ButtonsSideBar key={page.path} button={page} />
          ))}
        </div>
       
        <footer>
          <div
          className='h-[5%] flex justify-center items-center'
          >
            <button
              className='flex bg-red-500 p-2 rounded-md text-white gap-2'
            >
                <p>
                  Sair
                </p>
                <ExitToApp />
            </button>
          </div>
        </footer>
      </aside>
      {
          isDragActive && (
            <div
            className='absolute w-screen h-screen bg-gray-900 flex justify-center items-center  duration-300 transition-all z-[5000] gap-2 bg-opacity-20'
            >
              <div
                className='px-32 py-16 border-4 border-dashed border-gray-400 bg-gray-200 flex rounded-md bg-opacity-90'
              >
              <InsertDriveFile />

              <p
                className='text-2xl font-semibold text-gray-800'
                >
                Arraste e solte o arquivo aqui
              </p>
                </div>
            </div>
          ) 
        }
      <section
        className='w-4/5 h-full bg-gray-100 p-4 gap-4'
      >
      <Header/>
      <BasePages>
        <Outlet />
      </BasePages>
      </section>
    </main>
  )
}
