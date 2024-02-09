import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_API } from "../Utils/constants";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
	//Fetch Data from TMDB API and update store
	const dispatch = useDispatch();

	const getPopularMovies = async () => {
		const data = await fetch(MOVIES_API + "popular", API_OPTIONS);
		const json = await data.json();
		dispatch(addPopularMovies(json.results));
	};
	useEffect(() => {
		getPopularMovies();
	}, []);
};
export default usePopularMovies;
