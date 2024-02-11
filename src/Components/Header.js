import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";
const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	};
	const handleGptSearchClick = () => {
		//Toggle GPT Search
		dispatch(toggleGptSearchView());
	};
	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				// console.log(user);
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});

		//Unsubscribe when component unmounts
		return () => unsubscribe();
	}, []);

	return (
		<div className="absolute px-10 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col sm:flex-row md:flex-row sm:justify-between md:justify-between items-center">
			<img className="w-48" src={LOGO_URL} alt="logo" />

			{user && (
				<div className="flex p-2 justify-between">
					{showGptSearch && (
						<select
							className="bg-black text-white border-0 text-sm w-20 h-8 mt-2 rounded-sm p-1"
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option
									className="text-sm"
									key={lang.identifier}
									value={lang.identifier}
								>
									{lang.name}
								</option>
							))}
						</select>
					)}
					<button
						className="px-4 sm:py-1 md:py-2 sm:px-4 md:px-6 mx-4 text-white bg-purple-800 border-0 rounded-md font-bold font-sans text-sm sm:text-lg md:text-xl"
						onClick={handleGptSearchClick}
					>
						{showGptSearch ? "Home Page" : "GPT Search"}
					</button>
					<div className="flex flex-col items-center">
						<img
							className=" w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 pt-1"
							src={user?.photoURL}
							alt="user-icon"
							onClick={handleSignOut}
						/>
						<button className="text-[10px] sm:text-sm md:text-lg cursor-pointer px-3 md:px-4  text-white border-0 rounded-md font-normal mx-2">
							Sign Out
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
