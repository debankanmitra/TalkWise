import { Avatar } from "@mui/material";
import { signOut } from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext, useState } from "react";
import { auth } from "../../firebase/firebase.js";
import { AuthContext } from "../../contexts/AuthContext.jsx";

const CurrentUserHeader = () => {
	const { currentUser } = useContext(AuthContext);
	const [toggleMore, setToggleMore] = useState(false);
	return (
		<div className="relative h-16 flex justify-between items-center py-2 px-4">
			<div className="flex items-center gap-3">
				{currentUser.photoURL ? (
					<Avatar src={currentUser.photoURL} />
				) : (
					<Avatar>{currentUser.displayName?.[0]}</Avatar>
				)}
				<h4 className="font-semibold text-lg">{currentUser.displayName}</h4>
			</div>

			<div>
				<div
					className={`cursor-pointer p-2 ${
						toggleMore ? "bg-slate-200" : ""
					} rounded-full`}
					onClick={() => setToggleMore(!toggleMore)}
				>
					<svg
						className="h-4 w-4 fill-current text-gray-400 hover:text-gray-500"
						viewBox="0 0 16 16"
					>
						<path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
					</svg>
				</div>
				{toggleMore && (
					<div className="absolute top-14 right-4 w-44 bg-white py-2 rounded shadow border">
						<div
							className="cursor-pointer hover:bg-slate-100 py-2 px-5 text-slate-700 flex gap-2 items-center"
							onClick={() => signOut(auth)}
						>
							<LogoutIcon /> Logout
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CurrentUserHeader;
