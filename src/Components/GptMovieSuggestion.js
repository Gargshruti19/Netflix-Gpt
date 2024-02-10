import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptMovieSuggestion = () => {
	const { movieResults, movieNames } = useSelector((store) => store.gpt);

	if (!movieResults) return null;
	return (
		<div className="p-4 m-4 bg-black text-white bg-opacity-90">
			<div>
				{movieNames.map((movieName, index) => (
					<Movielist
						key={movieName}
						title={movieName}
						movies={movieResults[index]}
					/>
				))}
			</div>
		</div>
	);
};

export default GptMovieSuggestion;
