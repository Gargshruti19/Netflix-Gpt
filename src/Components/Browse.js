import { useEffect } from "react";
import { API_OPTIONS, MOVIES_API } from "../Utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";

const Browse = () => {
	const dispatch = useDispatch();

	const getNowPlayingMovies = async () => {
		const data = await fetch(MOVIES_API, API_OPTIONS);
		const json = await data.json();
		console.log(json.results);
		dispatch(addNowPlayingMovies(json.results));
	};
	useEffect(() => {
		getNowPlayingMovies();
	}, []);
	return (
		<div>
			<Header />
		</div>
	);
};

export default Browse;
