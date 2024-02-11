import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import Footer from "./Footer";

const GptMovieSuggestion = () => {
	const { movieResults, movieNames } = useSelector((store) => store.gpt);

	if (!movieResults) return null;
	return (
		<>
			<div className="p-4 m-4 bg-black text-white bg-opacity-60">
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
			<Footer />
		</>
	);
};

export default GptMovieSuggestion;
