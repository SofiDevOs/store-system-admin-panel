"use client";
import Form from "next/form";
import Input from "./Input";

const EmployeeForm = () => {
	return (
		<Form
			action=""
			className="flex flex-col self-center p-2 rounded bg-slate-700 w-fit"
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
			<Input name="nss" label="Número de seguro social" />
			<Input name="rfc" label="RFC"  />
		</Form>
	);
};

export default EmployeeForm;
