import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store?.movies);
	if (movies === null) return; //early return

	return (
		movies.nowPlayingMovies && (
			<div className="-mt-96 z-20 relative">
				<Movielist title={"Now Playing"} movies={movies?.nowPlayingMovies} />
				<Movielist title={"Trending"} movies={movies?.nowPlayingMovies} />
				<Movielist title={"Popular"} movies={movies?.nowPlayingMovies} />
				<Movielist
					title={"Upcoming Movies"}
					movies={movies?.nowPlayingMovies}
				/>
				<Movielist title={"Horror Movies"} movies={movies?.nowPlayingMovies} />
			</div>
		)
	);
};

export default SecondaryContainer;
