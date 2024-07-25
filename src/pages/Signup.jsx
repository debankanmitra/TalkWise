import { useState } from "react";
// import GoogleIcon from "@mui/icons-material/Google";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { auth, db, storage } from "../firebase/firebase";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Common/Logo";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Avatar } from "@mui/material";

const Signup = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisible, setPasswordVisibile] = useState(false);
	const [profileImage, setProfileImage] = useState(null);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const togglePasswordVisibility = () => {
		setPasswordVisibile(!passwordVisible);
	};

	const handleSignup = async (e) => {
		e.preventDefault();

		if (!firstName || !lastName || !email || !password) {
			alert("Please fill out all the fields!");
			return;
		}

		setLoading(true);

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredential.user;

			console.log(user);

			if (profileImage) {
				// Upload the profileImage to Firebase Storage
				const storageRef = ref(storage, `profileImages/${user.uid}`);
				const uploadTask = uploadBytesResumable(storageRef, profileImage);

				uploadTask.on(
					"state_changed",
					(snapshot) => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						console.log("Upload progress:", progress + "%");
					},
					(error) => {
						// Handle upload error if needed
						console.error("Upload error:", error);
						setLoading(false);
					},
					async () => {
						// On successful upload, get the download URL and update the user's profile with it
						const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
						await updateProfile(user, {
							displayName: `${firstName} ${lastName}`,
							photoURL: downloadURL,
						});

						await setDoc(doc(db, "users", user.uid), {
							uid: user.uid,
							displayName: `${firstName} ${lastName}`,
							email: user.email,
							photoURL: downloadURL,
						});

						setLoading(false);
						navigate("/");
					}
				);
			} else {
				await updateProfile(user, {
					displayName: `${firstName} ${lastName}`,
					photoURL: "",
				});

				await setDoc(doc(db, "users", user.uid), {
					uid: user.uid,
					displayName: `${firstName} ${lastName}`,
					email: user.email,
					photoURL: "",
				});

				setLoading(false);
				navigate("/");
			}
		} catch (error) {
			setLoading(false);
			console.log(error);

			switch (error.code) {
				case "auth/email-already-in-use":
					alert("The email address is already in use.");
					break;
				case "auth/invalid-email":
					alert("The email address is invalid.");
					break;
				case "auth/weak-password":
					alert("Password should be atleast 6 characters long.");
					break;
				default:
					alert("Something went wrong, please try again later.");
					break;
			}
		}
	};

	const handleGoogleSignup = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const userCredential = await signInWithPopup(auth, provider);

			const user = userCredential.user;

			await setDoc(doc(db, "users", user.uid), {
				uid: user.uid,
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
			});
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-slate-100 min-h-screen flex justify-center items-center flex-col">
			<div className="mb-8">
				<Logo />
			</div>
			<div className="w-[400px] bg-white text-slate-700 shadow rounded-lg p-8">
				<h4 className="text-2xl font-semibold text-center mb-5">SignUp</h4>
				<form>
					<div className="flex mb-3 gap-3">
						<input
							type="text"
							className="w-full border border-slate-300 shadow py-2 px-4 mb-3 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 outline-none rounded-lg"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input
							type="text"
							className="w-full border border-slate-300 shadow py-2 px-4 mb-3 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 outline-none rounded-lg"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<input
						type="email"
						className="w-full border border-slate-300 shadow py-2 px-4 mb-3 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 outline-none rounded-lg"
						placeholder="Email Address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className="flex border border-slate-300 shadow py-2 px-4 mb-3 rounded-lg">
						<input
							type={passwordVisible ? "text" : "password"}
							className="w-full disabled:opacity-50 outline-none"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button
							type="button"
							className="text-slate-400"
							onClick={togglePasswordVisibility}
						>
							{passwordVisible ? (
								<VisibilityOutlinedIcon />
							) : (
								<VisibilityOffOutlinedIcon />
							)}
						</button>
					</div>
					<label
						htmlFor="profile"
						className="cursor-pointer flex items-center gap-3 justify-center mb-3"
					>
						<p className="cursor-pointer bg-blue-600 px-3 py-2 font-[sans-serif] text-base text-white outline-none hover:bg-blue-700 rounded-lg">
							Select Image
						</p>
						{profileImage ? (
							<Avatar
								sx={{ width: 50, height: 50 }}
								src={URL.createObjectURL(profileImage)}
							/>
						) : (
							<Avatar sx={{ width: 50, height: 50 }} />
						)}
					</label>
					<input
						type="file"
						id="profile"
						accept="image/*"
						style={{ display: "none" }}
						onChange={(e) => setProfileImage(e.target.files[0])}
					/>
					<button
						type="submit"
						onClick={handleSignup}
						className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					>
						{loading ? "Signing Up..." : "Sign Up"}
					</button>
				</form>
				<p className="mt-3 text-center">
					Already have an account?{" "}
					<Link
						to="/signin"
						className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
					>
						Signin
					</Link>
				</p>
				<div className="flex items-center gap-3 my-5">
					<hr className="w-full border-slate-300" />
					<p>OR</p>
					<hr className="w-full border-slate-300" />
				</div>
				<button
					type="button"
					onClick={handleGoogleSignup}
					className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
				>
					<svg
						className="w-4 h-auto"
						width="46"
						height="47"
						viewBox="0 0 46 47"
						fill="none"
					>
						<path
							d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
							fill="#4285F4"
						/>
						<path
							d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
							fill="#34A853"
						/>
						<path
							d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
							fill="#FBBC05"
						/>
						<path
							d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
							fill="#EB4335"
						/>
					</svg>
					Sign in with Google
				</button>
			</div>
		</div>
	);
};

export default Signup;
