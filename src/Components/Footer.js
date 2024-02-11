import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="bg-black border-t-4 border-white">
			<div className="bg-black h-36 text-white  flex items-center justify-between w-8/12 mx-auto">
				<h1 className="text-4xl">NetflixGPT</h1>
				<p className="flex text-3xl justify-between items-center gap-2">
					<FaRegCopyright />
					<span>Shruti Garg</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
