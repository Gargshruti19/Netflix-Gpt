import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (movies === null) return; //early return
	const mainMovie = movies[1];
	const { original_title, overview, id } = mainMovie;
	return (
		<div className="lg:pt-3 md:pt-7 sm:pt-7 pt-[20%] bg-black">
			<VideoTitle title={original_title} overview={overview} />
			<VideoBackground movieId={id} />
		</div>
	);
};

export default MainContainer;
