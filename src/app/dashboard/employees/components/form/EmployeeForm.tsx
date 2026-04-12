"use client";
import Form from "next/form";
import Input from "./Input";
import { useCreateEmployee } from "@/hooks/useCreateEmployee";

function EmployeeForm() {
	const { register, isLoading, error } = useCreateEmployee();
	return (
		<Form
			action={register}
			className="flex flex-col self-center p-6 rounded-xl bg-slate-700 w-fit border-box  *:text-white/80 gap-4"
		>
			<Input
				name="name"
				label="Nombre"
				placeholder="El nombre del empleado"
			/>
			<Input
				name="lastname"
				label="Apellido"
				placeholder="El apellido del Empleado"
			/>
			<input type="date" name="birthdate" id="birthdate" />
			<Input name="nss" label="Número de seguro social" />
			<Input name="rfc" label="RFC" />
			<Input name="address" label="Dirección" />
			<Input name="salary" label="Salario" />
			<Input name="email" label="Correo electrónico" />
			<input type="file" name="profileImage" id="profile-image" />
			<button
				type="submit"
				disabled={isLoading}
				className="bg-slate-400 hover:bg-blue-700 text-slate-300 font-bold py-2 px-4 rounded"
			>
				{isLoading ? "Registrando..." : "Registrar Empleado"}
			</button>
			{error && <p className="text-red-500 mt-1 text-xs">{error}</p>}
		</Form>
	);
}

export default EmployeeForm;
