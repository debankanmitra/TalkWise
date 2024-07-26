import ChatPartnerHeader from "./ChatPartnerHeader";
import Chats from "./Chats";
import Input from "./Input";
import Logo from "../Common/Logo.jsx";
import PropTypes from "prop-types";

const MainContent = ({ selectedUser }) => {
	return (
		<>
			{selectedUser ? (
				<div className="h-full">
					<ChatPartnerHeader user={selectedUser} />
					<Chats selectedUser={selectedUser} />
					<Input selectedUser={selectedUser} />
				</div>
			) : (
				<div className="bg-slate-200 h-full flex justify-center items-center text-center flex-col">
					<Logo />
					<p className="mt-8">Click on the user to start chatting...</p>
				</div>
			)}
		</>
	);
};

MainContent.propTypes = {
	selectedUser: PropTypes.object,
};

export default MainContent;
