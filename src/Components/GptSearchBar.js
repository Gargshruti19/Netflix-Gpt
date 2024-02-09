import language from "../Utils/languageConstants";

const GptSearchBar = () => {
	return (
		<div className="pt-[10%]">
			<form className=" bg-black w-1/2 m-auto grid grid-cols-12">
				<input
					type="text"
					className="p-4 m-4 col-span-9 border-0"
					placeholder={language.hindi.gptSearchPlaceholder}
				/>
				<button className="py-2 px-6 bg-[#e50914] text-white border-0 rounded-md col-span-3 m-4">
					{language.hindi.search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
