// import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const Search = ({ searchKeyword, onSearchChange }) => {
	return (
		<div className="search border-b border-slate-200 h-16 flex">
			<div className="flex items-center gap-2 px-4 text-sm py-2 m-2 bg-gray-100 focus-within:shadow-lg w-full rounded-xl">
				<SearchIcon className="w-20 h-auto text-slate-500" />
				<input
					type="text"
					className="h-full w-full bg-gray-100 pr-2 text-sm text-gray-700 outline-none"
					placeholder="Search user..."
					onChange={(e) => onSearchChange(e.target.value)}
					value={searchKeyword}
				/>
			</div>
		</div>
	);
};

Search.propTypes = {
	searchKeyword: PropTypes.string,
	onSearchChange: PropTypes.func,
};

export default Search;
