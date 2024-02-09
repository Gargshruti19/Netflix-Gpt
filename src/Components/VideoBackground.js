import { useSelector } from "react-redux";
import { VIDEO_URL } from "../Utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const trailer = useSelector((store) => store.movies?.trailerVideo);
	useMovieTrailer(movieId);

	return (
		<div className="w-screen ">
			<iframe
				className="w-screen aspect-video"
				src={VIDEO_URL + trailer?.key + "?&autoplay=1&mute=1&loop=1"}
				title="YouTube video player"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};
export default VideoBackground;
