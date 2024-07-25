import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import icon from "./assets/images/icon.png";
import loader from "./assets/images/puff.svg";
// import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import PropTypes from "prop-types";
// import Signinpage from "./pages/Signinpage.jsx";
import Signin from "./pages/Signin.jsx";

const App = () => {
	const { currentUser, loading } = useContext(AuthContext);
	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/signin" />;
		}
		return children;
	};

	if (loading) {
		return (
			<div className="bg-slate-100 min-h-screen flex justify-center items-center text-center flex-col">
				<div className="flex gap-4 items-center mb-8">
					<img src={icon} className="w-10" />
					<h1 className="font-black text-slate-700 text-2xl">AnsariChat</h1>
				</div>
				<img src={loader} alt="Loader" />
			</div>
		);
	}

	return (
		<Routes>
			<Route
				path="/"
				element={
					<ProtectedRoute>
						<Home />
					</ProtectedRoute>
				}
			/>
			<Route path="/signin" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};

App.propTypes = {
	children: PropTypes.node,
};

export default App;
