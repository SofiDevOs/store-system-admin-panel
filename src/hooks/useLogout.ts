import { useState } from "react";
import { apiFetch } from "@/lib/api";

export const useLogout = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const logout = async () => {
		setIsLoading(true);
		setError(null);
		try {
			await apiFetch("/auth/logout", { method: "POST" });
		} catch (err: unknown) {
			setError(
				err instanceof Error ? err.message : "Error al cerrar sesión",
			);
		} finally {
			setIsLoading(false);
			window.location.href = "/login";
		}
	};

	return { logout, isLoading, error };
};
