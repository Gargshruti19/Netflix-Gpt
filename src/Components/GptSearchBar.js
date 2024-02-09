import { useDispatch, useSelector } from "react-redux";
import language from "../Utils/languageConstants";
import { useRef } from "react";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";
const GptSearchBar = () => {
	const dispatch = useDispatch();
	const searchText = useRef(null);
	const langKey = useSelector((store) => store.config.lang);

	//Search movie tmdb
	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movie +
				"&include_adult=false&language=en-US&page=1",
			API_OPTIONS
		);
		const json = await data.json();
		return json.results;
	};

	const handleGptSearchClick = async () => {
		// console.log(searchText.current.value);
		const gptQuery =
			"Act as a Movie Recommendation system and suggest some movies for the query : " +
			searchText.current.value +
			" only give me names of 5 movies, coma separated like the example result given ahead, Example Result: Gadar, Sholay, Don, Bajirao Mastani, Golmaal ";

		// make an api call to openai gpt api and get movies result
		const gptResults = await openai.chat.completions.create({
			messages: [{ role: "user", content: gptQuery }],
			model: "gpt-3.5-turbo",
		});
		if (!gptResults.choices) {
			//write error
		}
		console.log(gptResults.choices[0]?.message?.content.split(", ")); //split will give array
		const gptMovies = gptResults?.choices[0]?.message?.content.split(", ");
		//for each movie  I will search tmdb movie

		const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
		//[Promise array]

		const tmdbResults = await Promise.all(promiseArray);

		dispatch(
			addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
		);
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
