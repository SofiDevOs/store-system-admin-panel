import { apiFetch } from "@/lib/api";
export const useGetEmployee = () => {
    const data = apiFetch("/employees").then((data) => data);
    return data;
};
