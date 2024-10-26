import { Outlet } from 'react-router-dom'
import { pages } from '../router'
import { ButtonsSideBar } from './components/ButtonsSideBar'


export const SideBar = () => {
  return (
    <main
    className='flex h-screen'
    >
      <aside
        className="w-1/5 h-full bg-white p-10 rounded-lg shadow-lg"
      >
        <div>
          {pages.map(page => (
            <ButtonsSideBar key={page.path} button={page} />
          ))}
        </div>
      </aside>
      <section
        className='w-4/5 h-full bg-gray-100 p-10'
      >
        <Outlet />
      </section>
    </main>
  )
}