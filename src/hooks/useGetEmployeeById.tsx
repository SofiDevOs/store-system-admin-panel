import { apiFetch } from "@/lib/api";
import { Employee } from "@/types/raw/employee.raw.type";
import { useEffect, useState } from "react";

export const useGetEmployeeById = (id: string) => {
	const [employee, setEmployee] = useState<Employee | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadEmployee = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const data = await apiFetch<Employee>(`/employees/${id}`);
				setEmployee(data);
			} catch (err: any) {
				setError(err.message || "Error al cargar el empleado");
				console.error("Error en useGetEmployeeById:", err);
			} finally {
				setIsLoading(false);
			}
		};

		loadEmployee();
	}, [id]);

	return { employee, isLoading, error };
};
