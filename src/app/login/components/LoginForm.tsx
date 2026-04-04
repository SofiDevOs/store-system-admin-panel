"use client";
import Form from "next/form";
import { useAuth } from "@/hooks/useAuth";

const LoginForm = () => {
	const { login, isLoading, error } = useAuth();

	return (
		<Form
			noValidate
			action={login}
			className="flex flex-col self-center p-4  text-slate-100 bg-slate-900 w-fit  rounded-lg gap-2"
		>
			<label htmlFor="email">Nombre</label>
			<input
				type="email"
				name="email"
				placeholder="Tu email"
				className="rounded p-1 bg-slate-600 text-white"
				disabled={isLoading}
				required
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				placeholder="Tu password"
				className="rounded p-1 bg-slate-600 text-white"
				disabled={isLoading}
				required
			/>
			<button
				type="submit"
				disabled={isLoading}
				className="mt-2 p-2 bg-cyan-900 rounded text-white hover:bg-cyan-700 transition-colors cursor-pointer"
			>
				{isLoading ? "Iniciando sesión..." : "Login"}
			</button>
			{error && <p className="text-red-500 mt-1 text-xs">{error}</p>}
		</Form>
	);
};

export default LoginForm;
