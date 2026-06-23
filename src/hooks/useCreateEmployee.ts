import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";

/** Text fields that must be non-empty strings. */
const TEXT_FIELDS = [
	"name",
	"lastname",
	"nss",
	"rfc",
	"address",
	"salary",
	"email",
	"birthdate",
	"phone",
	"department",
	"role",
] as const;

export const useCreateEmployee = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const register = async (formData: FormData) => {
		setIsLoading(true);
		setError(null);

		// 1. Validate all required text fields
		const missing = TEXT_FIELDS.filter(
			(field) => !formData.get(field)?.toString().trim(),
		);
		if (missing.length > 0) {
			setError(`Faltan campos requeridos: ${missing.join(", ")}`);
			setIsLoading(false);
			return;
		}

		// 2. Build a real multipart FormData so the file reaches multer intact.
		//    We cannot pass a plain object when there is a File — JSON.stringify
		//    would turn it into "[object File]" or an empty string.
		const payload = new FormData();
		TEXT_FIELDS.forEach((field) => {
			payload.append(field, formData.get(field) as string);
		});

		// Append the file only if the user selected one (it is optional at the
		// server level; the backend generates a default avatar otherwise).
		const photo = formData.get("profileImage");
		if (photo instanceof File && photo.size > 0) {
			payload.append("profileImage", photo);
		}

		try {
			await apiFetch("/employees", { method: "POST", body: payload });
			router.refresh();
		} catch (err: unknown) {
			setError(
				err instanceof Error
					? err.message
					: "An error occurred while registering the employee",
			);
		} finally {
			setIsLoading(false);
		}
	};

	return { register, isLoading, error };
};
