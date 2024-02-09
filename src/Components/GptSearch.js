import { BG_URL } from "../Utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
	return (
		<div className="">
			<div className="absolute -z-20 ">
				<img src={BG_URL} alt="background" />
			</div>
			<GptSearchBar />
			<GptMovieSuggestion />
		</div>
	);
};

export default GptSearch;
