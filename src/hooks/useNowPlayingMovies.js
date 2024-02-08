import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_API } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	//Fetch Data from TMDB API and update store
	const dispatch = useDispatch();

	const getNowPlayingMovies = async () => {
		const data = await fetch(MOVIES_API, API_OPTIONS);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};
	useEffect(() => {
		getNowPlayingMovies();
	}, []);
};
export default useNowPlayingMovies;
