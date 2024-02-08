import { useSelector } from "react-redux";
import { VIDEO_URL } from "../Utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
	const trailer = useSelector((store) => store.movies?.trailerVideo);
	useMovieTrailer();

	return (
		<div>
			<iframe
				width="560"
				height="315"
				src={VIDEO_URL + trailer?.key}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};
export default VideoBackground;
