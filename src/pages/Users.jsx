// import { Avatar } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import PropTypes from "prop-types";

const Users = ({ users, onUserClick, selectedUser }) => {
	const { currentUser } = useContext(AuthContext);

	const sortedUsers = [...users].sort((a, b) => {
		return a.displayName.localeCompare(b.displayName);
	});

	return (
		<div className="px-5 py-3">
			<h3 className="mb-1 text-xs font-semibold uppercase text-gray-400">
				Chats
			</h3>
			<div className="overflow-y-auto h-[calc(100vh-128px)] p-2 divide-y divide-gray-200">
				{sortedUsers.map((user) => {
					if (user.uid !== currentUser.uid) {
						return (
							<div
								className={`${
									user.uid === selectedUser?.uid ? "bg-slate-200" : ""
								} flex gap-2 p-3 cursor-pointer rounded-lg`}
								key={user.uid}
								onClick={() => onUserClick(user)}
							>
								<div className="flex items-center">
									<img
										className="w-10 h-10 rounded-full mr-3 flex-shrink-0 items-start"
										src={user.photoURL}
										width="46"
										height="46"
										alt={user.displayName}
									/>
									<div>
										<h4 className="text-sm font-semibold text-gray-900">
											{user.displayName}
										</h4>
										<div className="text-[13px]">
											Hey Lauren ✨, first of all… · 14 Mar
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	onUserClick: PropTypes.func.isRequired,
	selectedUser: PropTypes.object,
};

export default Users;
