import React from "react"
import { cn } from "../../utils/tw"

interface MenuButtonProps {
  open: boolean
  options: {
    label: string
    onClick: () => void
    icon:  React.ElementType
  }[]
}

export const MenuButton = (props: MenuButtonProps) => {
  const { open } = props
  return (
    <div
    className={cn("min-w-32 absolute -right-10 -bottom-20  duration-200 transition-all shadow-md bg-white rounded-md gap-2",
      open ? "translate-y-2 " : "-translate-y-2 opacity-0 -z-10"
    )}
  >
   {
    props.options.map((option, index) => (
     <>
       <button
        key={index}
        onClick={option.onClick}
        className={cn("w-full p-2 hover:bg-emerald-300 duration-300 transition-all rounded-md text-emerald-600 border-gray-600", index === props.options.length - 1 ? "border-b-0" : "")}
      >
       <option.icon />
        {option.label}
      </button>
      <hr/>
     </>
    ))
   }
  </div>
  )
}