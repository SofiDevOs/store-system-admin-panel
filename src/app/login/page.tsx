import { ThemeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/context/ThemeContext";

import LoginForm from "./components/LoginForm";

const page = () => {
	return (
		<ThemeProvider>
			<section className="flex flex-col  justify-center items-center gap-4 w-full h-full min-h-screen">
				<ThemeToggle />
				<LoginForm />
			</section>
		</ThemeProvider>
	);
};

export default page;
