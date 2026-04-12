'use server';

import { apiFetch } from "@/lib/api";

export const formAction = async (formData: FormData) => {
    await apiFetch("/auth/register", { method: "POST", body: formData});
}