import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIES_API } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	//Fetch Data from TMDB API and update store
	const dispatch = useDispatch();
	const nowPlayingMovies = useSelector(
		(store) => store.movies.nowPlayingMovies
	);
	const getNowPlayingMovies = async () => {
		const data = await fetch(MOVIES_API + "now_playing?page=1", API_OPTIONS);
		const json = await data.json();
		dispatch(addNowPlayingMovies(json.results));
	};
	useEffect(() => {
		!nowPlayingMovies && getNowPlayingMovies();
	}, []);
};
export default useNowPlayingMovies;
