export const checkValidatedData = (email, password, name) => {
	const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
		email
	);
	const isPasswordValid =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
	const isFullName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
	if (!isEmailValid) return "Email ID is not valid";
	if (!isPasswordValid) return "Password is not valid";
	if (!isFullName) return "Please enter full name with first capital letter";

	return null;
};
