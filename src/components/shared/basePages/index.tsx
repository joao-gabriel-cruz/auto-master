interface BasePagesProps {
	children: React.ReactNode
}

export const BasePages = (props: BasePagesProps) => {
	const { children } = props
	return (
		<div className="w-full h-[89%] flex flex-col items-center justify-center bg-gray-50 rounded-md shadow-md">
			{children}
		</div>
	)
}
