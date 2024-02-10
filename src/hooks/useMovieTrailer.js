import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	//fetch my trailer video and updating the store with trailer video data
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
		getMovieVideos();
	}, []);
};
export default useMovieTrailer;
