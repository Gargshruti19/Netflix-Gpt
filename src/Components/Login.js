import Header from "./Header";

const Login = () => {
	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="background"
				/>
			</div>
			<form className="p-12 bg-black absolute w-1/4 mt-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-md">
				<h2 className="font-bold text-3xl py-4 ">Sign In</h2>
				<input
					className="p-4 my-2 w-full bg-transparent rounded-md border-2 border-gray-700"
					type="email"
					placeholder="E-mail Address"
				/>
				<input
					className="p-4 my-2 w-full bg-transparent rounded-md border-2 border-gray-700"
					type="password"
					placeholder="Password"
				/>
				<button className="p-2 my-2 bg-[#e50914] px-6 w-full rounded-md">
					Sign In
				</button>
				<p className="py-6">New to Netlix? Sign Up Now</p>
			</form>
		</div>
	);
};

export default Login;
