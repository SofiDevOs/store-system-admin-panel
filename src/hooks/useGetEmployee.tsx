import { apiFetch } from "@/lib/api";
import { Employee } from "@/types/raw/employee.raw.type";
import { useEffect, useState } from "react";

export const useGetEmployee = () => {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadEmployees = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const data = await apiFetch<Employee[]>("/employees");
				setEmployees(data);
			} catch (err: any) {
				setError(err.message || "Error al cargar los empleados");
				console.error("Error en useGetEmployee:", err);
			} finally {
				setIsLoading(false);
			}
		};

		loadEmployees();
	}, []);

	return { employees, isLoading, error };
};
