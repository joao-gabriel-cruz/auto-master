import { Outlet } from 'react-router-dom'
import { pages } from '../router'
import { ButtonsSideBar } from './components/ButtonsSideBar'
import { BasePages } from '../../components/shared/basePages'
import { Header } from '../../components/shared/header'
import { ExitToApp } from '@mui/icons-material'


export const SideBar = () => {
  return (
    <main
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
      <section
        className='w-4/5 h-full bg-gray-100 p-2 gap-4'
      >
      <Header/>
      <BasePages>
        <Outlet />
      </BasePages>
      </section>
    </main>
  )
}