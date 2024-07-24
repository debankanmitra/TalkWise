import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router>
		<AuthProvider>
			<App />
		</AuthProvider>
	</Router>
);
