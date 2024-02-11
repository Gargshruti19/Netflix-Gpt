import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();

	return (
		<div className="flex flex-col justify-start items-center bg-blue-300 h-screen space-y-10">
			<h1 className="text-7xl mt-16">Oops!!</h1>
			<h2 className="text-7xl">Something went wrong!! 😟</h2>
			<h2 className="text-4xl">{err.status + ": " + err.statusText}</h2>
		</div>
	);
};

export default Error;
