import { useLocation, useNavigate } from 'react-router-dom'
import { PageSideBar } from '../../router'
import { cn } from '../../../utils/tw'
import { ArrowForwardIos } from '@mui/icons-material'


interface ButtonsSideBarProps {
  button: PageSideBar
}

export const ButtonsSideBar = (props: ButtonsSideBarProps ) => {
  const { button } = props

  const nav = useNavigate()
  const {pathname} = useLocation()


  return (
    <button
      onClick={() => nav(button.path)}
      className={cn('flex w-full h-12  text-emerald-500 p-2  mb-2 hover:bg-gray-100 transition-all duration-300 gap-2 justify-between',
        pathname === button.path ? 'border-b border-emerald-500 ' : 'text-gray-800'
      )}
    >
      <button.icon  />
      <p>
        {button.name}
      </p>
      <ArrowForwardIos/>
    </button>
  )
}