import icon from "../../assets/images/chat.png";

const Logo = () => {
	return (
		<div className="flex gap-4 items-center">
			<img src={icon} className="w-16" />
			<h1 className="font-black text-slate-700 text-2xl">TalkWise</h1>
		</div>
	);
};

export default Logo;
