import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO_URL } from "../Utils/constants";
const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
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
		<div className="absolute px-10 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
			<img className="w-48" src={LOGO_URL} alt="logo" />
			{user && (
				<div className="flex p-2 space-x-2">
					<img className="w-12 h-12" src={user?.photoURL} alt="user-icon" />
					<button
						className="cursor-pointer px-4 py-2 bg-[#e58909] text-white border-0 rounded-md font-bold"
						onClick={handleSignOut}
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
