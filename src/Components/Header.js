import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	};
	return (
		<div className="absolute px-10 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
			<img
				className="w-48"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"
				alt="logo"
			/>
			{user && (
				<div className="flex p-2 space-x-2">
					<img className="w-12 h-12" src={user?.photoURL} alt="user-icon" />
					<button
						className="cursor-pointer px-4 py-2 bg-[#e50914] text-white border-0 rounded-md font-bold"
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
