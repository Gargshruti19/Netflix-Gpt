import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
	if (movies === null) return; //early return

	// console.log(movies);
	return (
		<div className="p-6 ">
			<h1 className="text-3xl py-4 text-white">{title}</h1>
			<div className="overflow-x-scroll flex  hidden-scrollbar">
				<div className="flex gap-5">
					{movies.map((movie) => (
						<MovieCard key={movie?.id} posterPath={movie?.poster_path} />
					))}
					{/* <MovieCard posterPath={movies[0].poster_path} /> */}
				</div>
			</div>
		</div>
	);
};

export default Movielist;
