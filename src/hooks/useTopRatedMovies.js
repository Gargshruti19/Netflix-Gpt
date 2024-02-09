import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_API } from "../Utils/constants";
import { addTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
	//Fetch Data from TMDB API and update store
	const dispatch = useDispatch();

	const getTopRatedMovies = async () => {
		const data = await fetch(MOVIES_API + "top_rated", API_OPTIONS);
		const json = await data.json();
		dispatch(addTopRatedMovies(json.results));
	};
	useEffect(() => {
		getTopRatedMovies();
	}, []);
};
export default useTopRatedMovies;
