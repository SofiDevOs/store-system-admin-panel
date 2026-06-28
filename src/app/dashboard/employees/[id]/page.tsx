"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useGetEmployeeById } from "@/hooks/useGetEmployeeById";
import FormDetail from "../components/form/FormDetail";
import type { Employee } from "@/types/employee.type";

const Page = () => {
	const params = useParams();
	const { employee, isLoading, error } = useGetEmployeeById(
		params.id as string,
	);

	const [form, setForm] = useState(employee);

	useEffect(() => {
		if (employee) {
			setForm(employee);
		}
	}, [employee]);

	const handleChange =
		(field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setForm((prev) =>
				prev ? { ...prev, [field]: e.target.value } : prev,
			);
		};

	return (
		<>
			<span className="text-2xl font-bold">
				Detalles del empleado #{params.id as string}
			</span>
			<FormDetail
				form={employee as Employee}
				handleChange={handleChange}
			/>
		</>
	);
};

export default Page;
