import { useSelector } from "react-redux";
import language from "../Utils/languageConstants";
import { useRef } from "react";
import openai from "../Utils/openai";
const GptSearchBar = () => {
	const searchText = useRef(null);
	const langKey = useSelector((store) => store.config.lang);
	const handleGptSearchClick = async () => {
		console.log(searchText.current.value);
		const gptQuery =
			"Act as a Movie Recommendation system and suggest some movies for the query : " +
			searchText.current.value +
			" only give me names of 5 movies, coma separated like the example result given ahead, Example Result: Gadar, Sholay, Don, Bajirao Mastani, Golmaal ";

		// make an api call to openai gpt api and get movies result
		const gptResults = await openai.chat.completions.create({
			messages: [{ role: "user", content: gptQuery }],
			model: "gpt-3.5-turbo",
		});
		console.log(gptResults.choices);
	};
	return (
		<div className="pt-[10%]">
			<form
				className=" bg-black w-1/2 m-auto grid grid-cols-12"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					ref={searchText}
					type="text"
					className="p-4 m-4 col-span-9 border-0"
					placeholder={language[langKey]?.gptSearchPlaceholder}
				/>
				<button
					className="py-2 px-6 bg-[#e50914] text-white border-0 rounded-md col-span-3 m-4"
					onClick={handleGptSearchClick}
				>
					{language[langKey]?.search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
