import { FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video pt-[23%] px-20 absolute bg-gradient-to-r from-black ">
			<h1 className="text-6xl font-bold text-white">{title}</h1>
			<p className="py-6 text-lg w-1/3 text-white">{overview}</p>
			<div className="flex space-x-2">
				<button className="bg-white text-black px-10 py-3 rounded-md text-xl font-sans flex items-center justify-center gap-2 font-semibold hover:bg-opacity-80">
					<FaPlay /> Play
				</button>
				<button className=" bg-gray-700 text-white px-10 py-3  rounded-md text-xl bg-opacity-50 font-sans flex items-center justify-center gap-2 hover:bg-opacity-70">
					<FiInfo /> More Info
				</button>
			</div>
		</div>
	);
};
export default VideoTitle;
