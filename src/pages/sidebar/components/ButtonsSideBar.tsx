import { PageSideBar } from '../../router'


interface ButtonsSideBarProps {
  button: PageSideBar
}

export const ButtonsSideBar = (props: ButtonsSideBarProps ) => {
  const { button } = props
  return (
    <button
      className='w-full bg-blue-500 text-white p-2 rounded-lg mb-2 hover:bg-blue-600 transition-all duration-300'
    >
      {button.name}
    </button>
  )
}