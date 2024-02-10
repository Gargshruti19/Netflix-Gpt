export const LOGO_URL =
	"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
	"https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const BG_URL =
	"https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
	},
};

export const MOVIES_API = "https://api.themoviedb.org/3/movie/";

export const VIDEO_URL = "https://www.youtube.com/embed/";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
	{
		identifier: "en",
		name: "English",
	},
	{
		identifier: "hindi",
		name: "Hindi",
	},
	{
		identifier: "spanish",
		name: "Spanish",
	},
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
