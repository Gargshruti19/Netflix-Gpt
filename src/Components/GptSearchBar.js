import { useDispatch, useSelector } from "react-redux";
import language from "../Utils/languageConstants";
import { useRef } from "react";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovieResult } from "../Utils/gptSlice";
import { useNavigate } from "react-router-dom";
const GptSearchBar = () => {
	const navigate = useNavigate();
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
			navigate("/error");
		}
		// console.log(gptResults.choices[0]?.message?.content.split(", ")); //split will give array
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
		<div className="pt-[30%] xl:pt-[10%] md:pt-[13%] sm:pt-[20%]">
			<form
				className="rounded-md  bg-black w-11/12 sm:w-9/12 md:w-9/12 lg:w-7/12 xl:w-1/2 m-auto grid grid-cols-12 mx-auto"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input
					ref={searchText}
					type="text"
					className="rounded-md p-2  md:p-4 xl:p-6 m-4 col-span-9 border-0 placeholder:text-sm sm:placeholder:text-[16px] md:placeholder:text-[18px] xl:placeholder:text-xl"
					placeholder={language[langKey]?.gptSearchPlaceholder}
				/>
				<button
					className="py-1 md:py-2 px-2 md:px-6 bg-[#e50914] text-white border-0 rounded-md col-span-3 m-4"
					onClick={handleGptSearchClick}
				>
					{language[langKey]?.search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
