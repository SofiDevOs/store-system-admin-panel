import { useState } from "react";
import { apiFetch } from "@/lib/api";
import type { Employee } from "@/types/employee.type";
import { useRouter } from "next/navigation";


const useUpdateEmployee = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const router = useRouter();
    const updateEmployee = async (id: string, updatedFields: Partial<Employee>) => {
        setIsLoading(true);
        setError(null);
        try {
            const payload = {
                name: updatedFields.name,
                lastname: updatedFields.lastname,
                email: updatedFields.email,
                nss: updatedFields.nss,
                rfc: updatedFields.rfc,
                position: updatedFields.position,
                salary: updatedFields.salary,
                isActive: updatedFields.isActive,
                createdAt: updatedFields.createdAt,
            }
            await apiFetch(`/employees/${id}`, {
                method: "PUT",
                body: payload,
            })
            router.refresh();
            router.push(`/dashboard/employees/${id}`);
        } catch (error) {
            setError(error as Error);
        } finally {
            setIsLoading(false);
        }
    }
    return {
        isLoading,
        error,
        updateEmployee,
    };
};

export default useUpdateEmployee;