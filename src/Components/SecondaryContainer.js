import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store?.movies);
	if (movies === null) return; //early return
	return (
		movies.nowPlayingMovies && (
			<div className=" bg-black">
				<div className="-mt-96 z-20 relative px-12">
					<Movielist title={"Now Playing"} movies={movies?.nowPlayingMovies} />
					<Movielist title={"Top Rated"} movies={movies?.topRatedMovies} />
					<Movielist title={"Popular"} movies={movies?.popularMovies} />
					<Movielist
						title={"Upcoming Movies"}
						movies={movies?.upcomingMovies}
					/>
					<Movielist
						title={"Horror Movies"}
						movies={movies?.nowPlayingMovies}
					/>
				</div>
			</div>
		)
	);
};

export default SecondaryContainer;
