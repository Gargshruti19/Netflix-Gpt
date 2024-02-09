import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_API } from "../Utils/constants";
import { addUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
	//Fetch Data from TMDB API and update store
	const dispatch = useDispatch();

	const getUpcomingMovies = async () => {
		const data = await fetch(MOVIES_API + "upcoming", API_OPTIONS);
		const json = await data.json();
		dispatch(addUpcomingMovies(json.results));
	};
	useEffect(() => {
		getUpcomingMovies();
	}, []);
};
export default useUpcomingMovies;
