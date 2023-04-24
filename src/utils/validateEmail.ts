const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateEmail = (email: string) => emailRegex.test(email);

export default validateEmail;
