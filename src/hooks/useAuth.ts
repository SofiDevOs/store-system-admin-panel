import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
export const useAuth = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
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
			await apiFetch("/auth/login", { method: "POST", body: { email, password } });

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
