import { BG_URL } from "../Utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
	return (
		<>
			<div className="fixed -z-20 ">
				<img className="h-screen object-cover w-screen" src={BG_URL} alt="background" />
			</div>
			<div className="">
				<GptSearchBar />
				<GptMovieSuggestion />
			</div>
		</>
	);
};

export default GptSearch;
