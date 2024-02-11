import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
	if (!posterPath) return null;
	return (
		<div className="w-36 md:w-[150px] sm:[180px] sm:h-[190px] md:h-[200px] h-[180px] ">
			<img
				className="w-full h-full object-cover"
				src={IMG_CDN_URL + posterPath}
				alt="poster"
			/>
		</div>
	);
};

export default MovieCard;
