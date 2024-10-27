import AccountCircleIcon from "@mui/icons-material/AccountCircle"

export const Header = () => {
	return (
		<header className="h-[10%] bg-white shadow-md flex items-center justify-between px-4 mb-2 rounded-md">
			<div className="flex items-center gap-4">
				<h1 className="text-lg font-semibold text-gray-800">Header</h1>
			</div>
			<div className="flex gap-2 items-center">
				<AccountCircleIcon fontSize="large" />
				<p>Usuário</p>
			</div>
		</header>
	)
}
