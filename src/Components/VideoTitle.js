const VideoTitle = ({ title, overview }) => {
	return (
		<div className="pt-36 px-16">
			<h1 className="text-6xl font-bold">{title}</h1>
			<p className="py-6 text-lg w-1/3">{overview}</p>
			<div className="flex space-x-2">
				<button className="bg-white text-black px-12 py-3 border-2 border-black rounded-md text-2xl">
					▶️ Play
				</button>
				<button className="bg-gray-700 text-white px-12 py-3  rounded-md text-2xl opacity-60 font-bold">
					More Info
				</button>
			</div>
		</div>
	);
};
export default VideoTitle;
