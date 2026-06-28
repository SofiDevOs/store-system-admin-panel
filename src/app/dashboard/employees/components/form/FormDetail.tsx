import Input from "./Input";
import { formatDate } from "@/lib/formatDate";
import type { Employee } from "@/types/employee.type";

const FormDetail = ({
	form,
	handleChange,
}: {
	form: Employee;
	handleChange: (
		field: string,
	) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<form className="flex flex-col ">
			<div className="flex gap-4 items-center">
				<Input
					name="name"
					placeholder="Nombre"
					value={form?.name}
					handleChange={handleChange("name")}
				/>
				<Input
					name="lastname"
					placeholder="Apellido"
					value={form?.lastname}
					handleChange={handleChange("lastname")}
				/>
			</div>
			<Input
				name="email"
				type="text"
				placeholder="Correo"
				value={form?.email}
				handleChange={handleChange("email")}
			/>
			<Input
				type="text"
				placeholder="Teléfono"
				value={form?.phone}
				handleChange={handleChange("phone")}
			/>
			<Input
				name="department"
				type="text"
				placeholder="Departamento"
				value={form?.department}
				handleChange={handleChange("department")}
			/>
			<Input
				name="position"
				type="text"
				placeholder="Puesto"
				value={form?.position}
				handleChange={handleChange("position")}
			/>
			<Input
				name="salary"
				type="text"
				placeholder="Salario"
				value={form?.salary?.toString()}
				handleChange={handleChange("salary")}
			/>
			<Input
				name="createdAt"
				type="date"
				placeholder="Fecha de ingreso"
				value={formatDate(form?.createdAt || "")}
			/>
		</form>
	);
};

export default FormDetail;
