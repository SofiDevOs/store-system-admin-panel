import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";

export const useCreateEmployee = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const register = async (formData: FormData) => {
		setIsLoading(true);
		setError(null);
		const fields = ["name", "lastname", "nss", "rfc", "address", "salary", "email", "birthdate", "profileImage"] as const;
		const data = Object.fromEntries(
			fields.map((field) => [
				field,
				formData.get(field)?.toString() || "",
			]),
		) as Record<(typeof fields)[number], string>;
		if (fields.some((field) => data[field].trim() === "")) {
			setError("All fields are required");
			setIsLoading(false);
			return;
		}
		try {
			await apiFetch("/auth/register", { method: "POST", body: data });

			router.refresh();
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (err: unknown) {
			setError("An error occurred while registering the employee");
		} finally {
			setIsLoading(false);
		}
	};
	return { register, isLoading, error };
};
