import { useEffect } from "react";
import { API_OPTIONS, VIDEO_API } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = () => {
	const dispatch = useDispatch();
	//fetch my trailer video and updating the store with trailer video data
	const getMovieVideos = async () => {
		const data = await fetch(VIDEO_API, API_OPTIONS);
		const json = await data.json();
		console.log(json.results);
		const filterdata = json.results.filter((video) => video.type === "Trailer");
		const trailer = filterdata.length ? filterdata[0] : json.results[0];
		console.log(trailer);
		dispatch(addTrailerVideo(trailer));
	};
	useEffect(() => {
		getMovieVideos();
	}, []);
};
export default useMovieTrailer;
