/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	//fetch my trailer video and updating the store with trailer video data
	const trailerVideo = useSelector((store) => store.movies.trailerVideo);
	const getMovieVideos = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			API_OPTIONS
		);
		const json = await data.json();
		const filterdata = json.results.filter((video) => video.type === "Trailer");
		const trailer = filterdata.length ? filterdata[2] : json.results[0];
		dispatch(addTrailerVideo(trailer));
	};
	useEffect(() => {
		!trailerVideo && getMovieVideos();
	}, []);
};
export default useMovieTrailer;
