import { FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({ title, overview }) => {
	return (
		<div className="w-screen aspect-video pt-[30%] sm:pt-[25%] md:pt-[20%] xl:pt-[20%] px-6 sm:px-9 md:px-12 lg:px-15 xl:px-20 absolute bg-gradient-to-r from-black ">
			<h1 className=" text-3xl sm:text-3xl md:text-4xl xl:text-6xl font-bold text-white">
				{title}
			</h1>
			<p className="md:py-2 py-5 xl:text-lg lg:text-[19px] md:w-5/12 w-1/3 text-white hidden sm:hidden md:inline-block xl:inline-block md:text-[16px]">
				{overview}
			</p>
			<div className="flex space-x-2 mt-3">
				<button className="bg-white text-black sm:px-8 sm:py-2 md:px-8 md:py-1 xl:px-10 xl:py-3 py-1 px-4 rounded-md text-sm sm:text-[16px] md:text-[18px] xl:text-xl font-sans flex items-center justify-center gap-2 font-semibold hover:bg-opacity-80 mt-2 sm:mt-0 md:mt-0 xl:mt-0">
					<FaPlay /> Play
				</button>
				<button className=" bg-gray-700 text-white sm:px-8 md:px-8 px-10 sm:py-2 md:py-2 py-3 xl-py-3  rounded-md xl:text-xl md:tetx-[18px] sm:text-[16px] bg-opacity-50 font-sans md:flex items-center justify-center gap-2 hover:bg-opacity-70  hidden sm:flex xl:flex">
					<FiInfo /> More Info
				</button>
			</div>
		</div>
	);
};
export default VideoTitle;
