import { useState } from "react";
import CurrentUserHeader from "../Chat/CurrentUserHeader";
import Search from "../Chat/Search";
import Users from "../../pages/Users";
import PropTypes from "prop-types";

const Sidebar = ({ users, onUserClick, selectedUser }) => {
	const [searchKeyword, setSearchKeyword] = useState("");

	const sortedUsers = [...users].sort((a, b) => {
		return a.displayName.localeCompare(b.displayName);
	});

	const filteredUsers = sortedUsers.filter((user) =>
		user.displayName.toLowerCase().includes(searchKeyword.toLowerCase())
	);

	const handleUserClick = (user) => {
		onUserClick(user);
		setSearchKeyword("");
	};

	return (
		<div className="border-e h-full flex flex-col">
			<CurrentUserHeader />
			<Search
				searchKeyword={searchKeyword}
				onSearchChange={(value) => setSearchKeyword(value)}
			/>
			<Users
				users={filteredUsers}
				onUserClick={handleUserClick}
				selectedUser={selectedUser}
			/>
		</div>
	);
};

Sidebar.propTypes = {
	users: PropTypes.array,
	onUserClick: PropTypes.func,
	selectedUser: PropTypes.object,
};

export default Sidebar;
