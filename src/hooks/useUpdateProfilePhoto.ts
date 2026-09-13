import { useState, useCallback } from "react";
import { apiFetch } from "@/lib/api";

export const useUpdateProfilePhoto = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const updateProfilePhoto = useCallback(async (id: string, file: File) => {
        if (!file.type.startsWith("image/")) {
            setError(new Error("Only image files are allowed"));
            return;
        }
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);
        try {
            const formData = new FormData();
            formData.append("image", file);
            await apiFetch(`/profile/${id}`, {
                method: "PUT",
                body: formData,
            });
            setIsSuccess(true);
        } catch (error) {
            setError(error instanceof Error ? error : new Error(String(error)));
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        isSuccess,
        error,
        updateProfilePhoto,
    };
};