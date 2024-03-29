import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidatedData } from "../Utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_URL, USER_AVATAR } from "../Utils/constants";

const Login = () => {
	const dispatch = useDispatch();
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errMessage, setErrMessage] = useState(null);
	const email = useRef(null);
	const password = useRef(null);
	// console.log(navigate("/browse"));
	const name = useRef(null);
	// console.log(email.current?.value, password.current?.value);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};
	const handleBtnClick = () => {
		//Validate form data
		const message = checkValidatedData(
			email.current?.value,
			password.current?.value
			// name.current?.value
		);
		if (message) {
			setErrMessage(message);
			return;
		}

		//create a new user account
		//Signin / Signup logic`

		if (!isSignInForm) {
			//Sign Up logic
			createUserWithEmailAndPassword(
				auth,
				email.current?.value,
				password.current?.value
			)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: USER_AVATAR,
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
						})
						.catch((error) => {
							setErrMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrMessage(errorCode + "-" + errorMessage);
				});
		} else {
			//Sign In logic
			signInWithEmailAndPassword(
				auth,
				email.current?.value,
				password.current?.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrMessage(errorCode + "-" + errorMessage);
				});
		}
	};
	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					className="h-screen object-cover w-screen"
					src={BG_URL}
					alt="background"
				/>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className=" p-12 bg-black absolute w-10/12 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mt-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-md"
			>
				<h2 className="font-bold text-3xl py-4 ">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h2>
				{!isSignInForm && (
					<input
						ref={name}
						className="p-4 my-2 w-full bg-transparent rounded-md border-2 border-gray-700"
						type="text"
						placeholder="Full Name"
					/>
				)}
				<input
					ref={email}
					className="p-4 my-2 w-full bg-transparent rounded-md border-2 border-gray-700"
					type="email"
					placeholder="E-mail Address"
				/>

				<input
					ref={password}
					className="p-4 my-2 w-full bg-transparent rounded-md border-2 border-gray-700"
					type="password"
					placeholder="Password"
				/>
				<p className="text-sm text-[#e50914] py-2 font-bold">{errMessage}</p>
				<button
					className="p-2 my-2 bg-[#e50914] px-6 w-full rounded-md"
					onClick={handleBtnClick}
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
					{isSignInForm
						? "New to Netlix? Sign Up Now"
						: "Already registered? Sign In Now"}
				</p>
			</form>
		</div>
	);
};

export default Login;
