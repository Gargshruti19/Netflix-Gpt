import { useSelector } from "react-redux";
import language from "../Utils/languageConstants";

const GptSearchBar = () => {
	const langKey = useSelector((store) => store.config.lang);
	console.log(langKey);
	return (
		<div className="pt-[10%]">
			<form className=" bg-black w-1/2 m-auto grid grid-cols-12">
				<input
					type="text"
					className="p-4 m-4 col-span-9 border-0"
					placeholder={language[langKey]?.gptSearchPlaceholder}
				/>
				<button className="py-2 px-6 bg-[#e50914] text-white border-0 rounded-md col-span-3 m-4">
					{language[langKey]?.search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
