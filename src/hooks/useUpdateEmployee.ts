import { useState } from "react";
import { apiFetch } from "@/lib/api";
import type { Employee } from "@/types/employee.type";
import { useRouter } from "next/router";


const useUpdateEmployee = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const router = useRouter();
    const UpdateEmployee = async (id: string, updatedFields: Partial<Employee>) => {
        setLoading(true);
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
            router.reload();
            router.push(`/dashboard/employees/${id}`);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }
    return {
        loading,
        error,
        UpdateEmployee,
    };
};

export default useUpdateEmployee;