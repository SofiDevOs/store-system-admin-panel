import { useState } from "react";
import { useRouter } from "next/navigation";
export const useAuth = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const API_URL = process.env.NEXT_PUBLIC_API_URL;

	const login = async (formData: FormData) => {
		setIsLoading(true);
		setError(null);
		const email = formData.get("email")?.toString() || "";
		const password = formData.get("password")?.toString() || "";

		if (email.trim() === "") {
			setError("Email is required");
			setIsLoading(false);
			return;
		}

		if (password.trim() === "") {
			setError("Password is required");
			setIsLoading(false);
			return;
		}

		try {
			const csrfResponse = await fetch(`${API_URL}/auth/csrf-token`, {
				method: "GET",
				credentials: "include",
				headers: {
					Accept: "application/json",
				},
				cache: "no-store",
			});

			if (!csrfResponse.ok) {
				throw new Error("Unable to establish a secure connection with the server");
			}

			const { csrfToken } = await csrfResponse.json();

			const loginResponse = await fetch(`${API_URL}/auth/login`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
					"x-csrf-token": csrfToken,
				},
				body: JSON.stringify({ email, password }),
			});

			if (!loginResponse.ok) {
				const errorData = await loginResponse.json().catch(() => null);
				throw new Error(
					errorData?.errors?.[0]?.msg || errorData?.message || "Login failed",
				);
			}

			router.push("/");
			router.refresh();
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (error: unknown) {
            if(email.trim() === ""){
                setError("Email is required");
                return;
            }
            if(password.trim() === ""){
                setError("Password is required");
                return;
            }
			setError("An error occurred during login");
		} finally {
			setIsLoading(false);
		}
	};
	return { login, isLoading, error };
};
