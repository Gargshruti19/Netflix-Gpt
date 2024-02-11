import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
	return (
		<>
			<div className="fixed -z-20  h-screen w-screen bg-gradient-to-r from-indigo-600 to-purple-500"></div>
			<div className="flex flex-col gap-6">
				<GptSearchBar />
				<GptMovieSuggestion />
			</div>
		</>
	);
};

export default GptSearch;
