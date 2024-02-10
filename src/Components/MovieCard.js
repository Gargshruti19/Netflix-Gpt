import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
	if (!posterPath) return null;
	return (
		<div className=" w-36 md:w-[150px] h-[200px] ">
			<img
				className="w-full h-full object-cover"
				src={IMG_CDN_URL + posterPath}
				alt="poster"
			/>
		</div>
	);
};

export default MovieCard;
