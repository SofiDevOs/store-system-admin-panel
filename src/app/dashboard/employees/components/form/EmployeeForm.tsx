"use client";
import Form from "next/form";
import Input from "./Input";

const EmployeeForm = () => {
	return (
		<Form
			action=""
			className="flex flex-col self-center p-6 rounded-xl bg-slate-700 w-fit *:text-white/80 gap-4"
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
			<input type="submit" value="Registrar" className="bg-slate-400 hover:bg-blue-700 text-slate-300 font-bold py-2 px-4 rounded"/>
		</Form>
	);
};

export default EmployeeForm;
