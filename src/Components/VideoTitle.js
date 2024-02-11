import { FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video pt-[35%] sm:pt-[25%] md:pt-[15%] px-6 md:px-20 absolute bg-gradient-to-r from-black ">
			<h1 className=" text-2xl sm:text-4xl md:text-6xl font-bold text-white">
				{title}
			</h1>
			<p className="py-6 text-lg w-1/3 text-white hidden md:inline-block">
				{overview}
			</p>
			<div className="flex space-x-2 w-[450px] mt-3">
				<button className="bg-white text-black sm:px-8 sm:py-2 md:px-10 md:py-3 py-2 px-4 rounded-md text-sm sm:text-[16px] md:text-xl font-sans flex items-center justify-center gap-2 font-semibold hover:bg-opacity-80 mt-2 sm:mt-0 md:mt-0">
					<FaPlay /> Play
				</button>
				<button className=" bg-gray-700 text-white sm:px-8 px-10 sm:py-2 py-3  rounded-md md:text-xl sm:text-[16px] bg-opacity-50 font-sans md:flex items-center justify-center gap-2 hover:bg-opacity-70  hidden sm:flex">
					<FiInfo /> More Info
				</button>
			</div>
		</div>
	);
};
export default VideoTitle;
