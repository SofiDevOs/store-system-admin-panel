"use client";

import { useParams } from "next/navigation";
import { useGetEmployeeById } from "@/hooks/useGetEmployeeById";
import { formatDate } from "@/lib/formatDate";
import Input from "../../components/Form/Input";
import { useState, useEffect } from "react";

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
			<form className="flex flex-col">
				<div className="flex gap-4 items-center">
					<Input
						placeholder="Nombre"
						value={form?.name}
						onChange={handleChange("name")}
					/>
					<Input
						placeholder="Apellido"
						value={form?.lastname}
						onChange={handleChange("lastname")}
					/>
				</div>
				<Input
					type="text"
					placeholder="Correo"
					value={form?.email}
					onChange={handleChange("email")}
				/>
				<Input
					type="text"
					placeholder="Teléfono"
					value={form?.phone}
					onChange={handleChange("phone")}
				/>
				<Input
					type="text"
					placeholder="Departamento"
					value={form?.department}
					onChange={handleChange("department")}
				/>
				<Input
					type="text"
					placeholder="Puesto"
					value={form?.position}
					onChange={handleChange("position")}
				/>
				<Input
					type="text"
					placeholder="Salario"
					value={form?.salary?.toString()}
					onChange={handleChange("salary")}
				/>
				<Input
					type="text"
					placeholder="Fecha de ingreso"
					value={formatDate(form?.createdAt || "")}
					readonly
				/>
			</form>
		</>
	);
};

export default Page;
