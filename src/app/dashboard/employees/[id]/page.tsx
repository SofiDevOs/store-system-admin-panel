"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useGetEmployeeById } from "@/hooks/useGetEmployeeById";
import useUpdateEmployee from "@/hooks/useUpdateEmployee";

import FormDetail from "../components/form/FormDetail";
import Input from "../components/form/Input";

import { formatDate } from "@/lib/formatDate";

const Page = () => {
	const params = useParams();
	const employeeId = params.id as string;


	const { employee, isLoading, error } = useGetEmployeeById(
		params.id as string,
	);

	const {updateEmployee, isLoading:isUpdating, error:updateError} = useUpdateEmployee();


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

		const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if(!form) return;
			await updateEmployee(employeeId, form);
		};
		if (isLoading) {
			return <div>Cargando...</div>;
		}


	return (
		<>
			<span className="text-2xl font-bold">
				Detalles del empleado #{params.id as string}
			</span>
			<FormDetail onSubmit={handleSubmit}>
				<div className="flex gap-4 items-center">
					<Input
						name="name"
						placeholder="Nombre"
						value={form?.name || ""}
						handleChange={handleChange("name")}
					/>
					<Input
						name="lastname"
						placeholder="Apellido"
						value={form?.lastname || ""}
						handleChange={handleChange("lastname")}
					/>
				</div>
				<Input
					name="email"
					type="text"
					placeholder="Correo"ww
					value={form?.email || ""}
					handleChange={handleChange("email")}
				/>
				<Input
					name="phone"
					type="text"
					placeholder="Teléfono"
					value={form?.phone || ""}
					handleChange={handleChange("phone")}
				/>
				<Input
					name="department"
					type="text"
					placeholder="Departamento"
					value={form?.department || ""}
					handleChange={handleChange("department")}
				/>
				{/* <Input
					name="position"
					type="text"
					placeholder="Puesto"
					value={form?.position || ""}
					handleChange={handleChange("position")}
				/> */}
				<Input
					name="salary"
					type="text"
					placeholder="Salario"
					value={form?.salary?.toString() || ""}
					handleChange={handleChange("salary")}
				/>
				{/* <Input
					name="createdAt"
					type="date"
					placeholder="Fecha de ingreso"
					value={formatDate(form?.createdAt || "")}
				/> */}

				<div className="flex justify-center items-center">
					<button type="submit" className="btn btn-primary" disabled={isUpdating}>
						{isUpdating ? "Actualizando..." : "Actualizar"}
					</button>
				</div>
			</FormDetail>
		</>
	);
};

export default Page;
